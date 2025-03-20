'use server';

import { getArticleBySlug } from "@/lib/mdx";
import { revalidatePath } from 'next/cache';

/**
 * Server action to fetch and cache article data for OpenGraph images
 * This runs on the server (Node.js) but makes the data available to Edge functions
 */
export async function fetchArticleMetadata(slug: string) {
  try {
    // Fetch article data
    const article = await getArticleBySlug(slug);
    
    if (!article) {
      return {
        status: 'error',
        error: 'Article not found',
        title: formatSlug(slug),
        summary: `Article about ${formatSlug(slug)}`
      };
    }
    
    // Cache the data using Next.js cache mechanisms
    const articleData = {
      status: 'success',
      title: article.title || formatSlug(slug),
      summary: article.summary || '',
      date: article.date || ''
    };
    
    // Revalidate the path to ensure fresh data
    revalidatePath(`/blog/${slug}`);
    
    return articleData;
  } catch (error) {
    console.error(`Error fetching article metadata for ${slug}:`, error);
    return {
      status: 'error',
      error: 'Failed to fetch article',
      title: formatSlug(slug),
      summary: `Article about ${formatSlug(slug)}`
    };
  }
}

/**
 * Helper function to format a slug into a readable title
 */
function formatSlug(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
} 