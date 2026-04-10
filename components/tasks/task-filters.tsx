"use client";

export function TaskFilters() {
  const filters = ["Alle", "Offen", "In Arbeit", "Erledigt"];

  return (
    <div className="flex gap-2 flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter}
          className="px-4 py-1.5 text-sm rounded-full border hover:bg-accent transition-colors first:bg-primary first:text-primary-foreground first:border-primary"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
