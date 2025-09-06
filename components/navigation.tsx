"use client"

import { MobileNav } from "./mobile-nav"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

interface NavigationProps {
  onNavigate: (section: string) => void
}

export function Navigation({ onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "live-crowd", label: "Live Crowd Map" },
    { id: "darshan-wait", label: "Darshan Wait Time" },
    { id: "heat-map", label: "Heat Map" },
    { id: "report", label: "Report Congestion" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-amber-900 dark:text-amber-700" />
            <h1 className="text-2xl font-bold text-foreground">ଭବ୍ୟ ପଥ</h1>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className="hover:bg-primary/20 hover:text-primary transition-colors duration-200 font-medium"
                onClick={() => onNavigate(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <MobileNav onNavigate={onNavigate} navItems={navItems} />
          </div>
        </div>
      </div>
    </nav>
  )
}
