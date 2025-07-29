'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/components/auth/auth0-provider';
import { LogIn, LogOut, User, Settings } from 'lucide-react';
import Link from 'next/link';

export function AuthButton() {
  const { user, isLoading, loginWithRedirect, logout } = useAuth();

  if (isLoading) {
    return (
      <Button variant="ghost" size="sm" disabled>
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
      </Button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 text-sm">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">{user.name || user.email}</span>
        </div>
        <Link href="/admin">
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Admin</span>
          </Button>
        </Link>
        <Button onClick={logout} variant="ghost" size="sm">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline ml-2">Sign Out</span>
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={loginWithRedirect} variant="ghost" size="sm">
      <LogIn className="h-4 w-4" />
      <span className="hidden sm:inline ml-2">Sign In</span>
    </Button>
  );
}
