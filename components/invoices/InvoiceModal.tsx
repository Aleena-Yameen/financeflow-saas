"use client";
import { useEffect, useState } from "react";
type NewInvoice = {
  client: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
};

type Invoice = {
  id: number;
  invoice: string;
  client: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
};

type InvoiceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (invoice: NewInvoice) => void;
  editingInvoice?: Invoice | null;
};

export default function InvoiceModal({
  isOpen,
  onClose,
  onSave,
  editingInvoice,
}: InvoiceModalProps) {
    const [client, setClient] = useState("");
const [amount, setAmount] = useState("");
const [status, setStatus] = useState<"Paid" | "Pending" | "Overdue">(
  "Pending"
);
const [date, setDate] = useState("");
useEffect(() => {
  if (editingInvoice) {
    setClient(editingInvoice.client);
    setAmount(editingInvoice.amount);
    setStatus(editingInvoice.status);

    const parsedDate = new Date(editingInvoice.date);

    if (!isNaN(parsedDate.getTime())) {
      setDate(parsedDate.toISOString().split("T")[0]);
    }
  } else {
    setClient("");
    setAmount("");
    setStatus("Pending");
    setDate("");
  }
}, [editingInvoice, isOpen]);
const handleSave = () => {
  if (!client || !amount || !date) {
    alert("Please fill in all fields.");
    return;
  }

  onSave({
    client,
    amount,
    status: status as "Paid" | "Pending" | "Overdue",
    date,
  });

  setClient("");
  setAmount("");
  setStatus("Pending");
  setDate("");

  onClose();
};
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-xl bg-slate-900 p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">
           {editingInvoice ? "Edit Invoice" : "New Invoice"}
          </h2>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">

  <div>
    <label className="mb-2 block text-sm font-medium">
      Client
    </label>

    <input
      type="text"
      value={client}
      onChange={(e) => setClient(e.target.value)}
      placeholder="Apple Inc."
      className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 outline-none focus:border-indigo-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Amount
    </label>

    <input
      type="text"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="$1200"
      className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 outline-none focus:border-indigo-500"
    />
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Status
    </label>

    <select
      value={status}
      onChange={(e) =>
  setStatus(e.target.value as "Paid" | "Pending" | "Overdue")
}
      className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 outline-none focus:border-indigo-500"
    >
      <option>Paid</option>
      <option>Pending</option>
      <option>Overdue</option>
    </select>
  </div>

  <div>
    <label className="mb-2 block text-sm font-medium">
      Date
    </label>

    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 outline-none focus:border-indigo-500"
    />
  </div>

</div>

        <div className="mt-8 flex justify-end gap-3">
  <button
    onClick={onClose}
    className="rounded-lg bg-slate-700 px-4 py-2 transition-colors hover:bg-slate-600"
  >
    Cancel
  </button>

  <button
  onClick={handleSave}
  className="rounded-lg bg-indigo-600 px-4 py-2 transition-colors hover:bg-indigo-500"
>
  {editingInvoice ? "Update Invoice" : "Save Invoice"}
</button>
</div>
      </div>
    </div>
  );
}