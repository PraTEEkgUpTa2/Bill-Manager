import React from "react";
import { useSelector } from "react-redux";

const FilterDropdown = ({ selectedCategory, setSelectedCategory }) => {
  const categories = Array.from(
    new Set(useSelector((state) => state.bills.bills.map((bill) => bill.category)))
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="my-4">
      <label htmlFor="categoryFilter" className="mr-2">
        Filter by Category:
      </label>
      <select
        id="categoryFilter"
        className="p-2 border rounded"
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
