import Link from "next/link";
import { CheckSquare, ArrowRight } from "lucide-react";

export function RecentTasks() {
  return (
    <div className="bg-card border rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold">Aktuelle Aufgaben</h2>
        <Link
          href="/tasks"
          className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1"
        >
          Alle <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
        <CheckSquare className="h-8 w-8 mb-2 opacity-40" />
        <p className="text-sm">Noch keine Aufgaben</p>
        <Link
          href="/tasks"
          className="text-xs text-blue-600 hover:underline mt-1"
        >
          Erste Aufgabe erstellen
        </Link>
      </div>
    </div>
  );
}
