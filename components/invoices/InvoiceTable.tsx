import InvoiceRow from "./InvoiceRow";

type Invoice = {
  id: number;
  invoice: string;
  client: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
};

type InvoiceTableProps = {
  invoices: Invoice[];
  onEdit: (invoice: Invoice) => void;
};

export default function InvoiceTable({
  invoices,
  onEdit,
}: InvoiceTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
      <table className="w-full">
        <thead className="bg-slate-800">
          <tr>
            <th className="px-6 py-4 text-left">Invoice</th>
            <th className="px-6 py-4 text-left">Client</th>
            <th className="px-6 py-4 text-left">Amount</th>
            <th className="px-6 py-4 text-left">Status</th>
            <th className="px-6 py-4 text-left">Date</th>
            <th className="px-6 py-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <InvoiceRow
              key={invoice.id}
              invoice={invoice}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}