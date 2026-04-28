import { ShoppingCart, Car, Coffee, Zap, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// TODO: replace with real data
const mockTransactions = [
  { id: "1", title: "Rewe", category: "Lebensmittel", amount: -12.40, date: "Heute", icon: ShoppingCart, positive: false },
  { id: "2", title: "Gehalt", category: "Einnahmen", amount: 3200, date: "Gestern", icon: Zap, positive: true },
  { id: "3", title: "Starbucks", category: "Freizeit", amount: -6.50, date: "Gestern", icon: Coffee, positive: false },
  { id: "4", title: "Tankstelle", category: "Transport", amount: -58.00, date: "Mo, 27. Apr", icon: Car, positive: false },
];

function formatEur(n: number) {
  const s = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(Math.abs(n));
  return (n < 0 ? "−" : "+") + s;
}

export function TransactionList() {
  return (
    <div className="bg-card border border-border rounded-2xl shadow-soft overflow-hidden">
      <div className="px-4 pt-4 pb-2">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
          Letzte Transaktionen
        </p>
      </div>

      <div className="divide-y divide-border">
        {mockTransactions.map((tx) => {
          const Icon = tx.icon;
          return (
            <div key={tx.id} className="flex items-center gap-3 px-4 py-3 group hover:bg-accent transition-colors cursor-pointer">
              <div className={cn(
                "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                tx.positive ? "bg-finance-soft" : "bg-accent"
              )}>
                <Icon className={cn("h-4 w-4", tx.positive ? "text-finance" : "text-muted-foreground")} strokeWidth={1.8} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{tx.title}</p>
                <p className="text-[11px] text-muted-foreground">{tx.category} · {tx.date}</p>
              </div>

              <div className="text-right flex-shrink-0">
                <p className={cn("text-sm font-bold", tx.positive ? "text-finance" : "text-foreground")}>
                  {formatEur(tx.amount)}
                </p>
              </div>

              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>

      <div className="px-4 py-3 border-t border-border">
        <button className="w-full text-xs text-muted-foreground hover:text-finance transition-colors font-medium text-center">
          Alle Transaktionen anzeigen →
        </button>
      </div>
    </div>
  );
}
