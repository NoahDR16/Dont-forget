import { Clock, MapPin, Plus } from "lucide-react";
import Link from "next/link";

// TODO: replace with real data
const mockEvents = [
  { id: "1", title: "Team-Meeting", time: "10:30 – 11:30", location: "Zoom", color: "bg-calendar" },
  { id: "2", title: "Zahnarzt", time: "14:00 – 15:00", location: "Praxis Dr. Müller", color: "bg-tasks" },
];

export function EventList() {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-soft">
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
          Kommende Ereignisse
        </p>
        <button className="text-muted-foreground hover:text-calendar transition-colors">
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {mockEvents.length === 0 ? (
        <p className="text-sm text-muted-foreground text-center py-4">Keine Termine geplant.</p>
      ) : (
        <div className="space-y-2">
          {mockEvents.map((event) => (
            <div key={event.id} className="flex items-start gap-3 group cursor-pointer hover:bg-accent rounded-xl px-2 py-2 transition-colors -mx-2">
              <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${event.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-foreground truncate">{event.title}</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="text-[11px]">{event.time}</span>
                  </div>
                  {event.location && (
                    <>
                      <span className="text-border">·</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span className="text-[11px] truncate">{event.location}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link href="/calendar" className="flex items-center justify-center mt-3 pt-3 border-t border-border text-xs text-muted-foreground hover:text-calendar transition-colors font-medium">
        Alle Termine anzeigen →
      </Link>
    </div>
  );
}
