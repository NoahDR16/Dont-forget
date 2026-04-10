import Link from "next/link";
import { Wallet, ArrowRight } from "lucide-react";

export function FinanceSummary() {
  return (
    <div className="bg-card border rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Finanzübersicht</h2>
        <Link
          href="/finance"
          className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          Details <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
        <Wallet className="h-8 w-8 mb-2 opacity-40" />
        <p className="text-sm">Noch keine Transaktionen</p>
        <Link
          href="/finance"
          className="text-xs text-blue-600 hover:underline mt-1"
        >
          Transaktion erfassen
        </Link>
      </div>
    </div>
  );
}
