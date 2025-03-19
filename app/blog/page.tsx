import { getAllArticles } from "@/lib/mdx"
import { BlogList } from "@/components/blog-list"

export default async function Page({
  params,
}: {
  params?: Promise<Record<string, never>>
}) {
  // We still await params even though we don't use it, to follow the pattern
  if (params) await params
  
  const articles = await getAllArticles()
  
  return (
    <div className="container mx-auto px-4 py-20 bg-gradient-to-b from-background to-background/80">
      <BlogList articles={articles} />
    </div>
  )
} 