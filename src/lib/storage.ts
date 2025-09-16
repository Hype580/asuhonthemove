import { kv } from '@vercel/kv';
import { put } from '@vercel/blob';
import type { Nanny } from '@/types/nanny';

const NANNIES_KEY = 'nannies';

// Load nannies from Vercel KV
export async function loadNannies(): Promise<Nanny[]> {
  try {
    const nannies = await kv.get<Nanny[]>(NANNIES_KEY);
    return nannies || [];
  } catch (error) {
    console.error('Failed to load nannies from KV:', error);
    return [];
  }
}

// Save nannies to Vercel KV
export async function saveNannies(nannies: Nanny[]): Promise<void> {
  try {
    await kv.set(NANNIES_KEY, nannies);
  } catch (error) {
    console.error('Failed to save nannies to KV:', error);
    throw new Error('Failed to save nannies');
  }
}

// Save uploaded file to Vercel Blob
export async function saveUploadedFile(file: File): Promise<string> {
  try {
    // Generate unique filename
    const timestamp = Date.now();
    const extension = file.name.split('.').pop() || 'jpg';
    const filename = `nanny-${timestamp}.${extension}`;
    
    // Upload to Vercel Blob
    const blob = await put(filename, file, {
      access: 'public',
    });
    
    return blob.url;
  } catch (error) {
    console.error('Failed to save uploaded file to Blob:', error);
    throw new Error('Failed to save uploaded file');
  }
}

// Generate unique ID
export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
} 