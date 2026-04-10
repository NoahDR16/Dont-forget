import type { Metadata } from "next";
import { TaskList } from "@/components/tasks/task-list";
import { TaskFilters } from "@/components/tasks/task-filters";
import { CreateTaskButton } from "@/components/tasks/create-task-button";

export const metadata: Metadata = {
  title: "Aufgaben",
};

export default function TasksPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Aufgaben</h1>
          <p className="text-muted-foreground">
            Verwalte deine To-Dos und Prioritäten.
          </p>
        </div>
        <CreateTaskButton />
      </div>

      <TaskFilters />
      <TaskList />
    </div>
  );
}
