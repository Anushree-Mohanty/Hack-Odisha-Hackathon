"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ReportSection() {
  const [formData, setFormData] = useState({
    area: "",
    severity: "",
    description: "",
    contact: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  /* Enhanced submit functionality with proper validation and feedback */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!formData.area || !formData.severity || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Area, Severity, and Description).",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: "Report Submitted Successfully",
        description: "Thank you for reporting. Our team will investigate immediately.",
      })

      setFormData({ area: "", severity: "", description: "", contact: "" })
      setIsSubmitted(true)

      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later or contact support.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="report" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Report Congestion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Help us maintain smooth crowd flow by reporting congestion or safety concerns
          </p>
        </div>

        <Card className="shadow-lg bg-card/95 backdrop-blur-sm border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Submit Congestion Report
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Area/Location *</label>
                  <Select value={formData.area} onValueChange={(value) => setFormData({ ...formData, area: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main-temple">Main Temple</SelectItem>
                      <SelectItem value="entrance">Entrance Gate</SelectItem>
                      <SelectItem value="prasad-counter">Prasad Counter</SelectItem>
                      <SelectItem value="parking">Parking Area</SelectItem>
                      <SelectItem value="queue-area">Queue Area</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Severity Level *</label>
                  <Select
                    value={formData.severity}
                    onValueChange={(value) => setFormData({ ...formData, severity: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low - Minor congestion</SelectItem>
                      <SelectItem value="medium">Medium - Moderate crowding</SelectItem>
                      <SelectItem value="high">High - Heavy congestion</SelectItem>
                      <SelectItem value="critical">Critical - Safety concern</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description *</label>
                <Textarea
                  placeholder="Please describe the congestion situation in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Contact (Optional)</label>
                <Input
                  placeholder="Your phone number or email for follow-up"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Submitted Successfully!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Report
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="text-center p-4 bg-card/90 backdrop-blur-sm border-primary/20">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Emergency Helpline</div>
          </Card>
          <Card className="text-center p-4 bg-card/90 backdrop-blur-sm border-primary/20">
            <div className="text-2xl font-bold text-primary">&lt; 5 min</div>
            <div className="text-sm text-muted-foreground">Average Response Time</div>
          </Card>
          <Card className="text-center p-4 bg-card/90 backdrop-blur-sm border-primary/20">
            <div className="text-2xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Issue Resolution Rate</div>
          </Card>
        </div>
      </div>
    </section>
  )
}
