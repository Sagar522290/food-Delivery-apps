import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Search,
  ShoppingBag,
  User,
  ShoppingCart,
  Menu,
  X,
  MapPin,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const { cart } = useCart();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Search", path: "/restaurants", icon: Search },
    { name: "Orders", path: "/orders", icon: ShoppingBag },
    { name: "Profile", path: "/profile", icon: User },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <img
            src={logo}
            alt="BiteBite logo"
            className="h-12 w-12 shrink-0 rounded-2xl object-contain shadow-sm ring-2 ring-orange-100 sm:h-14 sm:w-14"
          />

          <div className="min-w-0 leading-tight">
            <h1 className="truncate text-lg font-black tracking-tight text-slate-900 sm:text-xl">BiteBite</h1>
            <p className="hidden text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400 sm:block">
              Fresh bites
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <button className="flex items-center gap-3 rounded-full border border-orange-200 bg-linear-to-r from-orange-50 to-amber-50 px-3 py-2 text-left shadow-sm transition hover:border-orange-300 hover:shadow-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white shadow-sm">
              <MapPin size={15} />
            </div>
            <div className="leading-tight">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Deliver to
              </p>
              <p className="text-sm font-bold text-slate-800">Connaught Place, New Delhi</p>
            </div>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
              Open
            </span>
          </button>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-orange-50 text-orange-600 shadow-sm ring-1 ring-orange-100"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon size={17} />
                {item.name}
              </Link>
            );
          })}

          <Link
            to="/cart"
            className="relative ml-1 rounded-xl p-2.5 text-slate-600 transition hover:bg-orange-50 hover:text-orange-500"
            aria-label="View cart"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Link to="/cart" className="relative rounded-xl p-2 text-slate-700" aria-label="View cart">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-slate-700 transition hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl space-y-3 px-3 py-4 sm:px-4">
            <div className="flex items-center justify-between gap-3 rounded-2xl border border-orange-200 bg-linear-to-r from-orange-50 to-amber-50 p-3 text-slate-700">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Deliver to
                  </p>
                  <p className="text-sm font-bold text-slate-800">Connaught Place, New Delhi</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                Open
              </span>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = location.pathname === item.path;

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenu(false)}
                    className={`flex items-center gap-3 rounded-xl p-3 text-sm font-medium transition ${
                      active
                        ? "bg-orange-50 text-orange-600"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Icon size={18} />
                    {item.name}
                  </Link>
                );
              })}

              <Link
                to="/cart"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 rounded-xl p-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              >
                <ShoppingCart size={18} />
                Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;