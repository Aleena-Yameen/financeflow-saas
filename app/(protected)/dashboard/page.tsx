import { LayoutDashboard } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center gap-3">
        <LayoutDashboard className="h-8 w-8 text-indigo-500" />

        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>
      </div>

      <p className="mt-2 text-slate-400">
        Here's an overview of your business today.
      </p>
    </>
  );
}