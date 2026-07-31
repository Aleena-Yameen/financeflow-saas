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
<th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
  Client
</th>
      <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
 Invoice
</th>
<th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
  Amount
</th>     
<th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
  Status
</th>
      <th className="pb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
  Date
</th>
    </tr>
  </thead>

  <tbody>
    {invoices.map((invoice) => (
      <tr
  key={invoice.id}
  className="border-b border-slate-800 transition-colors hover:bg-slate-800/40"
>
<td className="py-4">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
      {invoice.client[0]}
    </div>

    <span>{invoice.client}</span>
  </div>
</td>
<td className="text-slate-400">
  {invoice.invoice}
</td>
<td className="font-semibold">
  {invoice.amount}
</td>
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