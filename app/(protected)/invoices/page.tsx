"use client";
import InvoiceTable from "@/components/invoices/InvoiceTable";
import { useEffect, useState } from "react";
import InvoiceModal from "@/components/invoices/InvoiceModal";

const initialInvoices = [
  {
    id: 1,
    invoice: "INV-001",
    client: "Apple Inc.",
    amount: "$1,250",
    status: "Paid" as const,
    date: "Jul 21, 2026",
  },
  {
    id: 2,
    invoice: "INV-002",
    client: "Google",
    amount: "$980",
    status: "Pending" as const,
    date: "Jul 20, 2026",
  },
  {
    id: 3,
    invoice: "INV-003",
    client: "Netflix",
    amount: "$2,400",
    status: "Overdue" as const,
    date: "Jul 18, 2026",
  },
  {
    id: 4,
    invoice: "INV-004",
    client: "Microsoft",
    amount: "$1,850",
    status: "Paid" as const,
    date: "Jul 17, 2026",
  },
];

type Invoice = {
  id: number;
  invoice: string;
  client: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
};

export default function InvoicesPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [invoices, setInvoices] = useState(initialInvoices);
  const [isLoaded, setIsLoaded] = useState(false);
  const [search, setSearch] = useState("");
  const [editingInvoice, setEditingInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
  const savedInvoices = localStorage.getItem("financeflow-invoices");

  if (savedInvoices) {
    setInvoices(JSON.parse(savedInvoices));
  }

  setIsLoaded(true);
}, []);

useEffect(() => {
  if (!isLoaded) return;

  localStorage.setItem(
    "financeflow-invoices",
    JSON.stringify(invoices)
  );
}, [invoices, isLoaded]);

  const handleSaveInvoice = (newInvoice: {
  client: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
}) => {
  if (editingInvoice) {
    setInvoices((prev) =>
      prev.map((invoice) =>
        invoice.id === editingInvoice.id
          ? {
              ...invoice,
              ...newInvoice,
            }
          : invoice
      )
    );

    setEditingInvoice(null);
  } else {
    setInvoices((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        invoice: `INV-${String(prev.length + 1).padStart(3, "0")}`,
        ...newInvoice,
      },
    ]);
  }
};

const handleEditInvoice = (invoice: Invoice) => {
  setEditingInvoice(invoice);
  setIsOpen(true);
};

const handleDeleteInvoice = (id: number) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this invoice?"
  );

  if (!confirmed) return;

  setInvoices((prev) =>
    prev.filter((invoice) => invoice.id !== id)
  );
};

const filteredInvoices = invoices.filter((invoice) =>
  invoice.client.toLowerCase().includes(search.toLowerCase()) ||
  invoice.invoice.toLowerCase().includes(search.toLowerCase())
);
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Invoices
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all invoices in one place.
          </p>
        </div>

        <div className="flex items-center gap-4">
  <input
    type="text"
    placeholder="Search invoices..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-64 rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 outline-none focus:border-indigo-500"
  />

  <button
    onClick={() => setIsOpen(true)}
    className="rounded-lg bg-indigo-600 px-5 py-2.5 font-medium transition-colors hover:bg-indigo-500"
  >
    + New Invoice
  </button>
</div>
      </div>

<InvoiceTable
  invoices={filteredInvoices}
  onEdit={handleEditInvoice}
  onDelete={handleDeleteInvoice}
/>    
  <InvoiceModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  onSave={handleSaveInvoice}
  editingInvoice={editingInvoice}
/>

    </div>
  );
}