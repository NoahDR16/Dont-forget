import { Calendar } from "lucide-react";

export function CalendarView() {
  return (
    <div className="bg-card border rounded-xl p-6">
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <Calendar className="h-10 w-10 mb-3 opacity-40" />
        <p className="font-medium">Kalenderansicht</p>
        <p className="text-sm mt-1">Hier erscheint dein Monatskalender.</p>
      </div>
    </div>
  );
}
