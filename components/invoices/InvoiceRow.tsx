import { Pencil } from "lucide-react";

type Invoice = {
  id: number;
  invoice: string;
  client: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
};

type InvoiceRowProps = {
  invoice: Invoice;
  onEdit: (invoice: Invoice) => void;
};

export default function InvoiceRow({
  invoice,
  onEdit,
}: InvoiceRowProps) {
  const statusColor =
    invoice.status === "Paid"
      ? "bg-emerald-500/20 text-emerald-400"
      : invoice.status === "Pending"
      ? "bg-yellow-500/20 text-yellow-400"
      : "bg-red-500/20 text-red-400";

      const formattedDate = new Date(invoice.date).toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
  return (
    <tr className="border-b border-slate-800 last:border-0">
      <td className="px-6 py-4">{invoice.invoice}</td>

      <td className="px-6 py-4">{invoice.client}</td>

      <td className="px-6 py-4">{invoice.amount}</td>

      <td className="px-6 py-4">
        <span className={`rounded-full px-3 py-1 text-sm ${statusColor}`}>
          {invoice.status}
        </span>
      </td>

      <td className="px-6 py-4 text-slate-400">{formattedDate}</td>

      <td className="px-6 py-4">
  <button
  onClick={() => onEdit(invoice)}
  className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm transition-colors hover:bg-slate-700"
>
  <Pencil size={16} />
  Edit
</button>
</td>
    </tr>
  );
}