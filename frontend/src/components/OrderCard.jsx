import React from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const OrderCard = ({ order }) => {
  const statusColor = {
    Preparing:
      "bg-orange-100 text-orange-600",
    "Out for Delivery":
      "bg-blue-100 text-blue-600",
    Delivered:
      "bg-green-100 text-green-600",
    Cancelled:
      "bg-red-100 text-red-600",
  };

  const statusClass =
    statusColor[order.status] ||
    "bg-gray-100 text-gray-600";

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Order ID
          </p>

          <h3 className="mt-1 font-bold">
            {order.orderId ||
              order.id ||
              "#ORD12345"}
          </h3>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClass}`}
        >
          {order.status}
        </span>
      </div>

      {/* Date */}
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <Clock size={16} />

        {order.date || "02 May 2024 | 07:30 PM"}
      </div>

      {/* Items */}
      <div className="mt-4 space-y-2 border-y py-4">
        {order.items?.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-sm"
          >
            <span className="text-gray-600">
              {item.quantity} × {item.name}
            </span>

            <span className="font-medium">
              ₹{item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-4 flex items-center justify-between">
        <span className="font-semibold">
          Total
        </span>

        <span className="text-lg font-bold">
          ₹{order.total || 378}
        </span>
      </div>

      {/* Track */}
      {order.status !== "Delivered" &&
        order.status !== "Cancelled" && (
          <Link
            to={`/order/${
              order._id || order.id || "ORD12345"
            }`}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-orange-500 py-3 text-sm font-semibold text-orange-500 hover:bg-orange-50"
          >
            Track Order
            <ChevronRight size={17} />
          </Link>
        )}

      {order.status === "Delivered" && (
        <div className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-50 py-3 text-sm font-semibold text-green-600">
          <CheckCircle size={17} />
          Delivered Successfully
        </div>
      )}
    </div>
  );
};

export default OrderCard;