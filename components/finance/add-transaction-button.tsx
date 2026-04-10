"use client";

import { Plus } from "lucide-react";

export function AddTransactionButton() {
  return (
    <button className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
      <Plus className="h-4 w-4" />
      Transaktion
    </button>
  );
}
