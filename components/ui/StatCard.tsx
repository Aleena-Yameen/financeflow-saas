import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: LucideIcon;
    changeColor: string;
};

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  changeColor,
}: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm text-slate-400">
          {title}
        </h3>

        <Icon className="h-6 w-6 text-indigo-500" />
      </div>

      <h2 className="text-3xl font-bold">
        {value}
      </h2>

      <p className={`mt-2 text-sm ${changeColor}`}>
    {change}
      </p>
    </div>
  );
}