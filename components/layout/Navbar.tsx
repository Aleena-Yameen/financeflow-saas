"use client";

import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const currentPage = pathname.split("/")[1];

const pageTitle =
  currentPage.charAt(0).toUpperCase() +
  currentPage.slice(1);
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900 flex items-center justify-between px-8">
      <h2 className="text-xl font-semibold">
  {pageTitle}
</h2>

      <div className="flex items-center gap-4">
        <button className="text-xl">🔔</button>

        <div className="h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
}