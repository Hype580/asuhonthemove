import { cookies } from 'next/headers';

export function isAuthenticated(): boolean {
  const session = cookies().get('admin_session');
  return !!session?.value;
}

export function requireAuth() {
  if (!isAuthenticated()) {
    throw new Error('Unauthorized');
  }
} 