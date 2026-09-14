import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { orders } from '../data/mockData';

const tabs = ['All', 'Ongoing', 'Completed', 'Cancelled'];
const statusColor = {
  Preparing: 'text-orange-500',
  Delivered: 'text-green-600',
  Cancelled: 'text-red-500'
};

export default function Orders() {
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();

  const filtered = orders.filter((o) => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Ongoing') return o.status !== 'Delivered' && o.status !== 'Cancelled';
    if (activeTab === 'Completed') return o.status === 'Delivered';
    if (activeTab === 'Cancelled') return o.status === 'Cancelled';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-24 pt-5 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">Orders</p>
          <h1 className="mt-1 text-2xl font-black text-slate-900">My Orders</h1>
        </div>

        <div className="mb-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <div className="flex min-w-max gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap transition ${
                  activeTab === t
                    ? 'bg-linear-to-r from-orange-500 to-amber-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((order) => (
            <div key={order.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Order ID
                  </p>
                  <p className="mt-1 text-base font-black text-slate-900">{order.id}</p>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    order.status === 'Preparing'
                      ? 'bg-orange-100 text-orange-600'
                      : order.status === 'Delivered'
                        ? 'bg-emerald-100 text-emerald-600'
                        : order.status === 'Cancelled'
                          ? 'bg-red-100 text-red-600'
                          : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {order.status}
                </span>
              </div>

              <div className="mb-4 flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-xs text-slate-500">
                <span className="font-medium">Order placed</span>
                <span className="font-semibold text-slate-700">{order.date}</span>
              </div>

              <div className="space-y-2 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                {order.items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-4 text-sm text-slate-600">
                    <span className="flex-1">
                      <span className="font-medium text-slate-800">{it.qty} × </span>
                      {it.name}
                    </span>
                    <span className="font-bold text-slate-800">₹{it.price}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                <span className="text-sm text-slate-500">Total</span>
                <span className="text-lg font-black text-slate-900">₹{order.total}</span>
              </div>

              {order.status !== 'Delivered' && order.status !== 'Cancelled' && (
                <button
                  onClick={() => navigate(`/orders/${order.id.replace('#', '')}/track`)}
                  className="mt-4 w-full rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 px-4 py-3 text-sm font-bold text-white shadow-sm transition hover:brightness-105"
                >
                  Track Order
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
