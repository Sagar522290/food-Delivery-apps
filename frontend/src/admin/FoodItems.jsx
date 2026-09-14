import React, { useState } from "react";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
} from "lucide-react";

const FoodItems = () => {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [newFood, setNewFood] = useState({
    name: "",
    restaurant: "Pizza Palace",
    category: "Pizza",
    price: "",
    status: "Available",
  });

  const [foods, setFoods] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      restaurant: "Pizza Palace",
      category: "Pizza",
      price: 199,
      status: "Available",
    },
    {
      id: 2,
      name: "Farmhouse Pizza",
      restaurant: "Pizza Palace",
      category: "Pizza",
      price: 249,
      status: "Available",
    },
    {
      id: 3,
      name: "Peppy Paneer Pizza",
      restaurant: "Pizza Palace",
      category: "Pizza",
      price: 269,
      status: "Available",
    },
    {
      id: 4,
      name: "Chicken Tikka Pizza",
      restaurant: "Pizza Palace",
      category: "Pizza",
      price: 299,
      status: "Unavailable",
    },
    {
      id: 5,
      name: "Classic Burger",
      restaurant: "Burger House",
      category: "Burger",
      price: 149,
      status: "Available",
    },
  ]);

  const deleteFood = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  const handleAddFood = (e) => {
    e.preventDefault();

    if (!newFood.name.trim()) return;

    const foodToAdd = {
      id: Date.now(),
      name: newFood.name.trim(),
      restaurant: newFood.restaurant,
      category: newFood.category,
      price: Number(newFood.price) || 0,
      status: newFood.status,
    };

    setFoods((prevFoods) => [foodToAdd, ...prevFoods]);
    setNewFood({
      name: "",
      restaurant: "Pizza Palace",
      category: "Pizza",
      price: "",
      status: "Available",
    });
    setShowForm(false);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-500">
              Menu Management
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900">Food Items</h1>
            <p className="mt-1 text-sm text-slate-500">Manage restaurant food items</p>
          </div>

          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-2.5 font-semibold text-white transition hover:bg-orange-600"
          >
            <Plus size={18} />
            Add Food
          </button>
        </div>

        {showForm && (
          <form
            onSubmit={handleAddFood}
            className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              <input
                type="text"
                value={newFood.name}
                onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                placeholder="Food name"
                className="rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-400"
              />

              <input
                type="text"
                value={newFood.restaurant}
                onChange={(e) => setNewFood({ ...newFood, restaurant: e.target.value })}
                placeholder="Restaurant"
                className="rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-400"
              />

              <input
                type="text"
                value={newFood.category}
                onChange={(e) => setNewFood({ ...newFood, category: e.target.value })}
                placeholder="Category"
                className="rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-400"
              />

              <input
                type="number"
                value={newFood.price}
                onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
                placeholder="Price"
                min="0"
                className="rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-400"
              />

              <select
                value={newFood.status}
                onChange={(e) => setNewFood({ ...newFood, status: e.target.value })}
                className="rounded-xl border border-slate-200 px-3 py-2.5 outline-none focus:border-orange-400"
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-slate-200 px-4 py-2 font-medium text-slate-600"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600"
              >
                Save Food
              </button>
            </div>
          </form>
        )}

        <div className="mb-5 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-200">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food items..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-3 text-sm outline-none focus:border-orange-400"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-sm text-slate-600">
                  <th className="px-4 py-3 font-semibold">Food</th>
                  <th className="px-4 py-3 font-semibold">Restaurant</th>
                  <th className="px-4 py-3 font-semibold">Category</th>
                  <th className="px-4 py-3 font-semibold">Price</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredFoods.map((food) => (
                  <tr key={food.id} className="border-t border-slate-200 hover:bg-slate-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-lg">
                          🍕
                        </div>
                        <span className="font-medium text-slate-800">{food.name}</span>
                      </div>
                    </td>

                    <td className="px-4 py-3 text-slate-600">{food.restaurant}</td>

                    <td className="px-4 py-3">
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                        {food.category}
                      </span>
                    </td>

                    <td className="px-4 py-3 font-semibold text-slate-800">₹{food.price}</td>

                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          food.status === "Available"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {food.status}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button className="rounded-lg bg-orange-50 p-2 text-orange-600 hover:bg-orange-500 hover:text-white">
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => deleteFood(food.id)}
                          className="rounded-lg bg-red-50 p-2 text-red-600 hover:bg-red-500 hover:text-white"
                        >
                          <Trash2 size={15} />
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
    </div>
  );
};

export default FoodItems;