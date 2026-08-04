"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
   CartesianGrid,
} from "recharts";


type Revenue = {
  month: string;
  revenue: number;
};

type RevenueChartProps = {
  data: Revenue[];
};

export default function RevenueChart({
  data,
}: RevenueChartProps) {
  return (
    <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Revenue Analytics
      </h2>

      <div className="h-80">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart
  data={data}
  margin={{
    top: 10,
    right: 20,
    left: 0,
    bottom: 0,
  }}
>
        <CartesianGrid
  strokeDasharray="3 3"
  stroke="#334155"
/>
      <XAxis
  dataKey="month"
  stroke="#94a3b8"
  axisLine={false}
  tickLine={false}
/>

<YAxis
  stroke="#94a3b8"
  axisLine={false}
  tickLine={false}
/>

<Tooltip
  contentStyle={{
    backgroundColor: "#0f172a",
    border: "1px solid #334155",
    borderRadius: "12px",
    color: "#fff",
  }}
  labelStyle={{
    color: "#94a3b8",
  }}
/>
     <Line
  type="monotone"
  dataKey="revenue"
  stroke="#6366f1"
  strokeWidth={3}
  dot={{
    r: 4,
    fill: "#6366f1",
  }}
  activeDot={{
    r: 7,
    fill: "#6366f1",
  }}
/>
    </LineChart>
  </ResponsiveContainer>
</div>
    </section>
  );
}
