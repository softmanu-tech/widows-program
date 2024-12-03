"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, MoreVertical } from "lucide-react";

export function BeneficiaryList() {
  const beneficiaries = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 45,
      location: "Nairobi",
      program: "Skills Training",
      status: "Active",
      joinDate: "2024-01-15",
    },
    // Add more beneficiaries here
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Program</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {beneficiaries.map((beneficiary) => (
            <TableRow key={beneficiary.id}>
              <TableCell className="font-medium">{beneficiary.name}</TableCell>
              <TableCell>{beneficiary.age}</TableCell>
              <TableCell>{beneficiary.location}</TableCell>
              <TableCell>{beneficiary.program}</TableCell>
              <TableCell>
                <Badge variant="outline">{beneficiary.status}</Badge>
              </TableCell>
              <TableCell>{beneficiary.joinDate}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}