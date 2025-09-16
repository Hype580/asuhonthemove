import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { loadNannies, saveNannies, saveUploadedFile, generateId } from '@/lib/storage';
import type { Nanny } from '@/types/nanny';

export async function GET() {
  try {
    requireAuth();
    const nannies = await loadNannies();
    return NextResponse.json(nannies);
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    requireAuth();
    
    const formData = await request.formData();
    
    // Extract form fields
    const name = formData.get('name') as string;
    const background = JSON.parse(formData.get('background') as string);
    const education = JSON.parse(formData.get('education') as string);
    const experience = JSON.parse(formData.get('experience') as string);
    const zoom = formData.get('zoom') === 'true';
    const zoomLevel = parseFloat(formData.get('zoomLevel') as string) || 1;
    const objectPosition = formData.get('objectPosition') as string || '50% 40%';
    const imageFile = formData.get('image') as File;

    // Validate required fields
    if (!name || !imageFile) {
      return NextResponse.json(
        { error: 'Name and image are required' },
        { status: 400 }
      );
    }

    // Save uploaded image
    const imagePath = await saveUploadedFile(imageFile);

    // Create new nanny object
    const newNanny: Nanny = {
      id: generateId(),
      name,
      image: imagePath,
      background,
      education,
      experience,
      zoom,
      zoomLevel,
      objectPosition
    };

    // Load existing nannies and add new one
    const nannies = await loadNannies();
    nannies.push(newNanny);
    await saveNannies(nannies);

    return NextResponse.json(newNanny, { status: 201 });
  } catch (error) {
    console.error('Failed to create nanny:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create nanny' },
      { status: 500 }
    );
  }
} 