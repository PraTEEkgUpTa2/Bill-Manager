import React from "react";
import { useSelector } from "react-redux";
import './styles/FilterDropdown.css'

const FilterDropdown = ({ selectedCategory, setSelectedCategory }) => {
  const categories = Array.from(
    new Set(useSelector((state) => state.bills.bills.map((bill) => bill.category)))
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className="filter-dropdown">
      <label htmlFor="categoryFilter" className="label">
        Filter by Category:
      </label>
      <select
        id="categoryFilter"
        className="dropdown"
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
