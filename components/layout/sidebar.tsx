"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home, CalendarDays, CheckSquare, Wallet,
  Settings, LogOut, Bell,
} from "lucide-react";
import { signOut } from "next-auth/react";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Home, color: "text-primary", bg: "bg-primary/10" },
  { href: "/calendar", label: "Kalender", icon: CalendarDays, color: "text-calendar", bg: "bg-calendar-soft" },
  { href: "/tasks", label: "Aufgaben", icon: CheckSquare, color: "text-tasks", bg: "bg-tasks-soft" },
  { href: "/finance", label: "Finanzen", icon: Wallet, color: "text-finance", bg: "bg-finance-soft" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-border bg-surface h-screen sticky top-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-border">
        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center shadow-soft">
          <span className="text-white text-xs font-bold">DF</span>
        </div>
        <div>
          <h1 className="text-sm font-semibold text-foreground leading-none">Don&apos;t Forget</h1>
          <p className="text-[11px] text-muted-foreground mt-0.5">Dein Organizer</p>
        </div>
        <button className="ml-auto relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-danger rounded-full" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                isActive
                  ? cn("bg-accent text-foreground", item.color.replace("text-", ""))
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <div className={cn(
                "w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
                isActive ? item.bg : "bg-transparent"
              )}>
                <Icon className={cn("h-4 w-4", isActive ? item.color : "")} strokeWidth={isActive ? 2.5 : 1.8} />
              </div>
              <span>{item.label}</span>
              {isActive && (
                <div className={cn("ml-auto w-1.5 h-1.5 rounded-full", item.color.replace("text-", "bg-"))} />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-border space-y-0.5">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center">
            <Settings className="h-4 w-4" strokeWidth={1.8} />
          </div>
          Einstellungen
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-danger hover:bg-danger-soft transition-all"
        >
          <div className="w-7 h-7 rounded-lg flex items-center justify-center">
            <LogOut className="h-4 w-4" strokeWidth={1.8} />
          </div>
          Abmelden
        </button>
      </div>
    </aside>
  );
}
