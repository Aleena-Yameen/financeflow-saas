"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type NewClient = {
  name: string;
  email: string;
  status: "Active" | "Pending";
  
};
type Client = NewClient & {
  id: number;
  invoiceCount: number;
};

type ClientModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (client: NewClient, id?: number) => void;
  client?: Client | null;
};

export default function ClientModal({
  isOpen,
  onClose,
  onSave,
   client,
}: ClientModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"Active" | "Pending">("Active");
useEffect(() => {
  if (client) {
    setName(client.name);
    setEmail(client.email);
    setStatus(client.status);
  } else {
    setName("");
    setEmail("");
    setStatus("Active");
  }
}, [client]);
  if (!isOpen) return null;

  const handleSave = () => {
    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }

   onSave(
  {
    name,
    email,
    status,
  },
  client?.id
);

    setName("");
    setEmail("");
    setStatus("Active");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-lg rounded-xl bg-slate-900 p-6">

        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {client ? "Edit Client" : "Add Client"}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-4">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Client Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Apple Inc."
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contact@company.com"
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
                setStatus(e.target.value as "Active" | "Pending")
              }
              className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 outline-none focus:border-indigo-500"
            >
              <option>Active</option>
              <option>Pending</option>
            </select>
          </div>

        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg bg-slate-700 px-4 py-2 hover:bg-slate-600"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-lg bg-indigo-600 px-4 py-2 hover:bg-indigo-500"
          >
            {client ? "Update Client" : "Save Client"}
          </button>
        </div>

      </div>
    </div>
  );
}