import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentTasks } from "@/components/dashboard/recent-tasks";
import { UpcomingEvents } from "@/components/dashboard/upcoming-events";
import { FinanceSummary } from "@/components/dashboard/finance-summary";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Guten Tag, {session?.user?.name?.split(" ")[0] ?? "dort"}!
        </h1>
        <p className="text-muted-foreground">
          Hier ist deine Übersicht für heute.
        </p>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentTasks />
        <UpcomingEvents />
      </div>

      <FinanceSummary />
    </div>
  );
}
