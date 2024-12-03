"use client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    BarChart,
    Bar,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const monthlyImpact = [
    { month: "Jan", beneficiaries: 120, programs: 8, events: 15 },
    { month: "Feb", beneficiaries: 150, programs: 10, events: 18 },
    { month: "Mar", beneficiaries: 180, programs: 12, events: 22 },
    { month: "Apr", beneficiaries: 220, programs: 15, events: 25 },
    { month: "May", beneficiaries: 250, programs: 18, events: 28 },
    { month: "Jun", beneficiaries: 280, programs: 20, events: 32 },
];

const outcomes = [
    { category: "Employment", success: 75 },
    { category: "Education", success: 82 },
    { category: "Healthcare", success: 90 },
    { category: "Financial", success: 68 },
];

export function ImpactReport() {
    return (
        <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Lives Impacted</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,280</div>
                        <p className="text-xs text-muted-foreground">+30% from last year</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Success Stories</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">450</div>
                        <p className="text-xs text-muted-foreground">+15% from last year</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Community Events</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">140</div>
                        <p className="text-xs text-muted-foreground">+25% from last year</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Volunteer Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">5,200</div>
                        <p className="text-xs text-muted-foreground">+20% from last year</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Growth Trends</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={monthlyImpact}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="beneficiaries"
                                        stackId="1"
                                        stroke="hsl(var(--chart-1))"
                                        fill="hsl(var(--chart-1))"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="programs"
                                        stackId="1"
                                        stroke="hsl(var(--chart-2))"
                                        fill="hsl(var(--chart-2))"
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="events"
                                        stackId="1"
                                        stroke="hsl(var(--chart-3))"
                                        fill="hsl(var(--chart-3))"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Program Outcomes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={outcomes} layout="vertical">
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" domain={[0, 100]} />
                                    <YAxis dataKey="category" type="category" />
                                    <Tooltip />
                                    <Bar
                                        dataKey="success"
                                        fill="hsl(var(--chart-1))"
                                        radius={[0, 4, 4, 0]}
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}