'use client'

import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { ResumePDF } from '@/components/resume-pdf'
import { contact } from '@/data/contact'
import { useEffect, useState } from 'react'

interface PDFDownloadButtonProps {
  name?: string
  jobTitle?: string
  email?: string
  location?: string
  className?: string
}

export function PDFDownloadButton({
  name = contact.name,
  jobTitle = contact.jobTitle,
  email = contact.email,
  location = contact.location,
  className = ""
}: PDFDownloadButtonProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Show a placeholder button during SSR/hydration
  if (!isClient) {
    return (
      <Button 
        size="lg" 
        className={`bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 cursor-pointer ${className}`}
        disabled
      >
        Download Resume
        <FileDown className="ml-2 h-4 w-4" />
      </Button>
    )
  }

  return (
    <PDFDownloadLink
      document={
        <ResumePDF
          name={name}
          jobTitle={jobTitle}
          email={email}
          location={location}
        />
      }
      fileName="Bryan_Wadsworth_Resume.pdf"
    >
      {({ loading }) => (
        <Button 
          size="lg" 
          className={`bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90 cursor-pointer ${className}`}
          disabled={loading}
        >
          {loading ? 'Generating PDF...' : 'Download Resume'}
          <FileDown className="ml-2 h-4 w-4" />
        </Button>
      )}
    </PDFDownloadLink>
  )
} 