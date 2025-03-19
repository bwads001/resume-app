import { getAllArticles } from "@/lib/mdx"

export async function GET() {
  const articles = await getAllArticles()
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  // Create RSS feed
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Your Blog Name</title>
    <link>${baseUrl}</link>
    <description>Thoughts, experiences, and insights about technology, development, and platform engineering</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${articles.map((article) => `
    <item>
      <title>${article.title}</title>
      <link>${baseUrl}/blog/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${article.slug}</guid>
      <description><![CDATA[${article.summary}]]></description>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
    </item>`).join('')}
  </channel>
</rss>`

  // Return the RSS feed
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=18000',
    },
  })
} 