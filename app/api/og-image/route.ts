import { NextResponse } from 'next/server';
import { getOpenGraphImage } from '@/lib/opengraph';

/**
 * API route to fetch OpenGraph image data
 * This allows us to fetch the OG data on the server while using
 * a client component in our MDX content
 */
export async function GET(request: Request) {
  // Get the URL from query params
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json(
      { error: 'URL parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Fetch the OG image data
    const ogImage = await getOpenGraphImage(url);
    
    if (!ogImage) {
      return NextResponse.json(
        { error: 'No OpenGraph image found' },
        { status: 404 }
      );
    }

    // Return the data as JSON
    return NextResponse.json(ogImage);
  } catch (error) {
    console.error(`Error fetching OpenGraph image for ${url}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch OpenGraph image' },
      { status: 500 }
    );
  }
} 