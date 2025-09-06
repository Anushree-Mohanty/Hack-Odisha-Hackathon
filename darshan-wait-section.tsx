import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Clock, Users, TrendingDown } from "lucide-react"

export function DarshanWaitSection() {
  const waitTimes = [
    { queue: "General Darshan", time: "45 mins", progress: 75, trend: "decreasing" },
    { queue: "VIP Darshan", time: "15 mins", progress: 25, trend: "stable" },
    { queue: "Senior Citizens", time: "20 mins", progress: 35, trend: "decreasing" },
    { queue: "Specially Abled", time: "10 mins", progress: 15, trend: "stable" },
  ]

  return (
    <section id="darshan-wait" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Darshan Wait Time</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time wait time estimates for different darshan queues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {waitTimes.map((queue, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    {queue.queue}
                  </span>
                  <span className="text-2xl font-bold text-primary">{queue.time}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Progress value={queue.progress} className="h-2" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Queue Status</span>
                    <span
                      className={`flex items-center gap-1 ${
                        queue.trend === "decreasing" ? "text-green-600" : "text-yellow-600"
                      }`}
                    >
                      <TrendingDown className="w-4 h-4" />
                      {queue.trend}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Average Wait Time Today</h3>
              <p className="text-3xl font-bold text-primary mb-2">32 minutes</p>
              <p className="text-muted-foreground">15% less than yesterday</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
