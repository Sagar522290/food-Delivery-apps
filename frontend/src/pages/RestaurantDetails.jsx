import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { restaurants } from '../data/mockData';
import { useCart } from '../context/CartContext';

const tabs = ['Menu', 'Reviews', 'Info'];

export default function RestaurantDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = restaurants.find((r) => r.id === id);
  const [activeTab, setActiveTab] = useState('Menu');
  const [activeCategory, setActiveCategory] = useState('');
  const { items, totalAmount, addToCart } = useCart();

  if (!restaurant) return <p className="p-4">Restaurant not found.</p>;

  const categories = [...new Set(restaurant.menu.map((m) => m.category))];
  const visibleItems = restaurant.menu.filter((m) => m.category === activeCategory);

  useEffect(() => {
    if (categories.length > 0) {
      setActiveCategory((current) => {
        if (current && categories.includes(current)) return current;
        return categories[0];
      });
    } else {
      setActiveCategory('');
    }
  }, [categories]);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="relative h-64 sm:h-72">
        <img src={restaurant.banner || restaurant.image} alt={restaurant.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/15 to-transparent" />

        <div className="absolute right-4 top-4 flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg shadow-md backdrop-blur-sm transition hover:bg-white">
            ♡
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-lg shadow-md backdrop-blur-sm transition hover:bg-white">
            ↗
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pt-5 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-slate-900">{restaurant.name}</h1>
              <p className="mt-1 text-sm text-slate-500">{restaurant.cuisine}</p>
            </div>

            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
              ★ {restaurant.rating}
            </span>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium">{restaurant.time}</span>
            {restaurant.freeDelivery && (
              <span className="rounded-full bg-orange-50 px-2.5 py-1 font-medium text-orange-600">
                Free Delivery
              </span>
            )}
          </div>
        </div>

        <div className="mt-5 rounded-3xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
          <div className="flex gap-2 border-b border-slate-100 pb-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`flex-1 rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                  activeTab === t
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {activeTab === 'Menu' && (
            <>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveCategory(c)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeCategory === c
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                {visibleItems.map((item) => (
                  <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-3 sm:p-4">
                    <div className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="h-20 w-20 rounded-2xl object-cover sm:h-24 sm:w-24" />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate text-base font-bold text-slate-900">{item.name}</h3>
                            <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
                          </div>

                          <button
                            onClick={() => addToCart({ ...item, id: item.id, quantity: 1 })}
                            className="rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-3 py-2 text-sm font-bold text-white shadow-sm transition hover:brightness-105"
                          >
                            Add
                          </button>
                        </div>

                        <p className="mt-2 text-base font-black text-slate-900">₹{item.price}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {visibleItems.length === 0 && (
                  <p className="py-8 text-center text-sm text-slate-400">No items in this category yet.</p>
                )}
              </div>
            </>
          )}

          {activeTab === 'Reviews' && (
            <p className="py-8 text-center text-sm text-slate-400">No reviews yet.</p>
          )}

          {activeTab === 'Info' && (
            <div className="space-y-3 py-6 text-sm text-slate-600">
              <p>
                {restaurant.name} serves {restaurant.cuisine}. Experience delicious meals made fresh and delivered fast.
              </p>
              <div className="rounded-2xl bg-slate-50 p-3">
                <p className="font-semibold text-slate-800">Delivery info</p>
                <p className="mt-1">Estimated time: {restaurant.time}</p>
                {restaurant.freeDelivery && <p className="mt-1 text-orange-600">Free delivery available</p>}
              </div>
            </div>
          )}
        </div>
      </div>

      {items.length > 0 && (
        <button
          onClick={() => navigate('/cart')}
          className="fixed bottom-4 left-4 right-4 mx-auto flex max-w-110 items-center justify-between rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 px-5 py-3.5 text-white shadow-xl shadow-orange-200/60"
        >
          <span className="text-sm font-semibold">
            {items.reduce((s, i) => s + Number(i.qty ?? i.quantity ?? 0), 0)} items · ₹{totalAmount}
          </span>
          <span className="text-sm font-bold">View Cart →</span>
        </button>
      )}
    </div>
  );
}
