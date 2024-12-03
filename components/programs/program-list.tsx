"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface ProgramListProps {
  status: "active" | "upcoming" | "completed";
}

export function ProgramList({ status }: ProgramListProps) {
  const programs = [
    {
      id: 1,
      name: "Skills Training Workshop",
      description: "Vocational skills development program",
      startDate: "2024-03-01",
      endDate: "2024-06-30",
      enrolled: 45,
      capacity: 50,
      status: "active",
    },
    // Add more programs here
  ];

  const filteredPrograms = programs.filter(program => program.status === status);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredPrograms.map((program) => (
        <Card key={program.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>{program.name}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </div>
              <Badge>{program.status}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>{Math.round((program.enrolled / program.capacity) * 100)}%</span>
                </div>
                <Progress value={(program.enrolled / program.capacity) * 100} />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Start Date</p>
                  <p className="font-medium">{program.startDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">End Date</p>
                  <p className="font-medium">{program.endDate}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}