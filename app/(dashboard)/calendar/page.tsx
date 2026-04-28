import type { Metadata } from "next";
import { CalendarView } from "@/components/calendar/calendar-view";
import { EventList } from "@/components/calendar/event-list";
import { CreateEventButton } from "@/components/calendar/create-event-button";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = { title: "Kalender" };

export default function CalendarPage() {
  return (
    <div className="max-w-lg mx-auto space-y-4 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-calendar-soft flex items-center justify-center">
            <CalendarDays className="h-4.5 w-4.5 text-calendar" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Kalender</h1>
            <p className="text-xs text-muted-foreground">2 Termine heute</p>
          </div>
        </div>
        <CreateEventButton />
      </div>

      {/* Calendar grid */}
      <CalendarView />

      {/* Upcoming events */}
      <EventList />

      <div className="h-4" />
    </div>
  );
}
