"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AddProgramDialog } from "@/components/programs/add-program-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProgramsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Programs</h1>
          <p className="text-muted-foreground">
            Manage support programs and initiatives
          </p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
          Create Program
        </Button>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Programs</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          {/*<ProgramList status="active" />*/}
        </TabsContent>
        <TabsContent value="upcoming">
          {/*<ProgramList status="upcoming" />*/}
        </TabsContent>
        <TabsContent value="completed">
          {/*<ProgramList status="completed" />*/}
        </TabsContent>
      </Tabs>

      <AddProgramDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}