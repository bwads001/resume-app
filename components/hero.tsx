import { Button } from "@/components/ui/button"
import { FileDown, Linkedin } from 'lucide-react'
import Link from 'next/link'

/**
 * Hero component for the homepage with gradient background and call-to-action buttons
 * @returns {JSX.Element} - The hero section with title, subtitle and action buttons
 */
export function Hero() {
  return (
    <div className="bg-gradient-to-br from-primary/20 via-primary/10 to-background pb-18 md:pb-32 relative">
      <div className="container mx-auto px-4 py-20 md:py-40 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Bryan Wadsworth
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Platform Engineering Leader
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90" asChild>
            <Link href="/Bryan Wadsworth Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
              <FileDown className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground" asChild>
            <Link href="https://linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 lg:h-32 bg-background" 
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      ></div>
    </div>
  )
}

