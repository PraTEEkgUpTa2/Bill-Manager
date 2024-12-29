import React from "react";
import { useSelector } from "react-redux";

const FilterDropdown = ({ selectedCategory, setSelectedCategory }) => {
  const categories = Array.from(
    new Set(
      useSelector((state) => state.bills.bills.map((bill) => bill.category))
    )
  );

  const handleChange = (e) => setSelectedCategory(e.target.value);

  return (
    <div className="my-4">
      <label htmlFor="categoryFilter" className="text-sm font-medium">
        Filter by Category:
      </label>
      <select
        id="categoryFilter"
        className="block w-full mt-2 p-2 bg-gray-700 rounded"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
