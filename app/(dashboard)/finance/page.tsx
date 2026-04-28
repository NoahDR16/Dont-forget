import type { Metadata } from "next";
import { FinanceOverview } from "@/components/finance/finance-overview";
import { TransactionList } from "@/components/finance/transaction-list";
import { AddTransactionButton } from "@/components/finance/add-transaction-button";
import { FinanceCharts } from "@/components/finance/finance-charts";
import { Wallet } from "lucide-react";

export const metadata: Metadata = { title: "Finanzen" };

export default function FinancePage() {
  return (
    <div className="max-w-lg mx-auto space-y-4 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-finance-soft flex items-center justify-center">
            <Wallet className="h-4.5 w-4.5 text-finance" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Finanzen</h1>
            <p className="text-xs text-muted-foreground">April 2026</p>
          </div>
        </div>
        <AddTransactionButton />
      </div>

      {/* Overview cards */}
      <FinanceOverview />

      {/* Budget bar */}
      <div className="bg-card border border-border rounded-2xl p-4 shadow-soft">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">Monatsbudget</p>
          <span className="text-xs font-bold text-finance">€1.847 / €2.500</span>
        </div>
        <div className="h-2.5 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-finance rounded-full" style={{ width: "74%" }} />
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">Noch €653 verfügbar · 26% Puffer</p>
      </div>

      {/* Category breakdown */}
      <FinanceCharts />

      {/* Transactions */}
      <TransactionList />

      <div className="h-4" />
    </div>
  );
}
