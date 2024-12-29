import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateMinimumBills } from "../redux/billsSlice";
import './styles/MinimumBillsCalculator.css'

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
    <div className="minimum-bills-calculator">
      <div className="input-section">
      <h2>Minimum Bill</h2>
        <input
          type="number"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e) => setBudget(+e.target.value)}
          className="input"
        />
        <button onClick={handleCalculate} className="btn">
          Calculate Minimum Bills
        </button>
      </div>
      {highlightedBills.length > 0 && (
        <div className="results-section">
          <h2>Results</h2>
          <p>
            Number of Bills to be Paid: <strong>{totalHighlightedBills}</strong>
          </p>
          <ul>
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
