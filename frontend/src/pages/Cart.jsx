import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const navigate = useNavigate();
  const { items, updateQty, itemTotal, deliveryFee, packagingFee, totalAmount } = useCart();

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-5 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-xl font-bold text-slate-900">My Cart</h1>
          <button className="text-sm font-semibold text-orange-500">Edit</button>
        </div>

        {items.length === 0 ? (
          <div className="mt-16 rounded-3xl border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
            <div className="mb-4 text-5xl">🛒</div>
            <p className="text-lg font-semibold text-slate-700">Your cart is empty</p>
            <p className="mt-2 text-sm text-slate-500">Add a few delicious items to get started.</p>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-[1.5fr_0.9fr]">
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                  <img src={item.image} alt={item.name} className="h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20" />

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-slate-800 sm:text-base">{item.name}</p>
                    <p className="mt-1 text-sm text-slate-500">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5">
                    <button onClick={() => updateQty(item.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-lg font-bold text-orange-500 shadow-sm">
                      −
                    </button>
                    <span className="min-w-5 text-center text-sm font-semibold text-slate-800">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-lg font-bold text-orange-500 shadow-sm">
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
              <h2 className="mb-4 text-lg font-bold text-slate-900">Bill Details</h2>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between">
                  <span>Item Total</span>
                  <span className="font-medium text-slate-800">₹{itemTotal}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Delivery Fee</span>
                  <span className="font-medium text-slate-800">₹{deliveryFee}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Packaging Fee</span>
                  <span className="font-medium text-slate-800">₹{packagingFee}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 text-base font-bold text-slate-900">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="mt-6 w-full rounded-2xl bg-orange-500 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-orange-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
