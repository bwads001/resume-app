"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"
import { cn } from "@/lib/utils"

const categories = Object.keys(skills)

export function Skills() {
  const [active, setActive] = useState(categories[0])

  return (
    <div id="skills" className="py-14 pb-28 md:py-20 md:pb-40 lg:py-28 lg:pb-56 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-10 text-center">Skills</h2>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 border",
                active === category
                  ? "bg-primary text-primary-foreground border-primary shadow-sm"
                  : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground/30"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto"
          >
            {skills[active].map((skill) => (
              <Badge key={skill} variant="skill" className="text-sm px-3 py-1.5">
                {skill}
              </Badge>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 md:h-24 lg:h-32 bg-primary/15"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}
      ></div>
    </div>
  )
}
