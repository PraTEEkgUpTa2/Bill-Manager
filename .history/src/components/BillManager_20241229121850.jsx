import React, { useState } from "react";
import { useSelector } from "react-redux";
import FilterDropdown from "./FilterDropdown";
import BillTable from "./BillTable";
import './styles/BillManager'

const BillManager = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const bills = useSelector((state) => state.bills.bills);

  // Filter bills based on selected category
  const filteredBills = selectedCategory
    ? bills.filter((bill) => bill.category === selectedCategory)
    : bills;

  return (
    <div className="bill-manager">
      <h2 className="title">List of Bills</h2>
      <FilterDropdown
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <BillTable bills={filteredBills} />
    </div>
  );
};

export default BillManager;
