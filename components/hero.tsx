import { Button } from "@/components/ui/button"
import { Linkedin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { PDFDownloadButton } from '@/components/pdf-download-button'

/**
 * Hero component for the homepage with gradient background and call-to-action buttons
 * @returns {JSX.Element} - The hero section with title, subtitle and action buttons
 */
export function Hero() {
  return (
    <div className="bg-linear-to-br from-primary/20 via-primary/10 to-background pb-18 md:pb-32 relative">
      <div className="container mx-auto px-4 py-20 md:py-40 space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 order-2 md:order-1">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <Image
                src="/images/Bryan.jpg"
                alt="Bryan Wadsworth - Platform Engineering Leader"
                fill
                className="rounded-full object-cover object-top border-4 border-background shadow-xl"
                priority
              />
            </div>
          </div>
          <div className="flex-1 space-y-4 order-1 md:order-2 text-center md:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Bryan Wadsworth
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl md:max-w-none">
              Platform Engineering Leader
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <PDFDownloadButton />
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground" asChild>
            <Link href="https://www.linkedin.com/in/bryan-wadsworth-a90b4013/" target="_blank" rel="noopener noreferrer">
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

