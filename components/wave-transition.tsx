"use client"

import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"

export function WaveTransition() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const translateX1 = useTransform(scrollYProgress, [0, 1], [0, -1500])
  const translateX2 = useTransform(scrollYProgress, [0, 1], [0, 800])
  const translateY1 = useTransform(scrollYProgress, [0, 1], [-10, 0])

  return (
    <div ref={ref} className="h-80 bg-primary/5 dark:bg-primary/10 relative overflow-hidden">
      <svg 
        viewBox="0 0 1920 400"
        className="absolute bottom-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Background wave - moving left and down */}
        <motion.path
          style={{ 
            translateX: translateX1,
            translateY: translateY1
          }}
          className="fill-primary/10 dark:fill-primary/20"
          d="M0,32L120,53.3C240,75,480,0,720,32C960,64,1200,96,1440,80C1680,64,1920,64,2160,80C2400,96,2640,128,2760,144L2880,160L2880,320L2760,320C2640,320,2400,320,2160,320C1920,320,1680,320,1440,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></motion.path>
        {/* Foreground wave - moving right */}
        <motion.path
          style={{ translateX: translateX2 }}
          className="fill-background"
          d="M-800,160C-740,144,-680,128,-620,133.3C-560,139,-500,165,-440,176C-380,187,-320,181,-260,165.3C-200,149,-140,123,-80,128C-20,133,40,171,100,181.3C160,192,220,176,280,154.7C340,133,400,107,460,101.3C520,96,580,112,640,122.7C700,133,760,139,820,133.3C880,128,940,112,1000,106.7C1060,101,1120,107,1180,122.7C1240,138,1300,144,1360,133.3C1420,123,1480,96,1540,101.3C1600,107,1660,144,1720,160C1780,176,1840,171,1900,154.7L1960,138.7L1960,400L-800,400Z"
        ></motion.path>
      </svg>
    </div>
  )
} 