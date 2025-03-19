"use client"

import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import * as runtime from 'react/jsx-runtime'
import { evaluate } from '@mdx-js/mdx'
import { Copy, CheckCircle, Code } from 'lucide-react'

interface MDXContentProps {
  code: string
}

// Helper to extract text content from React nodes
function getTextContent(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (Array.isArray(node)) return node.map(getTextContent).join('')
  if (React.isValidElement(node)) {
    const nodeProps = node.props as Record<string, unknown> | undefined
    if (nodeProps && 'children' in nodeProps) {
      return getTextContent(nodeProps.children as React.ReactNode)
    }
  }
  return ''
}

// Copy button component that can be added to code blocks
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 hover:bg-primary/20 transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 text-xs font-medium"
      title="Copy code"
      aria-label="Copy code to clipboard"
    >
      {copied ? (
        <>
          <CheckCircle className="h-3.5 w-3.5 text-primary" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 text-primary" />
          <span>Copy</span>
        </>
      )}
    </button>
  )
}

// Define custom components for MDX rendering
const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold mb-8 mt-12">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold mb-6 mt-10 pb-2 border-b border-border">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-medium mb-4 mt-8">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-6 leading-relaxed">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-8 mb-6 space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-8 mb-6 space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-1.5">{children}</li>
  ),
  a: ({ href, children }: { href?: string, children: React.ReactNode }) => (
    <a href={href} className="text-primary hover:underline font-medium">
      {children}
    </a>
  ),
  // Enhanced pre component for code blocks with title support
  pre: ({ children, ...props }: { children: React.ReactNode } & Record<string, unknown>) => {
    // Check if there's a title in the props
    const title = props['data-title'] as string | undefined;

    const codeContent = getTextContent(children);
    
    // Extract language if present in className
    const childProps = React.isValidElement(children) ? 
      (children.props as Record<string, unknown>) : 
      {};
    const className = (childProps.className as string) || '';
    const language = className.replace('language-', '');
    
    return (
      <div className="relative not-prose my-6">
        {/* Header bar with title and copy button */}
        <div className="flex items-center justify-between px-4 py-2 bg-muted/50 border border-border rounded-t-lg">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            {language && <Code className="h-3.5 w-3.5" />}
            <span className="font-medium">{title || (language ? language : 'Code')}</span>
          </div>
          <CopyButton text={codeContent} />
        </div>
        
        {/* Code block */}
        <pre className="overflow-x-auto py-4 px-4 text-sm font-medium rounded-b-lg border border-border bg-card/50 border-t-0" {...props}>
          {children}
        </pre>
      </div>
    )
  },
  // Handle code specifically for syntax highlighting
  code: ({ className, children, ...props }: { className?: string, children: React.ReactNode } & Record<string, unknown>) => {
    // For code blocks (has language class), keep styling minimal to work with syntax highlighter
    if (className?.includes('language-')) {
      return <code className={className} {...props}>{children}</code>
    }
    
    // For inline code
    return <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  },
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