import { Wallet } from "lucide-react";

export function TransactionList() {
  return (
    <div className="bg-card border rounded-xl p-6 space-y-4">
      <h2 className="font-semibold">Transaktionen</h2>
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <Wallet className="h-10 w-10 mb-3 opacity-40" />
        <p className="font-medium">Keine Transaktionen</p>
        <p className="text-sm mt-1">Füge deine erste Einnahme oder Ausgabe hinzu.</p>
      </div>
    </div>
  );
}
