import type { Metadata } from "next";
import { FinanceOverview } from "@/components/finance/finance-overview";
import { TransactionList } from "@/components/finance/transaction-list";
import { AddTransactionButton } from "@/components/finance/add-transaction-button";
import { FinanceCharts } from "@/components/finance/finance-charts";

export const metadata: Metadata = {
  title: "Finanzen",
};

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Finanzen</h1>
          <p className="text-muted-foreground">
            Einnahmen, Ausgaben und dein Budget auf einen Blick.
          </p>
        </div>
        <AddTransactionButton />
      </div>

      <FinanceOverview />
      <FinanceCharts />
      <TransactionList />
    </div>
  );
}
