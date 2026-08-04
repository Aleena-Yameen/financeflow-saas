import {
  DollarSign,
  Users,
  FileText,
  Wallet,
  LayoutDashboard,
} from "lucide-react";

import InvoiceTable from "@/components/dashboard/InvoiceTable";
import StatCard from "@/components/ui/StatCard";
import RevenueChart from "@/components/dashboard/RevenueChart";
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

const invoices = [
  {
    id: 1,
    client: "Apple Inc.",
    invoice: "INV-001",
    amount: "$1,250",
    status: "Paid",
    date: "Jul 21, 2026",
  },
  {
    id: 2,
    client: "Google",
    invoice: "INV-002",
    amount: "$980",
    status: "Pending",
    date: "Jul 20, 2026",
  },
  {
    id: 3,
    client: "Netflix",
    invoice: "INV-003",
    amount: "$2,400",
    status: "Overdue",
    date: "Jul 18, 2026",
  },
  {
    id: 4,
    client: "Microsoft",
    invoice: "INV-004",
    amount: "$1,850",
    status: "Paid",
    date: "Jul 17, 2026",
  },
];
const revenueData = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5100 },
  { month: "Mar", revenue: 4700 },
  { month: "Apr", revenue: 6200 },
  { month: "May", revenue: 5900 },
  { month: "Jun", revenue: 7100 },
  { month: "Jul", revenue: 8200 },
];
export default function DashboardPage() {
  return (
    <div className="space-y-8">
  <div className="mb-8">
    <h1 className="text-3xl font-bold">
      Welcome back 👋
    </h1>

    <p className="mt-2 text-slate-400">
      Here's an overview of your business today.
    </p>
  </div>

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    {stats.map((stat) => (
      <StatCard
        key={stat.title}
        {...stat}
      />
    ))}
  </div>
<RevenueChart data={revenueData} />
  <InvoiceTable invoices={invoices} />
</div>
  );
}