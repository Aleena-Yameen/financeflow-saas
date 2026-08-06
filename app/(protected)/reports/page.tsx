import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Download,
} from "lucide-react";

export default function ReportsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Reports
          </h1>

          <p className="mt-2 text-slate-400">
            Analyze your business performance and financial insights.
          </p>
        </div>

        <button className="rounded-lg bg-indigo-600 px-5 py-3 font-medium transition-colors hover:bg-indigo-500">
          <span className="flex items-center gap-2">
            <Download size={18} />
            Export Report
          </span>
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <DollarSign className="mb-4 text-emerald-400" size={30} />

          <h3 className="text-slate-400">
            Total Revenue
          </h3>

          <p className="mt-2 text-3xl font-bold">
            $42,580
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <TrendingUp className="mb-4 text-indigo-400" size={30} />

          <h3 className="text-slate-400">
            Monthly Growth
          </h3>

          <p className="mt-2 text-3xl font-bold">
            +12%
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <BarChart3 className="mb-4 text-orange-400" size={30} />

          <h3 className="text-slate-400">
            Paid Invoices
          </h3>

          <p className="mt-2 text-3xl font-bold">
            78
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <BarChart3 className="mb-4 text-red-400" size={30} />

          <h3 className="text-slate-400">
            Outstanding
          </h3>

          <p className="mt-2 text-3xl font-bold">
            $6,450
          </p>
        </div>

      </div>

      <div className="mt-8 rounded-xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center">
        <BarChart3
          size={60}
          className="mx-auto mb-4 text-slate-500"
        />

        <h2 className="text-2xl font-semibold">
          Advanced Reports Coming Soon
        </h2>

        <p className="mt-3 text-slate-400">
          Revenue trends, client analytics, invoice history,
          and downloadable financial reports will appear here.
        </p>
      </div>
    </div>
  );
}