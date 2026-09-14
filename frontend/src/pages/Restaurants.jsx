import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { restaurants } from '../data/mockData';
import RestaurantCard from '../components/RestaurantCard';

export default function RestaurantList() {
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState(() => {
    const params = new URLSearchParams(location.search);
    return params.get('search') || '';
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setQuery(params.get('search') || '');
  }, [location.search]);

  const uniqueRestaurants = Array.from(
    new Map(restaurants.map((restaurant) => [restaurant.name, restaurant])).values()
  );

  const filtered = uniqueRestaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(query.toLowerCase()) ||
      r.cuisine.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 px-4 pb-24 pt-5 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-orange-500">Explore</p>
          <h1 className="text-2xl font-black text-slate-900">Restaurants</h1>
        </div>

        <div className="mb-6 overflow-hidden rounded-4xl bg-linear-to-r from-orange-500 via-orange-500 to-amber-400 p-4 text-white shadow-lg shadow-orange-200/60">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-100">Deliver to</p>
              <p className="mt-1 text-base font-bold">Downtown, Bengaluru</p>
            </div>
            <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              Open
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3 backdrop-blur-sm">
            <span className="text-lg">🔍</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search restaurants or cuisine"
              className="w-full bg-transparent text-sm text-white placeholder:text-orange-100 outline-none"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Popular</p>
            <h2 className="text-lg font-bold text-slate-900">Best picks near you</h2>
          </div>
          <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-600">
            {filtered.length} found
          </span>
        </div>

        <div className="space-y-4">
          {filtered.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}

          {filtered.length === 0 && (
            <div className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-2xl">
                😕
              </div>
              <p className="text-lg font-semibold text-slate-800">No results found</p>
              <p className="mt-1 text-sm text-slate-500">No restaurants match “{query}”</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
