import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = { title: "Anmelden" };

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-calendar/5 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex w-14 h-14 rounded-2xl bg-primary items-center justify-center shadow-soft-md mb-4">
            <span className="text-white text-xl font-bold">DF</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground tracking-tight">Don&apos;t Forget</h1>
          <p className="text-sm text-muted-foreground mt-1">Willkommen zurück</p>
        </div>

        {/* Card */}
        <div className="bg-surface border border-border rounded-3xl p-6 shadow-soft-lg">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
