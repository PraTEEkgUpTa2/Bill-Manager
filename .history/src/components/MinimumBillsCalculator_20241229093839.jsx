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
    <div className="my-6 p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Budget Input Section */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <input
          type="number"
          placeholder="Enter Budget"
          value={budget}
          onChange={(e) => setBudget(+e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button
          onClick={handleCalculate}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Calculate
        </button>
      </div>

      {/* Results Section */}
      {highlightedBills.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">
            Results
          </h2>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <p className="text-gray-800">
              <strong>Number of Bills to be Paid:</strong> {totalHighlightedBills}
            </p>
            <ul className="mt-3 space-y-2">
              {highlightedBills.map((bill) => (
                <li
                  key={bill.id}
                  className="p-3 border border-gray-200 rounded-md bg-gray-50"
                >
                  <p>
                    <strong>Description:</strong> {bill.description}
                  </p>
                  <p>
                    <strong>Amount:</strong> {bill.amount}
                  </p>
                  <p>
                    <strong>Category:</strong> {bill.category}
                  </p>
                  <p>
                    <strong>Date:</strong> {bill.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MinimumBillsCalculator;
