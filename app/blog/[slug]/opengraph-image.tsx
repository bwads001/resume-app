import { ImageResponse } from 'next/og'

// Use Edge runtime for image generation
export const runtime = 'edge'

export const alt = 'Blog Post'
export const size = {
  width: 1200,
  height: 630,
}

// Define WLogo component for OpenGraph
function WLogo({ size = 120 }: { size?: number }) {
  return (
    <svg 
      fill="none" 
      width={size}
      height={size}
      viewBox="0 0 48 48"
      style={{
        position: 'absolute',
        top: '40px',
        right: '40px',
        color: 'rgba(255, 255, 255, 0.15)',
      }}
    >
      <path 
        clipRule="evenodd" 
        d="M11.671 10.027C10.5815 10.2086 9.84545 11.2391 10.027 12.3286L14.027 36.3286C14.1661 37.163 14.815 37.8196 15.6477 37.9686C16.4803 38.1175 17.3166 37.7265 17.7363 36.9921L23.9998 26.031L30.2633 36.9921C30.683 37.7265 31.5193 38.1175 32.352 37.9686C33.1846 37.8196 33.8336 37.163 33.9726 36.3286L37.9726 12.3286C38.1542 11.2391 37.4182 10.2086 36.3286 10.027C35.2391 9.84545 34.2086 10.5815 34.027 11.671L30.9502 30.1319L25.7363 21.0075C25.3802 20.3844 24.7175 19.9998 23.9998 19.9998C23.2821 19.9998 22.6194 20.3844 22.2633 21.0075L17.0494 30.1319L13.9726 11.671C13.791 10.5815 12.7606 9.84545 11.671 10.027Z" 
        fill="currentColor" 
        fillRule="evenodd"
      />
    </svg>
  )
}

export default async function Image({ params }: { params: { slug: string } }) {
  let title = '';
  let summary = '';
  let imageUrl = '';
  
  try {
    const { slug } = params;
    // Fetch article data from our API endpoint that uses server actions
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/og-metadata/${slug}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log("Our data is: ", data);
      if (data.title) title = data.title;
      if (data.summary) summary = data.summary;
      if (data.image) imageUrl = data.image;
    }
  } catch (error) {
    console.error('Error fetching metadata for OpenGraph image:', error);
  }
  
  return new ImageResponse(
    (
      imageUrl
      ? (
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}${imageUrl}`}
          alt={title || alt}
          width={size.width}
          height={size.height}
          style={{ objectFit: 'cover' }}
        />
      )
      : (
        <div
          style={{
            background: 'linear-gradient(135deg, hsl(210, 100%, 15%), hsl(200, 100%, 25%))',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px',
            fontFamily: 'system-ui, sans-serif',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            bottom: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
          }} />
          
          <div style={{
            position: 'absolute',
            top: '-50px',
            left: '-50px',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)',
          }} />
          
          {/* Logo in top right */}
          <WLogo size={200} />
          
          {/* Title area - larger and prominent */}
          <div
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: '1.2',
              marginBottom: '28px',
              maxWidth: '90%',
              marginTop: '-20px',
            }}
          >
            {title}
          </div>
          
          {/* Stylish separator */}
          <div style={{
            width: '600px',
            height: '4px',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 100%)',
            marginLeft: '20px',
            marginBottom: '32px',
            borderRadius: '2px',
          }} />
          
          {/* Summary area with improved styling */}
          <div
            style={{
              fontSize: '26px',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.4',
              maxWidth: '85%',
              maxHeight: '135px',
              overflow: 'hidden',
            }}
          >
            {summary || "Explore insights and experiences from Bryan Wadsworth's blog"}
          </div>
          
          {/* Subtle branded element at bottom */}
          <div 
            style={{
              position: 'absolute',
              bottom: '40px',
              right: '40px',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '20px',
              fontWeight: 'bold',
            }}
          >
            bryanwadsworth.com
          </div>
        </div>
      )
    ),
    size
  )
}
