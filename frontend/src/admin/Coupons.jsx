import React, { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Ticket,
} from "lucide-react";

const Coupons = () => {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      code: "WELCOME50",
      discount: "50%",
      minOrder: "₹299",
      expiry: "30 Jun 2026",
      status: "Active",
    },
    {
      id: 2,
      code: "FOOD20",
      discount: "20%",
      minOrder: "₹499",
      expiry: "15 Jul 2026",
      status: "Active",
    },
    {
      id: 3,
      code: "SAVE100",
      discount: "₹100",
      minOrder: "₹599",
      expiry: "10 Apr 2026",
      status: "Expired",
    },
  ]);

  const deleteCoupon = (id) => {
    setCoupons(
      coupons.filter((coupon) => coupon.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Coupons</h1>
          <p className="text-gray-500">
            Manage discount coupons
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white">
          <Plus size={20} />
          Add Coupon
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Ticket size={24} />
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  coupon.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {coupon.status}
              </span>
            </div>

            <h2 className="mt-5 text-xl font-bold">
              {coupon.code}
            </h2>

            <p className="mt-2 text-2xl font-bold text-orange-500">
              {coupon.discount} OFF
            </p>

            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <p>
                Minimum Order:{" "}
                <span className="font-semibold text-gray-800">
                  {coupon.minOrder}
                </span>
              </p>

              <p>
                Expiry:{" "}
                <span className="font-semibold text-gray-800">
                  {coupon.expiry}
                </span>
              </p>
            </div>

            <div className="mt-5 flex gap-2">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-50 py-2 text-sm font-semibold text-orange-600">
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() => deleteCoupon(coupon.id)}
                className="rounded-xl bg-red-50 px-4 py-2 text-red-600"
              >
                <Trash2 size={17} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;