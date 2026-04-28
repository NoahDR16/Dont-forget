import { TrendingUp, TrendingDown, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

// TODO: replace with real data
const stats = [
  { label: "Einnahmen", amount: 3200, icon: TrendingUp, positive: true },
  { label: "Ausgaben", amount: 1847.50, icon: TrendingDown, positive: false },
  { label: "Bilanz", amount: 1352.50, icon: Scale, positive: true },
];

function formatEur(n: number) {
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(n);
}

export function FinanceOverview() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map((s) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className={cn(
              "rounded-2xl p-3.5 border shadow-soft",
              s.positive ? "bg-finance-soft border-finance/20" : "bg-danger-soft border-danger/20"
            )}
          >
            <div className={cn("w-8 h-8 rounded-xl flex items-center justify-center mb-2",
              s.positive ? "bg-finance/20" : "bg-danger/20"
            )}>
              <Icon className={cn("h-4 w-4", s.positive ? "text-finance" : "text-danger")} strokeWidth={2} />
            </div>
            <p className={cn("text-base font-bold leading-tight", s.positive ? "text-finance" : "text-danger")}>
              {formatEur(s.amount)}
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        );
      })}
    </div>
  );
}
