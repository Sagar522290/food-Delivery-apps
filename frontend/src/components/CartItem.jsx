import React from "react";
import {
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { useCart } from "../context/CartContext";

const CartItem = ({ item }) => {
  const {
    increase,
    decrease,
    removeFromCart,
  } = useCart();

  return (
    <div className="flex gap-4 border-b border-gray-100 py-5 last:border-0">
      {/* Image */}
      <img
        src={
          item.image ||
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
        }
        alt={item.name}
        className="h-20 w-20 rounded-xl object-cover"
      />

      {/* Details */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate font-bold">
          {item.name}
        </h3>

        <p className="mt-1 font-semibold text-gray-800">
          ₹{item.price}
        </p>

        <div className="mt-3 flex items-center justify-between">
          {/* Quantity */}
          <div className="flex items-center overflow-hidden rounded-lg border border-orange-200">
            <button
              onClick={() => decrease(item.id)}
              className="p-2 text-orange-500 hover:bg-orange-50"
            >
              <Minus size={15} />
            </button>

            <span className="min-w-8 text-center text-sm font-bold">
              {item.quantity}
            </span>

            <button
              onClick={() => increase(item.id)}
              className="p-2 text-orange-500 hover:bg-orange-50"
            >
              <Plus size={15} />
            </button>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="rounded-lg p-2 text-red-500 hover:bg-red-50"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;