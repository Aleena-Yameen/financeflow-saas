"use client";
import {
  User,
  Bell,
  Shield,
  Palette,
  Save,
   DollarSign,
} from "lucide-react";

import { useState } from "react";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
const [invoiceReminders, setInvoiceReminders] = useState(true);
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your account preferences and application settings.
        </p>
      </div>

      <div className="space-y-6">

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center gap-3">
            <User className="text-indigo-400" />
            <h2 className="text-xl font-semibold">
              Profile
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-indigo-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Bell className="text-yellow-400" />
            <h2 className="text-xl font-semibold">
              Notifications
            </h2>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span>Email Notifications</span>
              <input
  type="checkbox"
  checked={emailNotifications}
  onChange={(e) => setEmailNotifications(e.target.checked)}
/>
            </label>

            <label className="flex items-center justify-between">
              <span>Invoice Reminders</span>
              <input
  type="checkbox"
  checked={invoiceReminders}
  onChange={(e) => setInvoiceReminders(e.target.checked)}
/>
            </label>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Shield className="text-emerald-400" />
            <h2 className="text-xl font-semibold">
              Security
            </h2>
          </div>

          <button className="rounded-lg bg-slate-800 px-4 py-2 transition-colors hover:bg-slate-700">
            Change Password
          </button>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center gap-3">
            <DollarSign className="text-green-400" />
            <h2 className="text-xl font-semibold">
              Currency
            </h2>
          </div>

          <p className="mb-4 text-sm text-slate-400">
            Choose the default currency for your invoices.
          </p>

          <select
            defaultValue="USD"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-indigo-500"
          >
            <option value="USD">USD — US Dollar</option>
            <option value="EUR">EUR — Euro</option>
            <option value="GBP">GBP — British Pound</option>
            <option value="PKR">PKR — Pakistani Rupee</option>
          </select>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Palette className="text-pink-400" />
            <h2 className="text-xl font-semibold">
              Appearance
            </h2>
          </div>

          <select className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-indigo-500">
            <option>Dark Theme</option>
            <option>Light Theme</option>
            <option>System Default</option>
          </select>
        </div>

        <div className="flex justify-end">
          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium transition-colors hover:bg-indigo-500">
            <Save size={18} />
            Save Changes
          </button>
        </div>

      </div>
    </div>
  );
}