import { CheckSquare } from "lucide-react";

export function TaskList() {
  return (
    <div className="bg-card border rounded-xl divide-y">
      <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
        <CheckSquare className="h-10 w-10 mb-3 opacity-40" />
        <p className="font-medium">Keine Aufgaben gefunden</p>
        <p className="text-sm mt-1">Erstelle deine erste Aufgabe mit dem Button oben.</p>
      </div>
    </div>
  );
}
