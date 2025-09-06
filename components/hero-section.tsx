"use client"

import { Card } from "@/components/ui/card"

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center md:items-end justify-center overflow-hidden pb-8 md:pb-32">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-accent/30 rounded-full animate-pulse delay-1000" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <Card className="bg-card/90 backdrop-blur-sm border-primary/20 p-4 md:p-8 lg:p-12 shadow-2xl">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-primary mb-2 md:mb-4 animate-fade-in">
                ଜୟ ଜଗନ୍ନାଥ
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Welcome to the AI-powered Jagannath Temple Crowd Management System
            </p>

            <p className="text-sm md:text-base text-muted-foreground/80 max-w-xl mx-auto">
              Experience seamless darshan with real-time crowd monitoring, intelligent wait time predictions, and
              cultural heritage preservation
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
