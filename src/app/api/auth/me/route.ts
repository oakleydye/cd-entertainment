import { NextRequest, NextResponse } from 'next/server';
import { isAdminUser } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const sessionCookie = request.cookies.get('appSession');
  
  if (!sessionCookie) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  
  try {
    const session = JSON.parse(sessionCookie.value);
    if (session.expiresAt < Date.now()) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 });
    }
    
    // Double-check admin authorization
    if (!isAdminUser(session.user.email)) {
      return NextResponse.json({ error: 'Not authorized' }, { status: 403 });
    }
    
    return NextResponse.json(session.user);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 });
  }
}
