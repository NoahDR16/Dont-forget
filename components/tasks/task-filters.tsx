"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const filters = [
  { label: "Alle", value: "all" },
  { label: "Heute", value: "today" },
  { label: "Offen", value: "open" },
  { label: "Erledigt", value: "done" },
  { label: "Dringend", value: "urgent" },
];

export function TaskFilters() {
  const [active, setActive] = useState("all");

  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide no-scrollbar">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setActive(f.value)}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 border",
            active === f.value
              ? "bg-tasks text-white border-tasks shadow-soft"
              : "bg-card text-muted-foreground border-border hover:border-tasks/40 hover:text-tasks"
          )}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
