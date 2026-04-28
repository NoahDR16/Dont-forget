// TODO: Implement with recharts or chart.js when data is available

const categories = [
  { label: "Lebensmittel", amount: 420, pct: 42, color: "bg-calendar" },
  { label: "Transport", amount: 180, pct: 18, color: "bg-tasks" },
  { label: "Freizeit", amount: 310, pct: 31, color: "bg-finance" },
  { label: "Sonstiges", amount: 90, pct: 9, color: "bg-muted-foreground" },
];

export function FinanceCharts() {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-soft">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">
        Ausgaben nach Kategorie
      </p>

      {/* Segmented bar */}
      <div className="flex h-2.5 rounded-full overflow-hidden gap-0.5 mb-4">
        {categories.map((c) => (
          <div
            key={c.label}
            className={`${c.color} rounded-full transition-all`}
            style={{ width: `${c.pct}%` }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="space-y-2">
        {categories.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${c.color}`} />
            <span className="text-sm text-foreground flex-1">{c.label}</span>
            <span className="text-sm font-semibold text-foreground">
              {new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(c.amount)}
            </span>
            <span className="text-xs text-muted-foreground w-8 text-right">{c.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
