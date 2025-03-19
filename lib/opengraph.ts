/**
 * Types for OpenGraph metadata
 */
export interface OpenGraphImage {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

/**
 * Fetches and extracts OpenGraph metadata from a URL
 */
export async function getOpenGraphImage(url: string): Promise<OpenGraphImage | null> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; OpenGraphBot/1.0)',
      },
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
      return null;
    }
    
    const html = await response.text();
    
    // Extract OG image URL
    const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["'][^>]*>/i);
    if (!ogImageMatch || !ogImageMatch[1]) {
      return null;
    }
    
    const imageUrl = ogImageMatch[1];
    
    // Extract width and height if available
    const ogWidthMatch = html.match(/<meta[^>]*property=["']og:image:width["'][^>]*content=["']([^"']*)["'][^>]*>/i);
    const ogHeightMatch = html.match(/<meta[^>]*property=["']og:image:height["'][^>]*content=["']([^"']*)["'][^>]*>/i);
    
    const width = ogWidthMatch && ogWidthMatch[1] ? parseInt(ogWidthMatch[1], 10) : undefined;
    const height = ogHeightMatch && ogHeightMatch[1] ? parseInt(ogHeightMatch[1], 10) : undefined;
    
    // Extract alt text from og:image:alt or og:title
    const ogAltMatch = html.match(/<meta[^>]*property=["']og:image:alt["'][^>]*content=["']([^"']*)["'][^>]*>/i);
    const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["'][^>]*>/i);
    
    const alt = ogAltMatch && ogAltMatch[1] 
      ? ogAltMatch[1] 
      : ogTitleMatch && ogTitleMatch[1] 
        ? ogTitleMatch[1] 
        : undefined;
    
    return {
      url: imageUrl,
      width,
      height,
      alt
    };
  } catch (error) {
    console.error(`Error fetching OpenGraph image for ${url}:`, error);
    return null;
  }
}

/**
 * Function to fetch just the OpenGraph image URL
 * Returns the image URL if successful
 */
export async function fetchOpenGraphImageUrl(url: string): Promise<string | null> {
  try {
    const ogImage = await getOpenGraphImage(url);
    if (!ogImage) return null;
    return ogImage.url;
  } catch (error) {
    console.error(`Failed to fetch OpenGraph image URL for ${url}:`, error);
    return null;
  }
} 