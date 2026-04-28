"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, CalendarDays, CheckSquare, Wallet } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home, color: "text-primary" },
  { href: "/calendar", label: "Kalender", icon: CalendarDays, color: "text-calendar" },
  { href: "/tasks", label: "Aufgaben", icon: CheckSquare, color: "text-tasks" },
  { href: "/finance", label: "Finanzen", icon: Wallet, color: "text-finance" },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      {/* Blur backdrop */}
      <div className="absolute inset-0 glass border-t border-border" />

      <div className="relative flex items-center justify-around px-2 py-2 pb-safe">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 flex-1 py-1 group"
            >
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-2xl transition-all duration-200",
                  isActive
                    ? "bg-primary/10 scale-110"
                    : "group-hover:bg-accent"
                )}
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors duration-200",
                    isActive ? item.color : "text-muted-foreground group-hover:text-foreground"
                  )}
                  strokeWidth={isActive ? 2.5 : 1.8}
                />
              </div>
              <span
                className={cn(
                  "text-[10px] font-medium transition-colors duration-200",
                  isActive ? item.color : "text-muted-foreground"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
