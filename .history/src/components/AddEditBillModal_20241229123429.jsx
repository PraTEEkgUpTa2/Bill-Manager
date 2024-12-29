import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBill } from "../redux/billsSlice";
import "./styles/AddEditBillModal.css"; // Import the CSS file

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
      <h2 className="modal-title">Add a New Bill</h2>
      {error && <p className="modal-error">{error}</p>}
      <input
        type="text"
        placeholder="Description"
        value={bill.description}
        onChange={(e) => setBill({ ...bill, description: e.target.value })}
        className="modal-input"
      />
      <input
        type="text"
        placeholder="Category"
        value={bill.category}
        onChange={(e) => setBill({ ...bill, category: e.target.value })}
        className="modal-input"
      />
      <input
        type="number"
        placeholder="Amount"
        value={bill.amount}
        onChange={(e) => setBill({ ...bill, amount: e.target.value })}
        className="modal-input"
      />
      <input
        type="date"
        value={bill.date}
        onChange={(e) => setBill({ ...bill, date: e.target.value })}
        className="modal-input"
      />
      <button onClick={handleSubmit} className="modal-submit">
        Add Bill
      </button>
    </div>
  );
};

export default AddEditBillModal;
