import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import OpenGraphImage from '@/components/OpenGraphImage'

// Define custom components for MDX files
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Override the default components with our styling
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 mt-10">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-4 mt-8">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-medium mb-3 mt-6">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 mb-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
    a: ({ href, children }) => (
      <Link href={href ?? '#'} className="text-primary hover:underline">
        {children}
      </Link>
    ),
    code: ({ className, children }) => {
      // Check if this is a code block or inline code
      if (className?.includes('language-')) {
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
    img: (props) => (
      <Image
        {...(props as ImageProps)}
        alt={props.alt || ''}
        className="rounded-md my-4"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    ),
    // Merge with any components passed in
    ...components,
    // Register our custom OpenGraphImage component
    OpenGraphImage,
  }
} 