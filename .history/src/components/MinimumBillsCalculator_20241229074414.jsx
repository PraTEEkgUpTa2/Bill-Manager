import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calculateMinimumBills } from "../billsSlice";

const MinimumBillsCalculator = () => {
  const [budget, setBudget] = useState(0);
  const dispatch = useDispatch();

  const handleCalculate = () => {
    dispatch(calculateMinimumBills(budget));
  };

  return (
    <div className="my-4 p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-2">Minimum Bills Calculator</h2>
      <input
        type="number"
        placeholder="Enter Budget"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
        className="p-2 border rounded w-full"
      />
      <button
        onClick={handleCalculate}
        className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Calculate
      </button>
    </div>
  );
};

export default MinimumBillsCalculator;
