import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calculateMinimumBills } from "../redux/billsSlice";

const MinimumBillsCalculator = () => {
  const [budget, setBudget] = useState(0);
  const dispatch = useDispatch();

  const handleCalculate = () => {
    dispatch(calculateMinimumBills(budget));
  };

  return (
    <div className="my-4">
      <input
        type="number"
        placeholder="Enter Budget"
        value={budget}
        onChange={(e) => setBudget(+e.target.value)}
        className="input"
      />
      <button onClick={handleCalculate} className="btn btn-primary ml-2">
        Calculate Minimum Bills
      </button>
    </div>
  );
};

export default MinimumBillsCalculator;
