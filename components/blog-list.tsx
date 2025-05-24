"use client"

import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog-card"
import { Article } from "@/lib/mdx"
import { PenLine, Rss } from "lucide-react"
import Link from "next/link"

interface BlogListProps {
  articles: Article[]
}

export function BlogList({ articles }: BlogListProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full text-primary mb-4">
          <PenLine className="h-5 w-5 mr-2" />
          <span className="font-medium">Blog & Articles</span>
        </div>
        <h1 className="text-4xl font-bold mb-4 bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Latest Insights
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
          Thoughts, experiences, and insights about technology, development, and platform engineering
        </p>
        <Link 
          href="/feed.xml" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          title="RSS Feed"
        >
          <Rss className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">Subscribe via RSS</span>
        </Link>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {articles.map((article, index) => (
          <BlogCard key={article.id} post={article} index={index} />
        ))}
      </motion.div>
    </div>
  )
} 