type Client = {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Pending";
  invoiceCount: number;
};

type ClientCardProps = {
  client: Client;
  onDelete: (id: number) => void;
   onEdit: (client: Client) => void;
};

export default function ClientCard({
  client,
  onDelete,
   onEdit,
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

      <div className="mt-6 flex items-center justify-between">
  <p className="text-sm text-slate-400">
    {client.invoiceCount} invoices
  </p>

 <div className="flex gap-2">
  <button
    onClick={() => onEdit(client)}
    className="rounded-lg px-3 py-2 text-sm text-indigo-400 transition-colors hover:bg-indigo-500/10"
  >
    Edit
  </button>

  <button
    onClick={() => onDelete(client.id)}
    className="rounded-lg px-3 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10"
  >
    Delete
  </button>
</div>
</div>
    </div>
  );
}