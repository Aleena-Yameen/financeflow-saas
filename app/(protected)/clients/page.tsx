import ClientCard from "@/components/clients/ClientCard";

const clients = [
  {
    id: 1,
    name: "Apple Inc.",
    email: "apple@company.com",
    status: "Active" as const,
    invoiceCount: 12,
  },
  {
    id: 2,
    name: "Google",
    email: "contact@google.com",
    status: "Active" as const,
    invoiceCount: 8,
  },
  {
    id: 3,
    name: "Netflix",
    email: "finance@netflix.com",
    status: "Pending" as const,
    invoiceCount: 3,
  },
  {
    id: 4,
    name: "Microsoft",
    email: "billing@microsoft.com",
    status: "Active" as const,
    invoiceCount: 15,
  },
];
export default function ClientsPage() {
  return (
  <div>
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">
          Clients
        </h1>

        <p className="mt-2 text-slate-400">
          Manage all your business clients.
        </p>
      </div>

      <button className="rounded-lg bg-indigo-600 px-5 py-3 font-medium transition-colors hover:bg-indigo-500">
        + Add Client
      </button>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          client={client}
        />
      ))}
    </div>
  </div>
);
}