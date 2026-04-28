"use client";

import { Plus } from "lucide-react";

export function AddTransactionButton() {
  return (
    <button className="flex items-center gap-2 bg-finance text-white hover:bg-finance/90 px-4 py-2 rounded-xl text-sm font-semibold shadow-soft transition-all hover:shadow-soft-md active:scale-95">
      <Plus className="h-4 w-4" strokeWidth={2.5} />
      Transaktion
    </button>
  );
}
