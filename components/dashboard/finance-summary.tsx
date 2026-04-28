import Link from "next/link";
import { cn } from "@/lib/utils";

// TODO: replace with real data
const budget = { spent: 23, total: 50 };
const lastTransaction = { label: "Rewe", amount: -12.40 };
const pct = Math.min(Math.round((budget.spent / budget.total) * 100), 100);
const isOver = pct >= 90;

export function FinanceSummary() {
  return (
    <Link href="/finance" className="block">
      <div className={cn(
        "rounded-2xl p-4 border shadow-soft animate-fade-in transition-transform hover:scale-[1.01]",
        isOver
          ? "bg-danger-soft border-danger/20"
          : "bg-card border-border"
      )}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
            Tagesbudget
          </p>
          <span className={cn(
            "text-xs font-bold",
            isOver ? "text-danger" : "text-finance"
          )}>
            €{budget.spent} / €{budget.total}
          </span>
        </div>

        {/* Progress bar */}
        <div className="h-2 bg-border rounded-full overflow-hidden mb-3">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500",
              isOver ? "bg-danger" : "bg-finance"
            )}
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Last transaction */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Letzte:</span>
            <span className="text-xs font-medium text-foreground">{lastTransaction.label}</span>
          </div>
          <span className={cn(
            "text-xs font-semibold",
            lastTransaction.amount < 0 ? "text-danger" : "text-finance"
          )}>
            {lastTransaction.amount < 0 ? "" : "+"}{lastTransaction.amount.toFixed(2).replace(".", ",")} €
          </span>
        </div>
      </div>
    </Link>
  );
}
