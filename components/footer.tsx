import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'
import { socialLinks } from "@/data/links";

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center justify-center">
        <div className="flex items-center space-x-4 mb-4">
          <Link
            href={socialLinks.github.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-9 w-9"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Built by Bryan Wadsworth. The source code is available on{" "}
          <Link
            href={socialLinks.github.repo}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

