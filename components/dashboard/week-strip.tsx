"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

// TODO: replace with real events
const mockEvents: Record<number, string[]> = {
  0: ["calendar"],
  2: ["tasks"],
  3: ["calendar", "finance"],
};

function getWeekDates() {
  const today = new Date();
  const day = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((day === 0 ? 7 : day) - 1));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

export function WeekStrip() {
  const dates = getWeekDates();
  const todayDate = new Date().getDate();
  const [selected, setSelected] = useState<number>(
    dates.findIndex((d) => d.getDate() === todayDate)
  );

  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-soft animate-fade-in">
      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-3">
        Diese Woche
      </p>

      {/* Day strip */}
      <div className="grid grid-cols-7 gap-1">
        {dates.map((date, i) => {
          const isToday = date.getDate() === todayDate;
          const isSelected = selected === i;
          const dots = mockEvents[i] ?? [];

          return (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "flex flex-col items-center gap-1 py-2 rounded-xl transition-all duration-150",
                isSelected && !isToday ? "bg-accent" : "",
                isToday ? "bg-primary" : "hover:bg-accent"
              )}
            >
              <span className={cn(
                "text-[10px] font-medium",
                isToday ? "text-white/70" : "text-muted-foreground"
              )}>
                {DAYS[i]}
              </span>
              <span className={cn(
                "text-sm font-bold",
                isToday ? "text-white" : isSelected ? "text-foreground" : "text-foreground"
              )}>
                {date.getDate()}
              </span>
              {/* Event dots */}
              <div className="flex gap-0.5 h-1.5">
                {dots.slice(0, 2).map((color, j) => (
                  <div
                    key={j}
                    className={cn(
                      "w-1 h-1 rounded-full",
                      isToday ? "bg-white/60" : `dot-${color}`
                    )}
                  />
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected day preview */}
      {mockEvents[selected] ? (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">
            {mockEvents[selected].length} Ereignis{mockEvents[selected].length > 1 ? "se" : ""} an diesem Tag
          </p>
        </div>
      ) : (
        <div className="mt-3 pt-3 border-t border-border">
          <p className="text-xs text-muted-foreground">Keine Ereignisse an diesem Tag.</p>
        </div>
      )}
    </div>
  );
}
