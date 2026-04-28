import type { Metadata } from "next";
import { TaskList } from "@/components/tasks/task-list";
import { TaskFilters } from "@/components/tasks/task-filters";
import { CreateTaskButton } from "@/components/tasks/create-task-button";
import { CheckSquare } from "lucide-react";

export const metadata: Metadata = { title: "Aufgaben" };

export default function TasksPage() {
  return (
    <div className="max-w-lg mx-auto space-y-4 animate-slide-up">
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-tasks-soft flex items-center justify-center">
            <CheckSquare className="h-4.5 w-4.5 text-tasks" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Aufgaben</h1>
            <p className="text-xs text-muted-foreground">2 von 5 erledigt</p>
          </div>
        </div>
        <CreateTaskButton />
      </div>

      {/* Filters */}
      <TaskFilters />

      {/* List */}
      <TaskList />

      <div className="h-4" />
    </div>
  );
}
