"use client"

import { motion } from "framer-motion"
import { Article } from "@/lib/mdx"
import { MDXContent } from "@/components/mdx-content"

interface BlogPostContentProps {
  article: Article
}

export function BlogPostContent({ article }: BlogPostContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <div className="mb-8">
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
        <p className="text-xl text-muted-foreground">{article.summary}</p>
      </div>
      
      <MDXContent code={article.content} />
    </motion.div>
  )
} 