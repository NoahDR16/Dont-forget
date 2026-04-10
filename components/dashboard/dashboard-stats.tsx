import { CheckSquare, Calendar, TrendingUp, TrendingDown } from "lucide-react";

// TODO: Replace with real data fetching
const stats = [
  {
    label: "Offene Aufgaben",
    value: "–",
    icon: CheckSquare,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    label: "Termine diese Woche",
    value: "–",
    icon: Calendar,
    color: "text-purple-600",
    bg: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    label: "Einnahmen (Monat)",
    value: "–",
    icon: TrendingUp,
    color: "text-green-600",
    bg: "bg-green-50 dark:bg-green-900/20",
  },
  {
    label: "Ausgaben (Monat)",
    value: "–",
    icon: TrendingDown,
    color: "text-red-600",
    bg: "bg-red-50 dark:bg-red-900/20",
  },
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="bg-card border rounded-xl p-4 flex items-center gap-4"
          >
            <div className={`${stat.bg} p-2.5 rounded-lg`}>
              <Icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
