"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function BeneficiaryDetailsPage() {
    const params = useParams();
    const [activeTab, setActiveTab] = useState("overview");

    // Mock data - replace with API call
    const beneficiary = {
        id: params.id,
        name: "Sarah Johnson",
        age: 45,
        location: "Nairobi",
        status: "Active",
        joinDate: "2024-01-15",
        program: "Skills Training",
        contact: "+254123456789",
        email: "sarah.j@example.com",
        needs: ["Financial Support", "Skills Development", "Healthcare"],
        history: [
            {
                date: "2024-03-15",
                event: "Completed Basic Computer Training",
                type: "achievement",
            },
            {
                date: "2024-02-01",
                event: "Enrolled in Skills Training Program",
                type: "enrollment",
            },
            {
                date: "2024-01-15",
                event: "Initial Assessment",
                type: "assessment",
            },
        ],
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-start">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Beneficiary Details</h1>
                    <p className="text-muted-foreground">
                        View and manage beneficiary information
                    </p>
                </div>
                <Button>Edit Details</Button>
            </div>

            <div className="grid gap-6">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-6">
                            <Avatar className="h-20 w-20">
                                <AvatarFallback>{beneficiary.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h2 className="text-2xl font-bold">{beneficiary.name}</h2>
                                <div className="flex items-center gap-2">
                                    <Badge>{beneficiary.status}</Badge>
                                    <span className="text-sm text-muted-foreground">
                    Joined {beneficiary.joinDate}
                  </span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="programs">Programs</TabsTrigger>
                        <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Age</p>
                                    <p>{beneficiary.age}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                                    <p>{beneficiary.location}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Contact</p>
                                    <p>{beneficiary.contact}</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <p>{beneficiary.email}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Support Needs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-2 flex-wrap">
                                    {beneficiary.needs.map((need) => (
                                        <Badge key={need} variant="secondary">
                                            {need}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="programs">
                        <Card>
                            <CardHeader>
                                <CardTitle>Program Participation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {/* Add program participation details */}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="history">
                        <Card>
                            <CardHeader>
                                <CardTitle>Activity History</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {beneficiary.history.map((item, index) => (
                                        <div key={index} className="flex gap-4 items-start">
                                            <div className="w-24 flex-shrink-0">
                                                <p className="text-sm text-muted-foreground">{item.date}</p>
                                            </div>
                                            <div>
                                                <p>{item.event}</p>
                                                <Badge variant="secondary">{item.type}</Badge>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}