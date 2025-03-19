"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BlogPost } from "@/data/blog"

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article 
      className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-foreground">{post.title}</h3>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>
          <p className="text-muted-foreground mb-4">{post.summary}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  )
} 