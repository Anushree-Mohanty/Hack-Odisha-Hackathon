import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function LiveCrowdSection() {
  const crowdData = [
    { area: "Main Temple", density: "High", count: "850+", color: "bg-red-500" },
    { area: "Entrance Gate", density: "Medium", count: "420", color: "bg-yellow-500" },
    { area: "Prasad Counter", density: "Low", count: "180", color: "bg-green-500" },
    { area: "Parking Area", density: "Medium", count: "320", color: "bg-yellow-500" },
  ]

  return (
    <section id="live-crowd" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Live Crowd Map</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time monitoring of crowd density across different temple areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {crowdData.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  {area.area}
                  <div className={`w-3 h-3 rounded-full ${area.color}`} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Badge
                    variant={
                      area.density === "High" ? "destructive" : area.density === "Medium" ? "secondary" : "default"
                    }
                  >
                    {area.density} Density
                  </Badge>
                  <p className="text-2xl font-bold text-primary">{area.count}</p>
                  <p className="text-sm text-muted-foreground">People present</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <p className="text-muted-foreground">Interactive crowd map will be displayed here</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
