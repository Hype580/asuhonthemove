import { NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  try {
    if (isAuthenticated()) {
      return NextResponse.json({ authenticated: true });
    } else {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 