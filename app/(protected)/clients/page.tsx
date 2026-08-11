"use client";
import ClientModal from "@/components/clients/ClientModal";
import { useState } from "react";
import ClientCard from "@/components/clients/ClientCard";

const initialClients = [
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
  const [clients, setClients] = useState(initialClients);
const [isOpen, setIsOpen] = useState(false);
const [search, setSearch] = useState("");
const [selectedClient, setSelectedClient] =
  useState<(typeof initialClients)[number] | null>(null);
const filteredClients = clients.filter(
  (client) =>
    client.name.toLowerCase().includes(search.toLowerCase()) ||
    client.email.toLowerCase().includes(search.toLowerCase())
);
const handleSaveClient = (
  clientData: {
    name: string;
    email: string;
    status: "Active" | "Pending";
  },
  id?: number
) => {
  if (id) {
    setClients((prev) =>
      prev.map((client) =>
        client.id === id
          ? {
              ...client,
              ...clientData,
            }
          : client
      )
    );
  } else {
    setClients((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...clientData,
        invoiceCount: 0,
      },
    ]);
  }

  setSelectedClient(null);
};
 const handleDeleteClient = (id: number) => {
    setClients((prev) =>
      prev.filter((client) => client.id !== id)
    );
  };

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

      <div className="flex items-center gap-4">
  <input
    type="text"
    placeholder="Search clients..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-64 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 outline-none focus:border-indigo-500"
  />

  <button
    onClick={() => setIsOpen(true)}
    className="rounded-lg bg-indigo-600 px-5 py-3 font-medium transition-colors hover:bg-indigo-500"
  >
    + Add Client
  </button>
</div>
    </div>

   <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {filteredClients.map((client) => (
    <ClientCard
      key={client.id}
      client={client}
       onDelete={handleDeleteClient}
        onEdit={(client) => {
    setSelectedClient(client);
    setIsOpen(true);
  }}
    />
  ))}
</div>
    <ClientModal
  isOpen={isOpen}
  onClose={() => {
    setIsOpen(false);
    setSelectedClient(null);
  }}
  onSave={handleSaveClient}
  client={selectedClient}
/>
  </div>
  
  
);
}