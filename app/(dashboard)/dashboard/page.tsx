import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { NextEventCard } from "@/components/dashboard/next-event-card";
import { RecentTasks } from "@/components/dashboard/recent-tasks";
import { FinanceSummary } from "@/components/dashboard/finance-summary";
import { WeekStrip } from "@/components/dashboard/week-strip";
import { Bell, Settings } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = { title: "Home" };

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Guten Morgen";
  if (h < 18) return "Guten Tag";
  return "Guten Abend";
}

function getFormattedDate() {
  return new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const firstName = session?.user?.name?.split(" ")[0] ?? "dort";

  return (
    <div className="max-w-lg mx-auto space-y-3 animate-slide-up">

      {/* ① Header */}
      <div className="flex items-start justify-between pt-2">
        <div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">
            {getGreeting()}, {firstName} 👋
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">{getFormattedDate()}</p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <button className="relative w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Bell className="h-4 w-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-danger rounded-full" />
          </button>
          <Link href="/settings" className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
            <Settings className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ② Today Card */}
      <DashboardStats />

      {/* ③ Nächster Termin */}
      <NextEventCard />

      {/* ④ Aufgaben-Snapshot */}
      <RecentTasks />

      {/* ⑤ Finanz-Puls */}
      <FinanceSummary />

      {/* ⑥ Wochen-Strip */}
      <WeekStrip />

      {/* Bottom padding for mobile nav */}
      <div className="h-4" />
    </div>
  );
}
