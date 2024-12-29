import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBill } from "../redux/billsSlice";
import './styles/AddEditBillModal.css'

const AddEditBillModal = () => {
  const [bill, setBill] = useState({
    id: Date.now(),
    description: "",
    category: "",
    amount: "",
    date: "",
  });
  const [error, setError] = useState(""); // State for validation error
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Validation check for required fields
    if (!bill.description || !bill.category || !bill.amount || !bill.date) {
      setError("Please fill out all the fields before adding the bill.");
      return;
    }

    // Dispatch the action if all fields are valid
    dispatch(addBill({ ...bill, amount: +bill.amount }));
    setError(""); // Clear any existing error
    setBill({ id: Date.now(), description: "", category: "", amount: "", date: "" });
  };

  return (
    <div className="modal">
      <h2 className="mb-4 text-xl font-bold">Add a New Bill</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Description"
        value={bill.description}
        onChange={(e) => setBill({ ...bill, description: e.target.value })}
        className="input mb-2"
      />
      <input
        type="text"
        placeholder="Category"
        value={bill.category}
        onChange={(e) => setBill({ ...bill, category: e.target.value })}
        className="input mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={bill.amount}
        onChange={(e) => setBill({ ...bill, amount: e.target.value })}
        className="input mb-2"
      />
      <input
        type="date"
        value={bill.date}
        onChange={(e) => setBill({ ...bill, date: e.target.value })}
        className="input mb-4"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
      >
        Add Bill
      </button>
    </div>
  );
};

export default AddEditBillModal;
