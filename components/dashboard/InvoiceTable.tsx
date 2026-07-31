import StatusBadge from "@/components/ui/StatusBadge";

type Invoice = {
  id: number;
  client: string;
  invoice: string;
  amount: string;
  status: string;
  date: string;
};

type InvoiceTableProps = {
  invoices: Invoice[];
};

export default function InvoiceTable({
  invoices,
}: InvoiceTableProps) {
  return (
    <section className="mt-10 rounded-xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold">
        Recent Invoices
      </h2>

     <table className="w-full">
  <thead>
    <tr className="border-b border-slate-800 text-left">
      <th className="pb-3">Client</th>
      <th className="pb-3">Invoice</th>
      <th className="pb-3">Amount</th>
      <th className="pb-3">Status</th>
      <th className="pb-3">Date</th>
    </tr>
  </thead>

  <tbody>
    {invoices.map((invoice) => (
      <tr
        key={invoice.id}
        className="border-b border-slate-800"
      >
        <td className="py-4">{invoice.client}</td>

        <td>{invoice.invoice}</td>

        <td>{invoice.amount}</td>

        <td>
  <StatusBadge status={invoice.status} />
</td>

        <td>{invoice.date}</td>
      </tr>
    ))}
  </tbody>
</table>
    </section>
  );
}