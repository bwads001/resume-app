import { NextRequest, NextResponse } from 'next/server';
import { fetchArticleMetadata } from '@/app/actions/blog';

export const runtime = 'nodejs';

/**
 * API route that fetches article metadata for OpenGraph images
 * This is accessible from Node.js runtime
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
): Promise<NextResponse> {
  try {
    const { slug } = await params;
    const data = await fetchArticleMetadata(slug);
    
    return NextResponse.json(data);
  } catch (error) {
    const { slug } = await params;
    console.error(`Error in /api/og-metadata/${slug}:`, error);
    return NextResponse.json(
      { 
        status: 'error', 
        error: 'Failed to fetch article metadata',
        title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        summary: ''
      },
      { status: 500 }
    );
  }
} 