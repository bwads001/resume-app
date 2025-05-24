'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { OpenGraphImage as OGImage } from '@/lib/opengraph';

interface OpenGraphImageProps {
  url: string;
  alt?: string;
  width?: number;
  height?: number; 
  className?: string;
  fallbackImage?: string;
}

export default function OpenGraphImage({
  url,
  alt,
  width = 1200,
  height = 630,
  className = '',
}: OpenGraphImageProps) {
  const [ogImage, setOgImage] = useState<OGImage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchOgImage() {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/og-image?url=${encodeURIComponent(url)}`);
        
        if (!response.ok) {
          throw new Error(`Failed to fetch OpenGraph image: ${response.status}`);
        }
        
        const data = await response.json();
        setOgImage(data);
      } catch (err) {
        console.error('Error fetching OpenGraph image:', err);
        setError(err instanceof Error ? err.message : 'Failed to load image');
      } finally {
        setLoading(false);
      }
    }
    
    fetchOgImage();
  }, [url]);
  
  // Loading state
  if (loading) {
    return (
      <div className={`bg-gray-100 animate-pulse flex items-center justify-center rounded-md border border-muted shadow-xs ${className}`} style={{ width, height, minHeight: 200 }}>
        <p className="text-gray-400 text-sm">Loading image...</p>
      </div>
    );
  }
  
  // Error state
  if (error || !ogImage) {
    return (
      <div className={`bg-gray-100 flex items-center justify-center rounded-md border border-muted shadow-xs ${className}`} style={{ width, height, minHeight: 200 }}>
        <p className="text-gray-500 text-sm p-4 text-center">
          {error || `Failed to load image for ${url}`}
        </p>
      </div>
    );
  }
  
  // Success state
  return (
    <div className="relative rounded-md overflow-hidden border border-muted shadow-xs">
      <Image
        src={ogImage.url}
        alt={ogImage.alt || alt || `Screenshot of ${url}`}
        width={ogImage.width || width}
        height={ogImage.height || height}
        className={`w-full ${className}`}
        priority
      />
    </div>
  );
} 