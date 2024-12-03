"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BeneficiaryReport } from "@/components/reports/beneficiary-report";
import { ProgramReport } from "@/components/reports/program-report";
import { ImpactReport } from "@/components/reports/impact-report";

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
        <p className="text-muted-foreground">
          Analytics and insights about our programs and beneficiaries
        </p>
      </div>

      <Card>
        <Tabs defaultValue="beneficiaries" className="p-6">
          <TabsList>
            <TabsTrigger value="beneficiaries">Beneficiaries</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>
          <TabsContent value="beneficiaries">
            <BeneficiaryReport />
          </TabsContent>
          <TabsContent value="programs">
            <ProgramReport />
          </TabsContent>
          <TabsContent value="impact">
            <ImpactReport />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}