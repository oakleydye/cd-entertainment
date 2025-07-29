import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Redirect to Auth0 logout
  const logoutUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${process.env.AUTH0_BASE_URL}`;
  const response = NextResponse.redirect(logoutUrl);
  // Clear session cookie
  response.cookies.delete('appSession');
  return response;
}
