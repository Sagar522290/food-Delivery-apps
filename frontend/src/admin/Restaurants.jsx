import React, { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

const Restaurants = () => {
  const [search, setSearch] = useState("");

  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Pizza Palace",
      cuisine: "Italian, Pizza, Fast Food",
      rating: 4.5,
      delivery: "30-40 min",
      status: "Active",
    },
    {
      id: 2,
      name: "Burger House",
      cuisine: "Burger, Fast Food",
      rating: 4.3,
      delivery: "20-30 min",
      status: "Active",
    },
    {
      id: 3,
      name: "Biryani House",
      cuisine: "Biryani, North Indian",
      rating: 4.4,
      delivery: "30-40 min",
      status: "Active",
    },
    {
      id: 4,
      name: "The Chinese Bowl",
      cuisine: "Chinese, Asian",
      rating: 4.2,
      delivery: "25-35 min",
      status: "Inactive",
    },
  ]);

  const deleteRestaurant = (id) => {
    setRestaurants(
      restaurants.filter((restaurant) => restaurant.id !== id)
    );
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold">Restaurants</h1>
          <p className="text-gray-500">
            Manage all restaurants
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">
          <Plus size={20} />
          Add Restaurant
        </button>
      </div>

      {/* Search */}
      <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
        <div className="relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-200 text-left">
            <thead>
              <tr className="border-b bg-gray-50 text-sm text-gray-500">
                <th className="px-6 py-4">Restaurant</th>
                <th className="px-6 py-4">Cuisine</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4">Delivery</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredRestaurants.map((restaurant) => (
                <tr
                  key={restaurant.id}
                  className="border-b last:border-0 hover:bg-gray-50"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                        🍕
                      </div>

                      <div>
                        <p className="font-semibold">
                          {restaurant.name}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {restaurant.cuisine}
                  </td>

                  <td className="px-6 py-4">
                    ⭐ {restaurant.rating}
                  </td>

                  <td className="px-6 py-4">
                    {restaurant.delivery}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        restaurant.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {restaurant.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Eye size={17} />
                      </button>

                      <button className="rounded-lg bg-orange-50 p-2 text-orange-600">
                        <Pencil size={17} />
                      </button>

                      <button
                        onClick={() =>
                          deleteRestaurant(restaurant.id)
                        }
                        className="rounded-lg bg-red-50 p-2 text-red-600"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;