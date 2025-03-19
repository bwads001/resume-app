import type { NextConfig } from "next";
import createMDX from '@next/mdx';

const withMDX = createMDX({
  // Add markdown options if needed
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  // Configure image domains
  images: {
    domains: [
      'cdn.sanity.io',  // For Sanity.io images
      'lovable.dev',    // For Lovable OG images
      'bolt.new',       // For Bolt OG images
      'replit.com',     // For Replit OG images
      'manus.im',       // For Manus OG images
      'files.manuscdn.com', // For Manus CDN images
      'v0.dev',         // For V0 OG images
      'opengraph.githubassets.com',  // For GitHub OG images
      'images.unsplash.com',  // For Unsplash images
      'assets.vercel.com',   // For Vercel assets
      'v0chat.vercel.sh',
    ],
  },
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
