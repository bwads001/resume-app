import type { Metadata, Viewport } from "next"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// Define viewport separately as recommended by Next.js
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111111' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bryanwadsworth.com'), // Replace with your actual domain
  title: {
    template: '%s | Bryan Wadsworth',
    default: 'Bryan Wadsworth - Platform Engineering Leader',
  },
  description: "Personal website and resume of Bryan Wadsworth, a platform engineering leader.",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bryanwadsworth.com',
    siteName: 'Bryan Wadsworth - Platform Engineering Leader',
    title: 'Bryan Wadsworth - Platform Engineering Leader',
    description: 'Personal website and resume of Bryan Wadsworth, a platform engineering leader.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryan Wadsworth - Platform Engineering Leader',
    description: 'Personal website and resume of Bryan Wadsworth, a platform engineering leader.',
    creator: '@BWads001', // Updated with correct Twitter handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

