import { CalendarDays, CheckSquare, TrendingUp } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    label: "Termine",
    value: "3",
    href: "/calendar",
    icon: CalendarDays,
    color: "text-calendar",
    bg: "bg-calendar-soft",
  },
  {
    label: "Aufgaben",
    value: "2",
    href: "/tasks",
    icon: CheckSquare,
    color: "text-tasks",
    bg: "bg-tasks-soft",
  },
  {
    label: "Budget",
    value: "+€45",
    href: "/finance",
    icon: TrendingUp,
    color: "text-finance",
    bg: "bg-finance-soft",
  },
];

export function DashboardStats() {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-soft animate-fade-in">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
        Heute auf einen Blick
      </p>
      <div className="grid grid-cols-3 divide-x divide-border">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Link
              key={stat.label}
              href={stat.href}
              className="flex flex-col items-center gap-2 py-1 group"
            >
              <div className={`${stat.bg} w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                <Icon className={`h-4.5 w-4.5 ${stat.color}`} strokeWidth={2} />
              </div>
              <div className="text-center">
                <p className={`text-xl font-bold leading-none ${stat.color}`}>{stat.value}</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
