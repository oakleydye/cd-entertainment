import { NextRequest, NextResponse } from 'next/server';
import { isAdminUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  
  if (!code) {
    return NextResponse.redirect(`${process.env.AUTH0_BASE_URL}?error=no_code`);
  }
  
  try {
    // Exchange code for tokens
    const tokenResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: process.env.AUTH0_CLIENT_ID,
        client_secret: process.env.AUTH0_CLIENT_SECRET,
        code,
        redirect_uri: `${process.env.AUTH0_BASE_URL}/api/auth/callback`,
      }),
    });
    
    if (!tokenResponse.ok) {
      throw new Error('Token exchange failed');
    }
    
    const tokens = await tokenResponse.json();
    
    // Get user info
    const userResponse = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/userinfo`, {
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    });
    
    if (!userResponse.ok) {
      throw new Error('User info fetch failed');
    }
    
    const user = await userResponse.json();
    
    // Check if user is authorized admin
    if (!isAdminUser(user.email)) {
      console.log(`Unauthorized login attempt by: ${user.email}`);
      return NextResponse.redirect(`${process.env.AUTH0_BASE_URL}?error=unauthorized&message=You are not authorized to access the admin dashboard`);
    }
    
    // Create session (simplified - in production use proper session management)
    const response = NextResponse.redirect(`${process.env.AUTH0_BASE_URL}/admin`);
    response.cookies.set('appSession', JSON.stringify({
      user,
      accessToken: tokens.access_token,
      expiresAt: Date.now() + (tokens.expires_in * 1000)
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: tokens.expires_in
    });
    
    return response;
  } catch (error) {
    console.error('Auth callback error:', error);
    return NextResponse.redirect(`${process.env.AUTH0_BASE_URL}?error=callback_failed`);
  }
}
