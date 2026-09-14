import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const banner =
  "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80";

const pizza =
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80";
const burger =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80";
const biryani =
  "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80";
const dessert =
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80";
const nonVeg =
  "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80";
const more =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";

const pizzaPalace =
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80";
const burgerHouse =
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80";
const biryaniHouse =
  "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=80";
const chineseBowl =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80";

const categories = [
  {
    name: "Pizza",
    image: pizza,
  },
  {
    name: "Burger",
    image: burger,
  },
  {
    name: "Biryani",
    image: biryani,
  },
  {
    name: "Desserts",
    image: dessert,
  },
  {
    name: "Non-Veg",
    image: nonVeg,
  },
  {
    name: "More",
    image: more,
  },
];

const popularDishes = [
  { name: "Margherita Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800", type: "veg" },
  { name: "Cheese Burger", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800", type: "veg" },
  { name: "Chicken Biryani", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800", type: "nonveg" },
  { name: "Paneer Tikka", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800", type: "veg" },
  { name: "Cold Coffee", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800", type: "veg" },
  { name: "French Fries", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800", type: "veg" },
  { name: "Butter Naan", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800", type: "veg" },
  { name: "Veg Roll", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800", type: "veg" },
  { name: "Tandoori Momos", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800", type: "nonveg" },
  { name: "Pasta Alfredo", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800", type: "veg" },
  { name: "Crispy Chicken", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800", type: "nonveg" },
  { name: "Mango Shake", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800", type: "veg" },
  { name: "Veg Sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800", type: "veg" },
  { name: "Spring Rolls", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800", type: "veg" },
  { name: "Donut Box", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800", type: "veg" },
  { name: "Sushi Platter", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800", type: "nonveg" },
  { name: "Noodles Bowl", image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800", type: "veg" },
  { name: "Greek Salad", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800", type: "veg" },
  { name: "Brownie Sundae", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800", type: "veg" },
  { name: "Masala Dosa", image: "https://images.unsplash.com/photo-1661956601030-fdfb9e0a8d22?w=800", type: "veg" },
  { name: "Hot Wings", image: "https://images.unsplash.com/photo-1527477396808-e7214f1d8b0b?w=800", type: "nonveg" },
  { name: "Fruit Bowl", image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800", type: "veg" },
  { name: "Chicken Shawarma", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800", type: "nonveg" },
  { name: "Grilled Sandwich", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800", type: "veg" },
  { name: "Veggie Wrap", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800", type: "veg" },
  { name: "Butter Chicken", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800", type: "nonveg" },
  { name: "Fish Fry", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800", type: "nonveg" },
  { name: "Gulab Jamun", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800", type: "veg" },
  { name: "Chicken Kebab", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800", type: "nonveg" },
  { name: "Mushroom Pasta", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800", type: "veg" },
  { name: "Choco Lava Cake", image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800", type: "veg" },
  { name: "Veg Noodles", image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800", type: "veg" },
  { name: "Chicken Fried Rice", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800", type: "nonveg" },
  { name: "Crispy Calamari", image: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800", type: "nonveg" },
  { name: "Veggie Pizza", image: "https://images.unsplash.com/photo-1548365328-9f547fb0953b?w=800", type: "veg" },
  { name: "Oreo Shake", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800", type: "veg" },
  { name: "Chicken Caesar Salad", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800", type: "nonveg" },
  { name: "Loaded Fries", image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800", type: "veg" },
  { name: "Falafel Bowl", image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=800", type: "veg" },
  { name: "Mini Pancakes", image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800", type: "veg" },
  { name: "Corn Soup", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800", type: "veg" },
  { name: "Spicy Tacos", image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=800", type: "nonveg" },
  { name: "Coconut Water", image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800", type: "veg" },
  { name: "Blueberry Cheesecake", image: "https://images.unsplash.com/photo-1533134242443-d6adb0891991?w=800", type: "veg" },
  { name: "Chicken Pesto Pasta", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800", type: "nonveg" },
  { name: "Lassi", image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800", type: "veg" },
  { name: "Hakka Noodles", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800", type: "veg" },
  { name: "Onion Rings", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800", type: "veg" },
];

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    image: pizzaPalace,
    cuisine: "Pizza, Italian",
    rating: "4.5",
    time: "25-30 min",
  },
  {
    id: 2,
    name: "Burger House",
    image: burgerHouse,
    cuisine: "Burger, Fast Food",
    rating: "4.4",
    time: "20-25 min",
  },
  {
    id: 3,
    name: "Biryani House",
    image: biryaniHouse,
    cuisine: "Biryani, Indian",
    rating: "4.6",
    time: "30-35 min",
  },
  {
    id: 4,
    name: "Chinese Bowl",
    image: chineseBowl,
    cuisine: "Chinese, Asian",
    rating: "4.3",
    time: "25-30 min",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const uniqueRestaurants = Array.from(
    new Map(restaurants.map((restaurant) => [restaurant.name, restaurant])).values()
  );

  const handleSearch = (e) => {
    e.preventDefault();

    const trimmed = searchTerm.trim();
    const target = trimmed ? `/restaurants?search=${encodeURIComponent(trimmed)}` : "/restaurants";
    navigate(target);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-linear-to-br from-orange-50 via-white to-amber-50">
        <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-orange-200/60 blur-3xl" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-amber-200/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
          <div className="z-10">
            <div className="mb-5 flex flex-wrap gap-3 text-xs font-medium sm:text-sm">
              <span className="rounded-full border border-orange-200 bg-white px-3 py-1.5 text-orange-600 shadow-sm">
                ⚡ 20 min delivery
              </span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700 shadow-sm">
                ⭐ 4.8 rating
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Craving something
              <span className="mt-2 block bg-linear-to-r from-orange-500 via-red-500 to-amber-500 bg-clip-text text-transparent">
                delicious?
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Explore handpicked restaurants, fast delivery, and fresh meals made for your cravings.
            </p>

            <form
              onSubmit={handleSearch}
              className="mt-7 flex max-w-xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg shadow-orange-100/40 ring-1 ring-white/80 sm:flex-row sm:gap-0 sm:overflow-hidden sm:p-0"
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search food or restaurants..."
                className="w-full bg-transparent px-4 py-3.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-xl bg-linear-to-r from-orange-500 to-amber-500 px-5 py-3.5 font-semibold text-white transition hover:brightness-105 sm:w-auto sm:rounded-none sm:py-3.5"
              >
                Search
              </button>
            </form>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/restaurants"
                className="inline-flex items-center justify-center rounded-2xl bg-linear-to-r from-orange-500 to-amber-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Order Now 🍕
              </Link>

              <Link
                to="/restaurants"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-white px-6 py-3.5 text-sm font-semibold text-orange-600 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-orange-50 hover:border-orange-300"
              >
                <span>View Menu</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Restaurants", value: "120+" },
                { label: "Orders/day", value: "2.5k" },
                { label: "Happy users", value: "18k" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm backdrop-blur-sm">
                  <p className="text-xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -left-4 top-8 h-32 w-32 rounded-full bg-orange-300/60 blur-2xl" />
              <div className="absolute -right-4 bottom-8 h-28 w-28 rounded-full bg-yellow-200/70 blur-2xl" />

              <div className="floaty relative overflow-hidden rounded-4xl border border-white/80 bg-white p-3 shadow-[0_30px_80px_rgba(251,146,60,0.16)]">
                <img
                  src={banner}
                  alt="Food Delivery"
                  className="h-105 w-full rounded-3xl object-cover"
                />

                <div className="absolute left-8 top-8 rounded-2xl bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Live</p>
                  <p className="font-semibold text-slate-900">Delivery in 20 min</p>
                </div>

                <div className="absolute bottom-8 right-8 rounded-2xl bg-white/95 px-4 py-3 shadow-xl">
                  <p className="text-xs text-slate-500">Free delivery</p>
                  <p className="text-lg font-black text-orange-500">Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">Popular</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Explore by taste
            </h2>
          </div>

          <Link
            to="/restaurants"
            className="text-sm font-semibold text-orange-500 transition hover:text-orange-600"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map((category) => (
            <Link
              to="/restaurants"
              key={category.name}
              className="group rounded-[1.6rem] border border-slate-100 bg-white p-4 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-4 ring-orange-50 transition group-hover:ring-orange-100 sm:h-28 sm:w-28">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold text-slate-800 group-hover:text-orange-500">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">Dish picks</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Popular dishes</h2>
          </div>
          <Link to="/restaurants" className="text-sm font-semibold text-orange-500 transition hover:text-orange-600">
            Explore menu →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {popularDishes.map((dish, index) => (
            <div
              key={dish.name}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white p-2.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="h-28 w-full object-cover transition duration-300 group-hover:scale-110 sm:h-32"
                />
                <span
                  className={`absolute right-2 top-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wide ${
                    dish.type === "veg"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span aria-hidden="true">{dish.type === "veg" ? "🟢" : "🔴"}</span>
                  {dish.type === "veg" ? "Veg" : "Non-Veg"}
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 px-1">
                <p className="text-sm font-semibold text-slate-800 group-hover:text-orange-500">
                  {dish.name}
                </p>
                <span className="rounded-full bg-orange-50 px-2 py-1 text-[10px] font-bold text-orange-600">
                  ₹{(index + 2) * 79}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 md:px-8">
        <div className="rounded-4xl bg-linear-to-r from-orange-500 via-orange-600 to-amber-500 p-6 text-white shadow-xl shadow-orange-200/60 sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">Special Offer</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">50% OFF</h2>
              <p className="mt-2 text-orange-100">On your first tasty order this week</p>
            </div>

            <Link
              to="/restaurants"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-bold text-orange-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50"
            >
              Claim Deal →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-8">
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">Top picks</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">Popular Restaurants</h2>
          </div>

          <Link to="/restaurants" className="text-sm font-semibold text-orange-500 transition hover:text-orange-600">
            See All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {uniqueRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurant/${restaurant.id}`}
              className="group overflow-hidden rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white px-2.5 py-1 text-xs font-bold text-emerald-600 shadow-md">
                  ⭐ {restaurant.rating}
                </span>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-orange-500">
                  {restaurant.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">{restaurant.cuisine}</p>

                <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
                  <span>⏱️ {restaurant.time}</span>
                  <span className="font-semibold text-emerald-600">Free Delivery</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Why us</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Why Choose Foodie?</h2>
            <p className="mt-2 text-slate-500">Everything you need for a better food delivery experience</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🚴",
                title: "Fast Delivery",
                text: "Quick doorstep service from your favorite local kitchens.",
              },
              {
                icon: "🍽️",
                title: "Curated Restaurants",
                text: "Handpicked spots serving everything from comfort classics to gourmet meals.",
              },
              {
                icon: "💳",
                title: "Easy Payments",
                text: "Pay with UPI, card, wallet, or cash on delivery in seconds.",
              },
            ].map((feature) => (
              <div key={feature.title} className="rounded-[1.75rem] border border-slate-100 bg-linear-to-b from-slate-50 to-white p-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 px-4 py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-xl font-black text-orange-400">🍔 Foodie</h2>
            <p className="mt-1 text-sm text-slate-400">Fresh food, fast delivery, happy taste buds.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-slate-300">
            <Link to="/" className="transition hover:text-white">Home</Link>
            <Link to="/restaurants" className="transition hover:text-white">Restaurants</Link>
            <Link to="/orders" className="transition hover:text-white">Orders</Link>
            <Link to="/profile" className="transition hover:text-white">Profile</Link>
          </div>
        </div>

        <div className="mx-auto mt-6 max-w-7xl border-t border-slate-800 pt-5 text-center text-xs text-slate-500">
          © 2026 Foodie. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;



// import { useNavigate } from 'react-router-dom';
// import { restaurants, categories } from '../data/mockData';
// import RestaurantCard from '../components/RestaurantCard';

// const categoryIcons = { Pizza: '🍕', Burger: '🍔', Biryani: '🍛', Dessert: '🍨', More: '⋯' };

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//     <div className="px-4 pt-4">
//       <div className="flex items-center justify-between mb-4">
//         <div>
//           <p className="text-xs text-gray-400">Deliver to</p>
//           <p className="font-semibold text-gray-900">Connaught Place, New Delhi ▾</p>
//         </div>
//         <span className="text-xl">🔔</span>
//       </div>

//       <button
//         onClick={() => navigate('/restaurants')}
//         className="w-full flex items-center gap-2 bg-gray-100 rounded-xl px-4 py-3 text-gray-400 mb-4"
//       >
//         🔍 Search for restaurant or food
//       </button>

//       <div className="bg-brand-500 rounded-2xl p-5 text-white mb-5 flex items-center justify-between">
//         <div>
//           <p className="text-2xl font-extrabold">50% OFF</p>
//           <p className="text-sm opacity-90">On your first order</p>
//         </div>
//         <button
//           onClick={() => navigate('/restaurants')}
//           className="bg-white text-brand-600 text-sm font-semibold px-4 py-2 rounded-lg"
//         >
//           Order Now
//         </button>
//       </div>

//       <div className="flex items-center justify-between mb-3">
//         <h2 className="font-semibold text-gray-900">Categories</h2>
//         <button className="text-sm text-brand-500" onClick={() => navigate('/restaurants')}>See all</button>
//       </div>
//       <div className="flex justify-between mb-6">
//         {categories.map((cat) => (
//           <button key={cat} onClick={() => navigate('/restaurants')} className="flex flex-col items-center gap-1">
//             <div className="w-14 h-14 rounded-full bg-brand-50 flex items-center justify-center text-2xl">
//               {categoryIcons[cat]}
//             </div>
//             <span className="text-xs text-gray-600">{cat}</span>
//           </button>
//         ))}
//       </div>

//       <div className="flex items-center justify-between mb-2">
//         <h2 className="font-semibold text-gray-900">Popular Restaurants</h2>
//         <button className="text-sm text-brand-500" onClick={() => navigate('/restaurants')}>See all</button>
//       </div>
//       <div>
//         {restaurants.slice(0, 2).map((r) => (
//           <RestaurantCard key={r.id} restaurant={r} />
//         ))}
//       </div>
//     </div>
//   );
// }
