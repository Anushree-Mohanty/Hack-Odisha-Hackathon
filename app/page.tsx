"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LiveCrowdSection } from "@/components/live-crowd-section"
import { DarshanWaitSection } from "@/components/darshan-wait-section"
import { HeatMapSection } from "@/components/heat-map-section"
import { ReportSection } from "@/components/report-section"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={scrollToSection} />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="live-crowd">
          <LiveCrowdSection />
        </section>
        <section id="darshan-wait">
          <DarshanWaitSection />
        </section>
        <section id="heat-map">
          <HeatMapSection />
        </section>
        <section id="report">
          <ReportSection />
        </section>
      </main>

      <footer className="bg-primary/90 backdrop-blur-sm text-primary-foreground py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">🕉 Jaya Jagannath 🕉</h3>
            <p className="text-primary-foreground/80">Preserving tradition through technology</p>
            <p className="text-primary-foreground/70 mt-2">Made with ❤️ in Odisha by Team NilaChakra</p>
          </div>
          <div className="text-sm text-primary-foreground/60">
            © 2024 AI Jagannath Temple Crowd Management System. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

