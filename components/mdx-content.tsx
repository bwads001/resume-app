"use client"

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import { ClipboardCopy, ClipboardCheck } from 'lucide-react'

interface MDXContentProps {
  code: string
}

// Create a separate component for code blocks
const CodeBlock = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="relative">
      <pre className="bg-card p-4 rounded-md overflow-x-auto my-4">
        <code className={className}>{children}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
        title="Copy code"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <ClipboardCheck className="h-4 w-4 text-primary" />
        ) : (
          <ClipboardCopy className="h-4 w-4 text-primary" />
        )}
      </button>
    </div>
  )
}

// Define custom components for code highlighting
const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mb-6 mt-10">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold mb-4 mt-8">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-medium mb-3 mt-6">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-6 mb-4">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-6 mb-4">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1">{children}</li>
  ),
  a: ({ href, children }: { href?: string, children: React.ReactNode }) => (
    <a href={href} className="text-primary hover:underline">
      {children}
    </a>
  ),
  // The key component for code blocks
  code: ({ className, children }: { className?: string, children: React.ReactNode }) => {
    // When className exists, it's a code block (e.g. ```js)
    // When no className, it's an inline code (e.g. `code`)
    if (className) {
      return <CodeBlock className={className}>{children}</CodeBlock>
    }
    // Inline code styling
    return <code className="bg-muted px-1.5 py-0.5 rounded">{children}</code>
  },
  // Ensure proper styling for blockquotes
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4">
      {children}
    </blockquote>
  ),
}

export function MDXContent({ code }: MDXContentProps) {
  const [renderedContent, setRenderedContent] = React.useState<React.ComponentType | null>(null)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    async function compileMdx() {
      try {
        // Parse the frontmatter out first
        const contentWithoutFrontmatter = code.replace(/^---[\s\S]*?---/, '').trim()
        
        // Compile the MDX content
        const result = await evaluate(contentWithoutFrontmatter, {
          ...runtime,
          useMDXComponents: () => mdxComponents,
        })
        
        setRenderedContent(() => result.default)
        setError(false)
      } catch (err) {
        console.error('Error compiling MDX:', err)
        setError(true)
      }
    }

    compileMdx()
  }, [code])

  if (error) {
    return (
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-900/20 rounded-md text-red-800 dark:text-red-200">
          <h3 className="text-lg font-semibold mb-2">Error rendering MDX content</h3>
          <p>There was a problem rendering the MDX content. Please check the console for more details.</p>
        </div>
        <div className="mt-6">
          <pre className="bg-card p-4 rounded-md overflow-x-auto whitespace-pre-wrap">
            {code}
          </pre>
        </div>
      </div>
    )
  }

  if (!renderedContent) {
    return <div>Loading...</div>
  }

  const Content = renderedContent

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <MDXProvider components={mdxComponents}>
        <Content />
      </MDXProvider>
    </div>
  )
} 