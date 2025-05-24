import { notFound } from "next/navigation"
import { getArticleBySlug } from "@/lib/mdx"
import { BlogPostContent } from "@/components/blog-post-content"
import type { Metadata } from 'next'
import { fetchArticleMetadata } from "@/app/actions/blog"

/**
 * Generate dynamic metadata for each blog post
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug)
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found'
    }
  }
  
  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
      url: `/blog/${article.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.summary,
    }
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }
  
  // Prefetch metadata but don't revalidate during render
  // This makes the data available to API routes without causing render errors
  await fetchArticleMetadata(slug)
  
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <BlogPostContent article={article} />
    </div>
  )
} 