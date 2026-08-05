type Client = {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Pending";
  invoiceCount: number;
};

type ClientCardProps = {
  client: Client;
};

export default function ClientCard({
  client,
}: ClientCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-indigo-500">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold">
            {client.name.charAt(0)}
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              {client.name}
            </h3>

            <p className="text-sm text-slate-400">
              {client.email}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-sm ${
            client.status === "Active"
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-yellow-500/20 text-yellow-400"
          }`}
        >
          {client.status}
        </span>
      </div>

      <p className="mt-6 text-sm text-slate-400">
        {client.invoiceCount} invoices
      </p>
    </div>
  );
}