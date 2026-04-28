"use client";

import { Plus } from "lucide-react";

export function CreateEventButton() {
  return (
    <button className="flex items-center gap-2 bg-calendar text-white hover:bg-calendar/90 px-4 py-2 rounded-xl text-sm font-semibold shadow-soft transition-all hover:shadow-soft-md active:scale-95">
      <Plus className="h-4 w-4" strokeWidth={2.5} />
      Neuer Termin
    </button>
  );
}
