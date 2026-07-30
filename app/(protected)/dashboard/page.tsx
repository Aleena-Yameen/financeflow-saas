import {
  DollarSign,
  Users,
  FileText,
  Wallet,
  LayoutDashboard,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Here's an overview of your business today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Revenue"
          value="$42,580"
          change="+12% this month"
          icon={DollarSign}
          changeColor="text-emerald-400"
        />

        <StatCard
          title="Clients"
          value="148"
          change="+8 this month"
          icon={Users}
          changeColor="text-blue-400"
        />

        <StatCard
          title="Invoices"
          value="84"
          change="6 unpaid"
          icon={FileText}
          changeColor="text-orange-400"
        />

        <StatCard
          title="Outstanding"
          value="$6,450"
          change="3 overdue"
          icon={Wallet}
          changeColor="text-red-400"
        />
      </div>
    </div>
  );
}