"use client"

import { motion } from "framer-motion"
import { Article } from "@/lib/mdx"
import { MDXContent } from "@/components/mdx-content"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Script from "next/script"

/**
 * Props for the BlogPostContent component
 * @interface BlogPostContentProps
 * @property {Article} article - The blog article data to be displayed
 */
interface BlogPostContentProps {
  article: Article
}

/**
 * Renders a full blog post with animated layout and styling
 * @param {BlogPostContentProps} props - The component props
 * @returns {JSX.Element} - The rendered blog post content with header and MDX content
 */
export function BlogPostContent({ article }: BlogPostContentProps) {
  // Create JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.summary,
    "author": {
      "@type": "Person",
      "name": "Bryan Wadsworth"
    },
    "datePublished": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bryanwadsworth.com/blog/${article.slug}`
    },
    "keywords": article.tags.join(", ")
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Add JSON-LD structured data */}
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Link 
        href="/blog" 
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to blog
      </Link>

      <motion.article
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-card dark:bg-blog-card border border-border rounded-xl shadow-sm p-8 sm:p-10"
      >
        <header className="mb-10 border-b border-border pb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>{article.date}</span>
            <span>•</span>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{article.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">{article.summary}</p>
        </header>
        
        <MDXContent code={article.content} />
      </motion.article>
    </div>
  )
} 