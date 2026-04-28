"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];

// TODO: replace with real events
const mockEventDays: Record<string, string[]> = {
  "2026-4-28": ["calendar"],
  "2026-4-30": ["tasks"],
  "2026-5-3": ["calendar", "finance"],
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Mon=0
}

export function CalendarView() {
  const today = new Date();
  const [current, setCurrent] = useState({ year: today.getFullYear(), month: today.getMonth() });

  const daysInMonth = getDaysInMonth(current.year, current.month);
  const firstDay = getFirstDayOfMonth(current.year, current.month);
  const cells = Array.from({ length: firstDay + daysInMonth }, (_, i) =>
    i < firstDay ? null : i - firstDay + 1
  );

  const prev = () => setCurrent(c => c.month === 0 ? { year: c.year - 1, month: 11 } : { ...c, month: c.month - 1 });
  const next = () => setCurrent(c => c.month === 11 ? { year: c.year + 1, month: 0 } : { ...c, month: c.month + 1 });

  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-soft">
      {/* Month navigation */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prev} className="w-8 h-8 rounded-lg hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <h2 className="text-sm font-semibold text-foreground">
          {MONTHS[current.month]} {current.year}
        </h2>
        <button onClick={next} className="w-8 h-8 rounded-lg hover:bg-accent flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 mb-2">
        {DAYS.map(d => (
          <div key={d} className="text-center text-[10px] font-semibold text-muted-foreground py-1">{d}</div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {cells.map((day, i) => {
          if (day === null) return <div key={`empty-${i}`} />;
          const key = `${current.year}-${current.month + 1}-${day}`;
          const dots = mockEventDays[key] ?? [];
          const isToday = day === today.getDate() && current.month === today.getMonth() && current.year === today.getFullYear();

          return (
            <button
              key={key}
              className={cn(
                "flex flex-col items-center gap-0.5 py-1.5 rounded-xl transition-all duration-150",
                isToday ? "bg-primary" : "hover:bg-accent"
              )}
            >
              <span className={cn("text-sm font-semibold", isToday ? "text-white" : "text-foreground")}>
                {day}
              </span>
              <div className="flex gap-0.5 h-1.5">
                {dots.slice(0, 2).map((color, j) => (
                  <div key={j} className={cn("w-1 h-1 rounded-full", isToday ? "bg-white/60" : `dot-${color}`)} />
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
