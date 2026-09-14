import React from "react";
import {
  IndianRupee,
  ShoppingBag,
  Users,
  TrendingUp,
} from "lucide-react";

const Reports = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹1,25,430",
      icon: IndianRupee,
    },
    {
      title: "Total Orders",
      value: "1,248",
      icon: ShoppingBag,
    },
    {
      title: "New Users",
      value: "542",
      icon: Users,
    },
    {
      title: "Growth",
      value: "+18.5%",
      icon: TrendingUp,
    },
  ];

  const sales = [
    { month: "Jan", amount: 65000 },
    { month: "Feb", amount: 82000 },
    { month: "Mar", amount: 76000 },
    { month: "Apr", amount: 105000 },
    { month: "May", amount: 125430 },
    { month: "Jun", amount: 145000 },
  ];

  const maxSales = Math.max(
    ...sales.map((item) => item.amount)
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Reports</h1>
        <p className="text-gray-500">
          Business performance reports
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl bg-white p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Icon size={23} />
              </div>

              <p className="mt-4 text-sm text-gray-500">
                {item.title}
              </p>

              <h2 className="mt-1 text-2xl font-bold">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Sales Chart */}
      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-bold">
            Revenue Overview
          </h2>

          <p className="text-sm text-gray-500">
            Monthly revenue performance
          </p>
        </div>

        <div className="flex h-72 items-end gap-4 border-b border-l p-4">
          {sales.map((item) => {
            const height =
              (item.amount / maxSales) * 100;

            return (
              <div
                key={item.month}
                className="flex h-full flex-1 flex-col items-center justify-end"
              >
                <span className="mb-2 text-xs font-semibold text-gray-500">
                  ₹{Math.round(item.amount / 1000)}k
                </span>

                <div
                  style={{
                    height: `${height}%`,
                  }}
                  className="w-full max-w-14 rounded-t-xl bg-orange-500 transition hover:bg-orange-600"
                />

                <span className="mt-2 text-sm text-gray-500">
                  {item.month}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Report Table */}
      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="p-5">
          <h2 className="text-xl font-bold">
            Monthly Report
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left">
            <thead>
              <tr className="border-y bg-gray-50 text-sm text-gray-500">
                <th className="px-6 py-4">Month</th>
                <th className="px-6 py-4">Revenue</th>
                <th className="px-6 py-4">Orders</th>
                <th className="px-6 py-4">Growth</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["January", "₹65,000", "520", "+8%"],
                ["February", "₹82,000", "680", "+12%"],
                ["March", "₹76,000", "620", "-5%"],
                ["April", "₹1,05,000", "890", "+18%"],
                ["May", "₹1,25,430", "1,248", "+20%"],
              ].map((row) => (
                <tr
                  key={row[0]}
                  className="border-b last:border-0"
                >
                  <td className="px-6 py-4 font-semibold">
                    {row[0]}
                  </td>

                  <td className="px-6 py-4">
                    {row[1]}
                  </td>

                  <td className="px-6 py-4">
                    {row[2]}
                  </td>

                  <td className="px-6 py-4 font-semibold text-green-600">
                    {row[3]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;