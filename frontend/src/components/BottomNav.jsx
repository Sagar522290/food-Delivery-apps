import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Search,
  ShoppingBag,
  ShoppingCart,
  User,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const BottomNav = () => {
  const { count } = useCart();

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: Home,
    },
    {
      name: "Search",
      path: "/restaurants",
      icon: Search,
    },
    {
      name: "Orders",
      path: "/orders",
      icon: ShoppingBag,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: ShoppingCart,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: User,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:hidden">
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative flex h-full min-w-[55px] flex-col items-center justify-center gap-1 text-xs font-medium transition ${
                  isActive
                    ? "text-orange-500"
                    : "text-gray-400 hover:text-orange-500"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`relative rounded-xl p-1 ${
                      isActive
                        ? "bg-orange-50"
                        : ""
                    }`}
                  >
                    <Icon
                      size={21}
                      strokeWidth={
                        isActive ? 2.5 : 2
                      }
                    />

                    {/* Cart Badge */}
                    {item.name === "Cart" &&
                      count > 0 && (
                        <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-orange-500 px-1 text-[10px] font-bold text-white">
                          {count}
                        </span>
                      )}
                  </div>

                  <span>{item.name}</span>

                  {/* Active Indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 h-1 w-8 rounded-t-full bg-orange-500" />
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;