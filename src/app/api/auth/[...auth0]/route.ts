import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Extract the auth action from the pathname
  const authAction = pathname.split('/').pop();
  
  switch (authAction) {
    case 'login':
      // Redirect to Auth0 login
      const loginUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/authorize?response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${process.env.AUTH0_BASE_URL}/api/auth/callback&scope=openid profile email`;
      return NextResponse.redirect(loginUrl);
      
    case 'logout':
      // Redirect to Auth0 logout
      const logoutUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${process.env.AUTH0_BASE_URL}`;
      const response = NextResponse.redirect(logoutUrl);
      // Clear session cookie
      response.cookies.delete('appSession');
      return response;
      
    case 'callback':
      // Handle Auth0 callback
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
      
    case 'me':
      // Return current user info
      const sessionCookie = request.cookies.get('appSession');
      if (!sessionCookie) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
      }
      
      try {
        const session = JSON.parse(sessionCookie.value);
        if (session.expiresAt < Date.now()) {
          return NextResponse.json({ error: 'Session expired' }, { status: 401 });
        }
        return NextResponse.json(session.user);
      } catch (error) {
        return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
      }
      
    default:
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
