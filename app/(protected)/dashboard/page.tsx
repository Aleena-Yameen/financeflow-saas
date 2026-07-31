import {
  DollarSign,
  Users,
  FileText,
  Wallet,
  LayoutDashboard,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

const stats = [
  {
    title: "Total Revenue",
    value: "$42,580",
    change: "+12% this month",
    changeColor: "text-emerald-400",
    icon: DollarSign,
  },
  {
    title: "Clients",
    value: "148",
    change: "+8 this month",
    changeColor: "text-blue-400",
    icon: Users,
  },
  {
    title: "Invoices",
    value: "84",
    change: "6 unpaid",
    changeColor: "text-orange-400",
    icon: FileText,
  },
  {
    title: "Outstanding",
    value: "$6,450",
    change: "3 overdue",
    changeColor: "text-red-400",
    icon: Wallet,
  },
];
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  {stats.map((stat) => (
    <StatCard
  key={stat.title}
  {...stat}
/>
  ))}
</div>
      </div>
    </div>
  );
}