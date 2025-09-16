import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { loadNannies, saveNannies } from '@/lib/storage';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    requireAuth();
    
    const { id } = params;
    const nannies = await loadNannies();
    const updatedNannies = nannies.filter(nanny => nanny.id !== id);
    
    if (updatedNannies.length === nannies.length) {
      return NextResponse.json(
        { error: 'Nanny not found' },
        { status: 404 }
      );
    }
    
    await saveNannies(updatedNannies);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete nanny:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to delete nanny' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    requireAuth();
    
    const { id } = params;
    const nannies = await loadNannies();
    const nanny = nannies.find(nanny => nanny.id === id);
    
    if (!nanny) {
      return NextResponse.json(
        { error: 'Nanny not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(nanny);
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
} 