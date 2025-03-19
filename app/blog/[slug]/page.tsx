import { notFound } from "next/navigation"
import { getArticleBySlug } from "@/lib/mdx"
import { BlogPostContent } from "@/components/blog-post-content"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }
  
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <BlogPostContent article={article} />
    </div>
  )
} 