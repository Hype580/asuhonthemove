import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { migrateExistingNannies } from '@/lib/migration';

export async function POST() {
  try {
    requireAuth();
    await migrateExistingNannies();
    return NextResponse.json({ success: true, message: 'Migration completed' });
  } catch (error) {
    console.error('Migration failed:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Migration failed' },
      { status: 500 }
    );
  }
} 