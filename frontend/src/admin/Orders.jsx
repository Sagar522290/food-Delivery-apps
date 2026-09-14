import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "#ORD12345",
      customer: "Rahul Kumar",
      restaurant: "Pizza Palace",
      items: "Margherita Pizza, Pepsi",
      amount: 378,
      status: "Preparing",
    },
    {
      id: "#ORD12344",
      customer: "Amit Singh",
      restaurant: "Pizza Palace",
      items: "Farmhouse Pizza, Coke",
      amount: 289,
      status: "Delivered",
    },
    {
      id: "#ORD12343",
      customer: "Priya Sharma",
      restaurant: "Burger House",
      items: "Burger, Fries",
      amount: 420,
      status: "Out for Delivery",
    },
    {
      id: "#ORD12342",
      customer: "Neha Gupta",
      restaurant: "Biryani House",
      items: "Chicken Biryani",
      amount: 350,
      status: "Cancelled",
    },
  ]);

  const changeStatus = (id, status) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const statusClass = (status) => {
    if (status === "Delivered")
      return "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200";

    if (status === "Cancelled")
      return "bg-rose-100 text-rose-700 ring-1 ring-rose-200";

    if (status === "Out for Delivery")
      return "bg-sky-100 text-sky-700 ring-1 ring-sky-200";

    return "bg-amber-100 text-amber-700 ring-1 ring-amber-200";
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
            Order Management
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">Orders</h1>
          <p className="mt-1 text-sm text-slate-500">Manage customer orders</p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-250 text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-sm text-slate-600">
                  <th className="px-5 py-4 font-semibold">Order ID</th>
                  <th className="px-5 py-4 font-semibold">Customer</th>
                  <th className="px-5 py-4 font-semibold">Restaurant</th>
                  <th className="px-5 py-4 font-semibold">Items</th>
                  <th className="px-5 py-4 font-semibold">Amount</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b border-slate-200 last:border-0 hover:bg-slate-50">
                    <td className="px-5 py-4 font-semibold text-slate-800">{order.id}</td>

                    <td className="px-5 py-4 text-slate-700">{order.customer}</td>

                    <td className="px-5 py-4 text-slate-600">{order.restaurant}</td>

                    <td className="max-w-65 px-5 py-4 text-sm text-slate-500">
                      {order.items}
                    </td>

                    <td className="px-5 py-4 font-bold text-slate-800">₹{order.amount}</td>

                    <td className="px-5 py-4">
                      <div className="relative min-w-42.5">
                        <select
                          value={order.status}
                          onChange={(e) => changeStatus(order.id, e.target.value)}
                          className={`w-full appearance-none rounded-full border-0 px-3 py-2 pr-9 text-xs font-semibold shadow-sm outline-none ${statusClass(order.status)}`}
                        >
                          <option>Preparing</option>
                          <option>Out for Delivery</option>
                          <option>Delivered</option>
                          <option>Cancelled</option>
                        </select>
                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] font-bold opacity-80">
                          ▾
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;