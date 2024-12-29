import React, { useState } from "react";
import { useSelector } from "react-redux";
import FilterDropdown from "./FilterDropdown";
import BillTable from "./BillTable";
import AddEditBillModal from "./AddEditBillModal";
import "./styles/BillManager.css";

const BillManager = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const bills = useSelector((state) => state.bills.bills);

  // Filter bills based on selected category
  const filteredBills = selectedCategory
    ? bills.filter((bill) => bill.category === selectedCategory)
    : bills;

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bill-manager">
      <h2 className="title">List of Bills</h2>
      <div className="actions">
        <FilterDropdown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <button className="add-bill-button" onClick={toggleModal}>
          Add Bill
        </button>
      </div>
      <BillTable bills={filteredBills} />
      {showModal && (
        <div className="modal-backdrop" onClick={toggleModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <AddEditBillModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default BillManager;
