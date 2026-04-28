import Link from "next/link";
import { CheckSquare, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

// TODO: replace with real DB data
const mockTasks = [
  { id: "1", title: "Präsentation vorbereiten", done: false, urgent: false },
  { id: "2", title: "E-Mails beantworten", done: true, urgent: false },
  { id: "3", title: "Arzt anrufen", done: false, urgent: true },
];

const totalTasks = 5;
const doneTasks = mockTasks.filter((t) => t.done).length;

export function RecentTasks() {
  return (
    <div className="bg-card border border-border rounded-2xl p-4 shadow-soft animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest">
          Heute zu erledigen
        </p>
        <span className="text-xs font-semibold text-tasks">
          {doneTasks}/{totalTasks} ✓
        </span>
      </div>

      {mockTasks.length === 0 ? (
        <div className="flex flex-col items-center py-6 text-center">
          <CheckSquare className="h-7 w-7 text-muted-foreground/40 mb-2" />
          <p className="text-sm text-muted-foreground">Keine Aufgaben für heute.</p>
          <Link href="/tasks" className="text-xs text-tasks font-medium mt-1 hover:underline">
            Aufgabe erstellen →
          </Link>
        </div>
      ) : (
        <div className="space-y-1">
          {mockTasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors",
                task.done ? "opacity-50" : "hover:bg-accent"
              )}
            >
              {/* Checkbox visual */}
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
                task.done
                  ? "bg-tasks border-tasks"
                  : "border-border"
              )}>
                {task.done && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <span className={cn(
                "flex-1 text-sm font-medium truncate",
                task.done ? "line-through text-muted-foreground" : "text-foreground"
              )}>
                {task.title}
              </span>

              {task.urgent && !task.done && (
                <AlertCircle className="h-4 w-4 text-danger flex-shrink-0" />
              )}
            </div>
          ))}

          <Link
            href="/tasks"
            className="flex items-center justify-center py-2 text-xs text-muted-foreground hover:text-tasks transition-colors font-medium"
          >
            + {totalTasks - mockTasks.length} weitere anzeigen
          </Link>
        </div>
      )}
    </div>
  );
}
