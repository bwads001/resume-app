"use client"

import ReactMarkdown from "react-markdown"

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 mt-10">{children}</h1>,
          h2: ({ children }) => <h2 className="text-2xl font-semibold mb-4 mt-8">{children}</h2>,
          h3: ({ children }) => <h3 className="text-xl font-medium mb-3 mt-6">{children}</h3>,
          p: ({ children }) => <p className="mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal pl-6 mb-4">{children}</ol>,
          li: ({ children }) => <li className="mb-1">{children}</li>,
          a: ({ href, children }) => (
            <a href={href} className="text-primary hover:underline">
              {children}
            </a>
          ),
          code: ({ className, children }) => {
            if (className) {
              return (
                <pre className="bg-card p-4 rounded-md overflow-x-auto my-4">
                  <code className={className}>{children}</code>
                </pre>
              )
            }
            return <code className="bg-muted px-1.5 py-0.5 rounded">{children}</code>
          },
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-4">
              {children}
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
} 