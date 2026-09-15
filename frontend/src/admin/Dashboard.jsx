import React from "react";
import { Link } from "react-router-dom";
import {
  Utensils,
  ShoppingBag,
  Users,
  IndianRupee,
  Star,
  Ticket,
  BarChart3,
  Settings,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "1,248",
      change: "+12%",
      icon: ShoppingBag,
    },
    {
      title: "Total Revenue",
      value: "₹1,25,430",
      change: "+18%",
      icon: IndianRupee,
    },
    {
      title: "Restaurants",
      value: "86",
      change: "+8%",
      icon: Utensils,
    },
    {
      title: "Users",
      value: "5,420",
      change: "+15%",
      icon: Users,
    },
  ];

  const menu = [
    { name: "Restaurants", icon: Utensils, path: "/admin/restaurants" },
    { name: "Food Items", icon: ShoppingBag, path: "/admin/food-items" },
    { name: "Orders", icon: ShoppingBag, path: "/admin/orders" },
    { name: "Users", icon: Users, path: "/admin/users" },
    { name: "Reviews", icon: Star, path: "/admin/reviews" },
    { name: "Coupons", icon: Ticket, path: "/admin/coupons" },
    { name: "Reports", icon: BarChart3, path: "/admin/reports" },
    { name: "Settings", icon: Settings, path: "/admin/settings" },
  ];

  const orders = [
    {
      id: "#ORD12345",
      customer: "Rahul Kumar",
      amount: "₹378",
      status: "Preparing",
    },
    {
      id: "#ORD12344",
      customer: "Amit Singh",
      amount: "₹289",
      status: "Delivered",
    },
    {
      id: "#ORD12343",
      customer: "Priya Sharma",
      amount: "₹520",
      status: "Out for Delivery",
    },
    {
      id: "#ORD12342",
      customer: "Neha Gupta",
      amount: "₹350",
      status: "Delivered",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-3 py-4 sm:px-4 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 rounded-4xl bg-linear-to-r from-slate-900 via-slate-800 to-orange-600 p-5 text-white shadow-xl shadow-orange-200/40 sm:p-6 lg:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-200">
                Overview
              </p>
              <h1 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Dashboard
              </h1>
              <p className="mt-1 text-sm text-slate-200 sm:text-base">
                Welcome back, Admin 👋
              </p>
            </div>

            <Link
              to="/admin/settings"
              className="inline-flex w-fit items-center justify-center rounded-2xl bg-white/10 p-3 text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              <Settings size={22} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.6rem] bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-lg sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-orange-50 p-3 text-orange-500 ring-1 ring-orange-100">
                    <Icon size={24} />
                  </div>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-semibold text-green-600">
                    {item.change}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-500">{item.title}</p>
                <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
                  {item.value}
                </h2>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.8rem] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
                Manage
              </h2>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Quick access to your admin tools
              </p>
            </div>
            <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-600">
              Quick access
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {menu.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className="group relative overflow-hidden rounded-[1.35rem] border border-slate-200 bg-linear-to-br from-white to-slate-50 p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg sm:p-4"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-orange-400 via-orange-500 to-amber-400 opacity-0 transition group-hover:opacity-100" />

                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 shadow-sm ring-1 ring-orange-100 transition group-hover:bg-orange-500 group-hover:text-white sm:h-12 sm:w-12">
                      <Icon size={18} />
                    </div>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500 group-hover:bg-orange-100 group-hover:text-orange-600">
                      Open
                    </span>
                  </div>

                  <p className="mt-3 text-xs font-semibold text-slate-700 transition group-hover:text-orange-600 sm:text-sm">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-[1.8rem] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900 sm:text-xl">
              Recent Orders
            </h2>

            <button className="text-xs font-semibold text-orange-500 sm:text-sm">
              See all
            </button>
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm text-slate-500">
                  <th className="px-3 py-3 font-medium">Order ID</th>
                  <th className="px-3 py-3 font-medium">Customer</th>
                  <th className="px-3 py-3 font-medium">Amount</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-slate-200 last:border-0"
                  >
                    <td className="px-3 py-4 font-semibold text-slate-800">
                      {order.id}
                    </td>

                    <td className="px-3 py-4 text-slate-600">{order.customer}</td>

                    <td className="px-3 py-4 font-semibold text-slate-800">
                      {order.amount}
                    </td>

                    <td className="px-3 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-3 md:hidden">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">{order.id}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-500">Customer</span>
                  <span className="text-xs font-medium text-slate-700">
                    {order.customer}
                  </span>
                </div>

                <div className="mt-1 flex items-center justify-between gap-2">
                  <span className="text-xs text-slate-500">Amount</span>
                  <span className="text-sm font-bold text-slate-900">
                    {order.amount}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;