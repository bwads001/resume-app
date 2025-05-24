"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { ModeToggle } from "@/components/mode-toggle"
import { socialLinks } from "@/data/links"
import { WLogo } from "@/components/w-logo"

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
              href="/#skills" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Skills
            </Link>
            <Link 
              href="/#experience" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Experience
            </Link>
            <Link 
              href="/projects" 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
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
              href="/#skills" 
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              href="/#experience" 
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </Link>
            <Link 
              href="/projects" 
              className="block text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
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

