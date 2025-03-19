"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Article } from "@/lib/mdx"
import { Calendar, ArrowRight } from "lucide-react"

interface BlogCardProps {
  post: Article
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.article 
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/20 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
      }}
    >
      {/* Accent top border with gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/60" />
      
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <div className="p-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Calendar className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground mb-5 line-clamp-2">{post.summary}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center text-primary font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
            Read more
            <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
          </div>
        </div>
      </Link>
    </motion.article>
  )
} 