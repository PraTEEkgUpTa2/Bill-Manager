import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBill } from "../redux/billsSlice";

const AddEditBillModal = () => {
  const [bill, setBill] = useState({
    id: Date.now(),
    description: "",
    category: "",
    amount: 0,
    date: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addBill(bill));
    setBill({ id: Date.now(), description: "", category: "", amount: 0, date: "" });
  };

  return (
    <div className="modal">
      <input
        type="text"
        placeholder="Description"
        value={bill.description}
        onChange={(e) => setBill({ ...bill, description: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={bill.category}
        onChange={(e) => setBill({ ...bill, category: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={bill.amount}
        onChange={(e) => setBill({ ...bill, amount: +e.target.value })}
      />
      <input
        type="date"
        value={bill.date}
        onChange={(e) => setBill({ ...bill, date: e.target.value })}
      />
      <button onClick={handleSubmit}>Add Bill</button>
    </div>
  );
};

export default AddEditBillModal;