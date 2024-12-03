import { DashboardStats } from '@/components/dashboard/stats'
import { RecentBeneficiaries } from '@/components/dashboard/recent-beneficiaries'
import { UpcomingEvents } from '@/components/dashboard/upcoming-events'

export default function Home() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome to the Widow Support Management System
                </p>
            </div>

            <DashboardStats />

            <div className="grid gap-6 md:grid-cols-2">
                <RecentBeneficiaries />
                <UpcomingEvents />
            </div>
        </div>
    )
}