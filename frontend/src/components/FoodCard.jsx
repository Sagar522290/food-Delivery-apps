import React from "react";
import { Plus, Star } from "lucide-react";
import { useCart } from "../context/CartContext";

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  const {
    _id,
    id,
    name,
    image,
    description,
    price,
    rating = 4.5,
  } = food;

  const foodId = _id || id;

  const handleAdd = () => {
    addToCart({
      ...food,
      id: foodId,
      quantity: 1,
    });
  };

  return (
    <div className="flex gap-4 border-b border-gray-100 py-5 last:border-0">
      {/* Image */}
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-xl">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
          }
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-bold text-gray-900">
              {name}
            </h3>

            <div className="mt-1 flex items-center gap-1 text-xs text-amber-600">
              <Star
                size={14}
                fill="currentColor"
                className="text-amber-500"
              />
              <span>{rating}</span>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="flex shrink-0 items-center gap-1 rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-600 active:scale-95"
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        <p className="mt-2 line-clamp-2 text-sm text-gray-500">
          {description}
        </p>

        <p className="mt-2 font-bold text-gray-900">
          ₹{price}
        </p>
      </div>
    </div>
  );
};

export default FoodCard;