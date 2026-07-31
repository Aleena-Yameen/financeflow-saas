type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  let color = "";

  if (status === "Paid") {
    color = "bg-emerald-500/20 text-emerald-400";
  } else if (status === "Pending") {
    color = "bg-amber-500/20 text-amber-400";
  } else if (status === "Overdue") {
    color = "bg-red-500/20 text-red-400";
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${color}`}
    >
      {status}
    </span>
  );
}