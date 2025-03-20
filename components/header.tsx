"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { ModeToggle } from "@/components/mode-toggle"
import { socialLinks } from "@/data/links"

/**
 * Logo component displaying the stylized W logo
 * @returns {JSX.Element} The SVG logo component
 */
const WLogo = () => (
  <svg fill="none" height="42" viewBox="0 0 48 48" width="42">
    <path 
      clipRule="evenodd" 
      d="M11.671 10.027C10.5815 10.2086 9.84545 11.2391 10.027 12.3286L14.027 36.3286C14.1661 37.163 14.815 37.8196 15.6477 37.9686C16.4803 38.1175 17.3166 37.7265 17.7363 36.9921L23.9998 26.031L30.2633 36.9921C30.683 37.7265 31.5193 38.1175 32.352 37.9686C33.1846 37.8196 33.8336 37.163 33.9726 36.3286L37.9726 12.3286C38.1542 11.2391 37.4182 10.2086 36.3286 10.027C35.2391 9.84545 34.2086 10.5815 34.027 11.671L30.9502 30.1319L25.7363 21.0075C25.3802 20.3844 24.7175 19.9998 23.9998 19.9998C23.2821 19.9998 22.6194 20.3844 22.2633 21.0075L17.0494 30.1319L13.9726 11.671C13.791 10.5815 12.7606 9.84545 11.671 10.027Z" 
      fill="currentColor" 
      fillRule="evenodd"
    />
  </svg>
)

/**
 * Header component with navigation and mobile menu functionality
 * @returns {JSX.Element} The header component with desktop and mobile navigation
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container mx-auto px-4 flex h-14 items-center">
        <Link href="/" className="flex items-center">
          <WLogo />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="ml-24 hidden md:flex">
          <nav className="flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Blog
            </Link>
          </nav>
        </div>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </button>

          <nav className="flex items-center space-x-4">
            <Link
              href={socialLinks.github.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="border-t border-border px-4 py-3 space-y-3">
            <Link 
              href="/" 
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/blog" 
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

