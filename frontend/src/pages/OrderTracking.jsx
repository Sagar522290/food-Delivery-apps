import { useNavigate, useParams } from 'react-router-dom';
import { orders } from '../data/mockData';

const stages = ['Order Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'];

export default function OrderTracking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = orders.find((o) => o.id === `#${id}`) || orders[0];
  const currentIndex = stages.findIndex((s) => s.toLowerCase().includes(order.status.toLowerCase()));

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center gap-3">
          <h1 className="text-xl font-bold text-slate-900">Order Tracking</h1>
        </div>

        <div className="rounded-4xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
          <div className="mb-5 flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Order ID
              </p>
              <p className="mt-1 text-base font-bold text-slate-900">{order.id}</p>
            </div>
            <span className="rounded-full bg-orange-100 px-2.5 py-1 text-xs font-semibold text-orange-600">
              {order.status}
            </span>
          </div>

          <div className="mb-5 flex items-center justify-between rounded-2xl bg-linear-to-r from-orange-50 to-amber-50 p-3 text-sm text-slate-700">
            <span className="font-medium">Estimated Delivery Time</span>
            <span className="font-bold text-orange-600">30-40 min</span>
          </div>

          <div className="mb-7">
            {stages.map((stage, idx) => {
              const done = idx <= currentIndex;

              return (
                <div key={stage} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                        done ? 'bg-green-500 text-white shadow-sm' : 'bg-slate-200 text-slate-400'
                      }`}
                    >
                      {done ? '✓' : ''}
                    </div>
                    {idx < stages.length - 1 && (
                      <div
                        className={`w-px flex-1 ${idx < currentIndex ? 'bg-green-500' : 'bg-slate-200'}`}
                        style={{ minHeight: 40 }}
                      />
                    )}
                  </div>

                  <div className="flex-1 pb-6">
                    <p className={`text-sm font-semibold ${done ? 'text-slate-900' : 'text-slate-400'}`}>
                      {stage}
                    </p>
                    {done && (
                      <p className="mt-1 text-xs text-slate-500">
                        {order.date || 'Updated just now'}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="mb-3 text-base font-bold text-slate-900">Delivery Partner</h2>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl shadow-sm">
                🧑
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-slate-800">Rahul Kumar</p>
                <p className="text-xs text-slate-500">★ 4.6 rating</p>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100">
                📞
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100">
                💬
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
