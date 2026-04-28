import { MapPin, Clock } from "lucide-react";
import Link from "next/link";

export function NextEventCard() {
  // TODO: replace with real data
  const hasEvent = false;

  if (!hasEvent) {
    return (
      <div className="bg-calendar-soft border border-calendar/20 rounded-2xl p-4 animate-fade-in">
        <p className="text-[11px] font-semibold text-calendar uppercase tracking-widest mb-2">
          Nächster Termin
        </p>
        <p className="text-sm text-muted-foreground">Keine weiteren Termine heute.</p>
        <Link href="/calendar" className="text-xs text-calendar font-medium mt-1 inline-block hover:underline">
          Termin erstellen →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-soft animate-fade-in">
      <div className="flex items-start gap-3">
        {/* Color bar */}
        <div className="w-1 self-stretch rounded-full bg-calendar flex-shrink-0" />

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[11px] font-semibold text-calendar uppercase tracking-widest">
              In 45 Minuten
            </span>
          </div>
          <p className="text-base font-semibold text-foreground truncate">Team-Meeting</p>
          <div className="flex items-center gap-3 mt-1.5">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span className="text-xs">10:30 – 11:30 Uhr</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span className="text-xs">Zoom</span>
            </div>
          </div>
        </div>

        <Link href="/calendar" className="text-xs text-muted-foreground hover:text-foreground">
          →
        </Link>
      </div>
    </div>
  );
}
