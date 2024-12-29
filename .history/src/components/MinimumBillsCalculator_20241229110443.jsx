import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateMinimumBills } from "../redux/billsSlice";

const MinimumBillsCalculator = () => {
  const [budget, setBudget] = useState(0);
  const dispatch = useDispatch();
  const bills = useSelector((state) => state.bills.bills);

  const handleCalculate = () => {
    dispatch(calculateMinimumBills(budget));
  };

  // Count the highlighted bills
  const highlightedBills = bills.filter((bill) => bill.highlighted);
  const totalHighlightedBills = highlightedBills.length;

  return (
    <div className="my-4">
      <div className="mb-4">
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
      {highlightedBills.length > 0 && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Results</h2>
          <p>
            Number of Bills to be Paid: <strong>{totalHighlightedBills}</strong>
          </p>
          <ul className="list-disc pl-4">
            {highlightedBills.map((bill) => (
              <li key={bill.id}>
                {bill.description} - {bill.amount} (Category: {bill.category}, Date: {bill.date})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MinimumBillsCalculator;
