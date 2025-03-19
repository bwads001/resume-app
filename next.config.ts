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
};

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
