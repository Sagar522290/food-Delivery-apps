import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const paymentMethods = ['Cash on Delivery', 'UPI', 'Credit / Debit Card', 'Net Banking', 'Wallets'];

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalAmount, clearCart } = useCart();
  const [payment, setPayment] = useState('Cash on Delivery');
  const [placing, setPlacing] = useState(false);

  async function placeOrder() {
    setPlacing(true);
    try {
      // Once the backend is running, replace with:
      // await orderAPI.create({ items, paymentMethod: payment, totalAmount });
      await new Promise((res) => setTimeout(res, 600));
      clearCart();
      navigate('/orders');
    } finally {
      setPlacing(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center gap-3">
          <h1 className="text-xl font-bold text-slate-900">Checkout</h1>
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
            <h2 className="mb-3 text-base font-bold text-slate-900">Delivery Address</h2>
            <div className="flex items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
              <div>
                <p className="text-sm font-semibold text-slate-800">Home</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  123, First Floor, MG Road, Connaught Place, New Delhi - 110001
                </p>
              </div>
              <button className="whitespace-nowrap text-sm font-semibold text-orange-500 transition hover:text-orange-600">
                Change
              </button>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
            <h2 className="mb-3 text-base font-bold text-slate-900">Payment Method</h2>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label
                  key={method}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border p-3 text-sm font-medium transition ${
                    payment === method
                      ? 'border-orange-200 bg-orange-50 text-orange-600'
                      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === method}
                    onChange={() => setPayment(method)}
                    className="h-4 w-4 accent-orange-500"
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
            <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
              <span>Subtotal</span>
              <span className="font-medium text-slate-700">₹{totalAmount}</span>
            </div>
            <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
              <span>Delivery Fee</span>
              <span className="font-medium text-slate-700">₹0</span>
            </div>
            <div className="mb-4 flex items-center justify-between text-sm text-slate-500">
              <span>Discount</span>
              <span className="font-medium text-emerald-600">-₹0</span>
            </div>

            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Total Payable
                </p>
                <p className="mt-1 text-2xl font-black text-slate-900">₹{totalAmount}</p>
              </div>

              <button
                onClick={placeOrder}
                disabled={items.length === 0 || placing}
                className="rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {placing ? 'Placing…' : 'Place Order'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
