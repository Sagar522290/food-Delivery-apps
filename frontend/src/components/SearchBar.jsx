import React from "react";
import {
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";

const SearchBar = ({
  value,
  onChange,
  placeholder = "Search restaurants or food...",
  onFilter,
}) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-orange-100 bg-orange-50 shadow-sm">
        <img src={logo} alt="Food delivery logo" className="h-full w-full object-cover" />
      </div>

      {/* Search */}
      <div className="relative flex-1">
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-10 text-sm outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
        />

        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-400 hover:bg-gray-100"
          >
            <X size={17} />
          </button>
        )}
      </div>

      {/* Filter */}
      {onFilter && (
        <button
          onClick={onFilter}
          className="flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-600 transition hover:border-orange-500 hover:text-orange-500 sm:w-auto sm:py-0"
        >
          <SlidersHorizontal size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;