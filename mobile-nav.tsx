"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileNavProps {
  onNavigate: (section: string) => void
  navItems: Array<{ id: string; label: string }>
}

export function MobileNav({ onNavigate, navItems }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (section: string) => {
    onNavigate(section)
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-card/90 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
        >
          <Menu className="h-5 w-5 text-primary" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-md border-l border-primary/20">
        <div className="flex flex-col space-y-4 mt-8">
          <div className="text-center mb-6">
            <h2 className="text-lg font-bold text-primary">🕉 Navigation 🕉</h2>
          </div>
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              /* Updated mobile nav button hover effects to brown theme */
              className="justify-start text-left hover:bg-primary/20 hover:text-primary transition-colors duration-200 py-3 text-base font-medium"
              onClick={() => handleNavigate(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
