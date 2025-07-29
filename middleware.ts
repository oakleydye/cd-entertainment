import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  // Only apply middleware to admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check if user has auth session cookie
    const sessionCookie = request.cookies.get('appSession');
    
    if (!sessionCookie) {
      // Redirect to login if no session
      const loginUrl = new URL('/api/auth/login', request.url);
      loginUrl.searchParams.set('returnTo', request.url);
      return NextResponse.redirect(loginUrl);
    }
    
    try {
      // Validate session and check admin authorization
      const session = JSON.parse(sessionCookie.value);
      
      // Check if session is expired
      if (session.expiresAt < Date.now()) {
        const loginUrl = new URL('/api/auth/login', request.url);
        loginUrl.searchParams.set('returnTo', request.url);
        return NextResponse.redirect(loginUrl);
      }
      
      // Check if user is authorized admin
      const adminEmails = process.env.ADMIN_EMAILS;
      if (!adminEmails) {
        console.error('ADMIN_EMAILS not configured');
        return NextResponse.redirect(new URL('/unauthorized?error=config_error', request.url));
      }
      
      const allowedEmails = adminEmails
        .split(',')
        .map(email => email.trim().toLowerCase());
      
      if (!allowedEmails.includes(session.user.email.toLowerCase())) {
        console.log(`Unauthorized admin access attempt by: ${session.user.email}`);
        return NextResponse.redirect(new URL('/unauthorized?error=unauthorized', request.url));
      }
      
    } catch (error) {
      // Invalid session, redirect to login
      const loginUrl = new URL('/api/auth/login', request.url);
      loginUrl.searchParams.set('returnTo', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*'
};
