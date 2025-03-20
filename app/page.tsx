import { Metadata } from 'next'
import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { WaveTransition } from "@/components/wave-transition"
import { jobs } from "@/data/experience"

export const metadata: Metadata = {
  openGraph: {
    title: "Bryan Wadsworth - Platform Engineering Leader",
    description: "Platform engineering leader with expertise in cloud architecture, DevOps, and software development",
    type: 'website',
    images: [
      {
        url: '/images/profile-og.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: 'Bryan Wadsworth - Platform Engineering Leader',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bryan Wadsworth - Platform Engineering Leader",
    description: "Platform engineering leader with expertise in cloud architecture, DevOps, and software development",
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Experience jobs={jobs} />
      <WaveTransition />
    </div>
  )
}

