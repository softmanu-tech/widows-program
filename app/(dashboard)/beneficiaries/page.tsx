"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BeneficiaryList } from "@/components/beneficiaries/beneficiary-list";
import { AddBeneficiaryDialog } from "@/components/beneficiaries/add-beneficiary-dialog";
import { Search } from "lucide-react";

export default function BeneficiariesPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Beneficiaries</h1>
          <p className="text-muted-foreground">
            Manage and track beneficiary information
          </p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
          Add Beneficiary
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search beneficiaries..."
            className="pl-10"
          />
        </div>
      </div>

      <BeneficiaryList />
      
      <AddBeneficiaryDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}