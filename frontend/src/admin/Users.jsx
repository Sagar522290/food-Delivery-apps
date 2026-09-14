import React, { useState } from "react";
import {
  Search,
  Trash2,
  Eye,
} from "lucide-react";

const Users = () => {
  const [search, setSearch] = useState("");

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      phone: "+91 98765 43210",
      orders: 24,
      status: "Active",
    },
    {
      id: 2,
      name: "Amit Singh",
      email: "amit@gmail.com",
      phone: "+91 98765 12345",
      orders: 18,
      status: "Active",
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya@gmail.com",
      phone: "+91 98765 67890",
      orders: 31,
      status: "Active",
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha@gmail.com",
      phone: "+91 98765 11111",
      orders: 5,
      status: "Blocked",
    },
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-gray-500">
          Manage registered users
        </p>
      </div>

      <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search users..."
            className="w-full rounded-xl border border-gray-200 py-3 pl-12 pr-4 outline-none focus:border-orange-500"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead>
              <tr className="border-b bg-gray-50 text-sm text-gray-500">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Orders</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b last:border-0"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold">
                          {user.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {user.phone}
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    {user.orders}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Eye size={17} />
                      </button>

                      <button
                        onClick={() => deleteUser(user.id)}
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

export default Users;