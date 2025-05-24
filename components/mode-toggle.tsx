"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

/**
 * Theme toggle component that cycles between light, dark, and system themes
 * @returns {JSX.Element | null} - The theme toggle button or null if not mounted
 */
export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  /**
   * Cycles through the available themes (light → dark → system → light)
   */
  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else if (theme === 'system') setTheme('light')
    else setTheme('light')
  }

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="h-9 w-9"
    >
      {theme === 'light' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : theme === 'dark' ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Monitor className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

