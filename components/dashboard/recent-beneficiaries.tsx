"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentBeneficiaries() {
  const beneficiaries = [
    {
      name: "Sarah Johnson",
      program: "Skills Training",
      status: "Active",
      date: "2024-03-20",
    },
    {
      name: "Mary Williams",
      program: "Financial Aid",
      status: "Pending",
      date: "2024-03-19",
    },
    {
      name: "Patricia Brown",
      program: "Healthcare",
      status: "Active",
      date: "2024-03-18",
    },
    {
      name: "Elizabeth Davis",
      program: "Education Support",
      status: "Active",
      date: "2024-03-17",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Beneficiaries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {beneficiaries.map((beneficiary) => (
            <div
              key={beneficiary.name}
              className="flex items-center gap-4"
            >
              <Avatar>
                <AvatarFallback>
                  {beneficiary.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{beneficiary.name}</p>
                <p className="text-sm text-muted-foreground">
                  {beneficiary.program}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                {beneficiary.date}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}