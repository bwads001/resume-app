"use client"

import { Hero } from "@/components/hero"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { WaveTransition } from "@/components/wave-transition"
import { jobs } from "@/data/experience"

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

