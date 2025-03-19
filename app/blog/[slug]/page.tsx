"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { blogPosts } from "@/data/blog"
import { MarkdownContent } from "@/components/markdown-content"
import { notFound } from "next/navigation"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string
  
  const post = blogPosts.find((post) => post.slug === slug)
  
  if (!post) {
    notFound()
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span>{post.date}</span>
            <span>•</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <p className="text-xl text-muted-foreground">{post.summary}</p>
        </div>
        
        <MarkdownContent content={post.content} />
      </motion.div>
    </div>
  )
} 