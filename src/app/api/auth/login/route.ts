import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Redirect to Auth0 login
  const loginUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/authorize?response_type=code&client_id=${process.env.AUTH0_CLIENT_ID}&redirect_uri=${process.env.AUTH0_BASE_URL}/api/auth/callback&scope=openid profile email`;
  return NextResponse.redirect(loginUrl);
}
