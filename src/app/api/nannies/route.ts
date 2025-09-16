import { NextResponse } from 'next/server';
import { loadNannies } from '@/lib/storage';
import { migrateExistingNannies } from '@/lib/migration';

export async function GET() {
  try {
    let nannies = await loadNannies();
    
    // If no nannies exist, run migration
    if (nannies.length === 0) {
      await migrateExistingNannies();
      nannies = await loadNannies();
    }
    
    return NextResponse.json(nannies);
  } catch (error) {
    console.error('Failed to load nannies:', error);
    return NextResponse.json(
      { error: 'Failed to load nannies' },
      { status: 500 }
    );
  }
} 