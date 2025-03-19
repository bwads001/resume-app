export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "2023-12-20",
    summary: "Learn how to build modern web applications with Next.js and React",
    content: `
# Getting Started with Next.js

Next.js is a React framework that enables server-side rendering, static site generation, and more. It's a great choice for building modern web applications.

## Why Next.js?

- **Server-Side Rendering**: Improves performance and SEO
- **Static Site Generation**: Fast page loads and reduced server costs
- **API Routes**: Build backend APIs alongside your frontend
- **Built-in Routing**: Simple file-based routing system

## Getting Started

To start a new Next.js project, run:

\`\`\`bash
npx create-next-app my-app
cd my-app
npm run dev
\`\`\`

Visit http://localhost:3000 to see your app in action.
    `,
    tags: ["Next.js", "React", "Web Development"]
  },
  {
    id: "2",
    title: "Tailwind CSS Tips and Tricks",
    slug: "tailwind-css-tips-and-tricks",
    date: "2023-12-25",
    summary: "Boost your productivity with these helpful Tailwind CSS techniques",
    content: `
# Tailwind CSS Tips and Tricks

Tailwind CSS is a utility-first CSS framework that can significantly speed up your development workflow.

## Key Advantages

- **No More Custom CSS**: Use predefined utility classes
- **Responsive Design**: Built-in responsive modifiers
- **Dark Mode**: Easy theme switching
- **Customization**: Extend the default configuration

## Useful Techniques

### 1. Component Extraction

Extract repeating patterns into components:

\`\`\`jsx
function Button({ children }) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
      {children}
    </button>
  );
}
\`\`\`

### 2. Using @apply

For complex components, use @apply in your CSS:

\`\`\`css
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded;
}
\`\`\`
    `,
    tags: ["Tailwind CSS", "CSS", "Web Development"]
  }
]; 