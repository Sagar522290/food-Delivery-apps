import React, { useState } from "react";
import { Save, Bell, ShieldCheck, Palette, Globe } from "lucide-react";

const Settings = () => {
  const [settings, setSettings] = useState({
    orderAlerts: true,
    newUsers: true,
    darkMode: false,
    maintenance: false,
    autoRefund: true,
  });

  const toggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const cards = [
    {
      title: "Notifications",
      description: "Control alerts for orders and updates.",
      icon: Bell,
      key: "orderAlerts",
      label: "Order notifications",
    },
    {
      title: "Security",
      description: "Manage admin access and safety checks.",
      icon: ShieldCheck,
      key: "newUsers",
      label: "New user approvals",
    },
    {
      title: "Appearance",
      description: "Customize the admin dashboard look.",
      icon: Palette,
      key: "darkMode",
      label: "Dark mode",
    },
    {
      title: "System",
      description: "Configure platform-wide operational settings.",
      icon: Globe,
      key: "maintenance",
      label: "Maintenance mode",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Configuration
            </p>
            <h1 className="mt-2 text-3xl font-bold text-slate-900">Settings</h1>
            <p className="mt-1 text-sm text-slate-500">Manage platform preferences and admin options</p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 font-semibold text-white transition hover:bg-orange-600">
            <Save size={18} />
            Save Changes
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cards.map(({ title, description, icon: Icon, key, label }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-base font-bold text-slate-800 sm:text-lg">{title}</h2>
                    <p className="mt-1 text-sm leading-5 text-slate-500">{description}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => toggle(key)}
                  className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition sm:h-6 sm:w-11 ${
                    settings[key] ? "bg-orange-500" : "bg-slate-200"
                  }`}
                  aria-label={label}
                >
                  <span
                    className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition sm:h-4 sm:w-4 ${
                      settings[key] ? "translate-x-6 sm:translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0 flex-1 pr-2">
              <h3 className="text-base font-bold text-slate-800 sm:text-lg">Refund Automation</h3>
              <p className="mt-1 text-sm leading-5 text-slate-500">Automatically process eligible order refunds</p>
            </div>

            <button
              type="button"
              onClick={() => toggle("autoRefund")}
              className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition sm:h-6 sm:w-11 ${
                settings.autoRefund ? "bg-orange-500" : "bg-slate-200"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow-sm transition sm:h-4 sm:w-4 ${
                  settings.autoRefund ? "translate-x-6 sm:translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
