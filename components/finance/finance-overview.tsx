import { TrendingUp, TrendingDown, Scale } from "lucide-react";

export function FinanceOverview() {
  const cards = [
    { label: "Einnahmen", value: "€ 0,00", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50 dark:bg-green-900/20" },
    { label: "Ausgaben", value: "€ 0,00", icon: TrendingDown, color: "text-red-600", bg: "bg-red-50 dark:bg-red-900/20" },
    { label: "Bilanz", value: "€ 0,00", icon: Scale, color: "text-blue-600", bg: "bg-blue-50 dark:bg-blue-900/20" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.label} className="bg-card border rounded-xl p-5 flex items-center gap-4">
            <div className={`${card.bg} p-3 rounded-lg`}>
              <Icon className={`h-5 w-5 ${card.color}`} />
            </div>
            <div>
              <p className="text-xl font-bold">{card.value}</p>
              <p className="text-xs text-muted-foreground">{card.label} (Monat)</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
