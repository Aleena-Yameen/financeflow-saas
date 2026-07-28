import {
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Settings,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: Users,
  },
  {
    label: "Invoices",
    href: "/invoices",
    icon: FileText,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold text-indigo-500">
          FinanceFlow
        </h1>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
  const Icon = item.icon;

  return (
    <li
      key={item.label}
      className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-slate-800 cursor-pointer transition-colors"
    >
      <Icon className="h-5 w-5 text-slate-400" />

      <span>{item.label}</span>
    </li>
  );
})}
        </ul>
      </nav>

      <div className="border-t border-slate-800 p-4">
        <p className="font-medium">Aleena</p>
        <p className="text-sm text-slate-400">
          Frontend Developer
        </p>
      </div>
    </aside>
  );
}