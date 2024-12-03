"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export function UpcomingEvents() {
  const events = [
    {
      title: "Skills Workshop",
      date: "March 25, 2024",
      time: "10:00 AM",
      location: "Community Center",
    },
    {
      title: "Health Checkup Camp",
      date: "March 27, 2024",
      time: "9:00 AM",
      location: "Medical Center",
    },
    {
      title: "Financial Literacy Session",
      date: "March 30, 2024",
      time: "2:00 PM",
      location: "Training Hall",
    },
    {
      title: "Support Group Meeting",
      date: "April 2, 2024",
      time: "11:00 AM",
      location: "Meeting Room 1",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Events</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex items-start gap-4"
            >
              <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{event.title}</p>
                <p className="text-sm text-muted-foreground">
                  {event.date} at {event.time}
                </p>
                <p className="text-sm text-muted-foreground">
                  {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}