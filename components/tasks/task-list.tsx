import { CheckSquare, AlertCircle, Calendar, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// TODO: replace with real DB data
const mockTasks = [
  { id: "1", title: "Präsentation vorbereiten", priority: "HIGH", status: "TODO", dueDate: "2026-04-28", done: false },
  { id: "2", title: "E-Mails beantworten", priority: "MEDIUM", status: "DONE", dueDate: null, done: true },
  { id: "3", title: "Arzt anrufen", priority: "URGENT", status: "TODO", dueDate: "2026-04-27", done: false },
  { id: "4", title: "Wohnung aufräumen", priority: "LOW", status: "TODO", dueDate: null, done: false },
];

const priorityConfig: Record<string, { label: string; color: string; dot: string }> = {
  URGENT: { label: "Dringend", color: "text-danger", dot: "bg-danger" },
  HIGH: { label: "Hoch", color: "text-tasks", dot: "bg-tasks" },
  MEDIUM: { label: "Mittel", color: "text-primary", dot: "bg-primary" },
  LOW: { label: "Niedrig", color: "text-muted-foreground", dot: "bg-muted-foreground" },
};

export function TaskList() {
  if (mockTasks.length === 0) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center shadow-soft">
        <div className="w-14 h-14 rounded-2xl bg-tasks-soft flex items-center justify-center mb-3">
          <CheckSquare className="h-7 w-7 text-tasks" />
        </div>
        <p className="font-semibold text-foreground">Keine Aufgaben</p>
        <p className="text-sm text-muted-foreground mt-1">Erstelle deine erste Aufgabe mit dem + Button.</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {mockTasks.map((task) => {
        const priority = priorityConfig[task.priority];
        const isOverdue = task.dueDate && new Date(task.dueDate) < new Date() && !task.done;

        return (
          <div
            key={task.id}
            className={cn(
              "bg-card border rounded-2xl px-4 py-3.5 flex items-center gap-3 shadow-soft transition-all duration-150 hover:shadow-soft-md group cursor-pointer",
              task.done ? "opacity-50 border-border" : isOverdue ? "border-danger/30" : "border-border"
            )}
          >
            {/* Checkbox */}
            <div className={cn(
              "w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all",
              task.done ? "bg-tasks border-tasks" : "border-border group-hover:border-tasks/60"
            )}>
              {task.done && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className={cn(
                "text-sm font-medium truncate",
                task.done ? "line-through text-muted-foreground" : "text-foreground"
              )}>
                {task.title}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <div className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", priority.dot)} />
                <span className={cn("text-[11px] font-medium", priority.color)}>{priority.label}</span>
                {task.dueDate && (
                  <>
                    <span className="text-border">·</span>
                    <div className="flex items-center gap-1">
                      <Calendar className={cn("h-3 w-3", isOverdue ? "text-danger" : "text-muted-foreground")} />
                      <span className={cn("text-[11px]", isOverdue ? "text-danger font-semibold" : "text-muted-foreground")}>
                        {isOverdue ? "Überfällig" : new Date(task.dueDate).toLocaleDateString("de-DE", { day: "numeric", month: "short" })}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {task.priority === "URGENT" && !task.done && (
              <AlertCircle className="h-4 w-4 text-danger flex-shrink-0" />
            )}
            <ChevronRight className="h-4 w-4 text-muted-foreground/40 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        );
      })}
    </div>
  );
}
