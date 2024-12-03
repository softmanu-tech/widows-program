"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, HeartHandshake, Calendar, TrendingUp } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Total Beneficiaries",
      value: "2,853",
      description: "Active widow beneficiaries",
      icon: Users,
    },
    {
      title: "Active Programs",
      value: "12",
      description: "Running support programs",
      icon: HeartHandshake,
    },
    {
      title: "Monthly Events",
      value: "24",
      description: "Scheduled this month",
      icon: Calendar,
    },
    {
      title: "Success Rate",
      value: "89%",
      description: "Program completion rate",
      icon: TrendingUp,
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}