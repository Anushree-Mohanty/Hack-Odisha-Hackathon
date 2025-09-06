import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function HeatMapSection() {
  const heatMapData = [
    { time: "6:00 AM", intensity: "Low", color: "bg-green-500" },
    { time: "8:00 AM", intensity: "Medium", color: "bg-yellow-500" },
    { time: "10:00 AM", intensity: "High", color: "bg-red-500" },
    { time: "12:00 PM", intensity: "Very High", color: "bg-red-700" },
    { time: "2:00 PM", intensity: "High", color: "bg-red-500" },
    { time: "4:00 PM", intensity: "Medium", color: "bg-yellow-500" },
    { time: "6:00 PM", intensity: "High", color: "bg-red-500" },
    { time: "8:00 PM", intensity: "Low", color: "bg-green-500" },
  ]

  return (
    <section id="heat-map" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Congestion Heat Map</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hourly crowd intensity patterns to help you plan your visit
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Today's Crowd Intensity Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {heatMapData.map((data, index) => (
                <div key={index} className="text-center">
                  <div className={`w-full h-16 ${data.color} rounded-lg mb-2 flex items-center justify-center`}>
                    <span
                      className={`font-semibold text-sm ${
                        data.color === "bg-yellow-500" ? "text-black" : "text-white"
                      } drop-shadow-lg`}
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
                    >
                      {data.time}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {data.intensity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">L</span>
              </div>
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Best Time to Visit</h3>
              <p className="text-green-600 dark:text-green-300">6:00 AM - 8:00 AM</p>
            </CardContent>
          </Card>

          <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">M</span>
              </div>
              <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Moderate Crowd</h3>
              <p className="text-yellow-600 dark:text-yellow-300">8:00 AM - 10:00 AM</p>
            </CardContent>
          </Card>

          <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">H</span>
              </div>
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Peak Hours</h3>
              <p className="text-red-600 dark:text-red-300">10:00 AM - 6:00 PM</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
