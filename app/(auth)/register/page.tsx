import type { Metadata } from "next";
import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Registrieren",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Don&apos;t Forget
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Konto erstellen
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
