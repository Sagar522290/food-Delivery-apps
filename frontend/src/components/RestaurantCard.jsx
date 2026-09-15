import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, ArrowRight } from "lucide-react";

const RestaurantCard = ({ restaurant }) => {
  const {
    _id,
    id,
    name,
    image,
    cuisine,
    rating = 4.5,
    time = "30-40 min",
    deliveryTime = "30-40 min",
    freeDelivery = true,
  } = restaurant;

  const restaurantId = _id || id;

  return (
    <Link
      to={`/restaurant/${restaurantId}`}
      className="group block overflow-hidden rounded-4xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-52 overflow-hidden sm:h-56">
        <img
          src={image || "https://images.unsplash.com/photo-1513104890138-7c749659a591"}
          alt={name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 via-transparent to-transparent" />

        {freeDelivery && (
          <span className="absolute bottom-3 left-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-600 shadow-md">
            Free Delivery
          </span>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-black text-slate-900 transition group-hover:text-orange-500">
              {name}
            </h3>
            <p className="mt-1 line-clamp-1 text-sm text-slate-500">{cuisine}</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
            <ArrowRight size={18} />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-sm font-bold text-amber-600">
              <Star size={13} fill="currentColor" className="text-amber-500" />
              {rating}
            </span>

            <span className="flex items-center gap-1 text-sm text-slate-500">
              <Clock size={14} />
              {time || deliveryTime}
            </span>
          </div>

          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600">
            Starts ₹199
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;