import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, experiences, and insights about technology, development, and platform engineering',
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 