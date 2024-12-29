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
          <table className="bills-table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {highlightedBills.map((bill) => (
                <tr key={bill.id}>
                  <td>{bill.description}</td>
                  <td>{bill.amount}</td>
                  <td>{bill.category}</td>
                  <td>{bill.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MinimumBillsCalculator;
