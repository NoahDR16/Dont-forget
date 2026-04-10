import type { Metadata } from "next";
import { CalendarView } from "@/components/calendar/calendar-view";
import { EventList } from "@/components/calendar/event-list";
import { CreateEventButton } from "@/components/calendar/create-event-button";

export const metadata: Metadata = {
  title: "Kalender",
};

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Kalender</h1>
          <p className="text-muted-foreground">
            Deine Termine und Ereignisse im Überblick.
          </p>
        </div>
        <CreateEventButton />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CalendarView />
        </div>
        <div>
          <EventList />
        </div>
      </div>
    </div>
  );
}
