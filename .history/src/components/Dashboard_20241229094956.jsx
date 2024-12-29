import React from "react";
import BillManager from "./BillManager";
import BudgetChart from "./BudgetChart";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Dashboard</h1>
      <div className="grid grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="col-span-4 bg-gray-800 p-4 rounded-lg">
          <BillManager />
        </div>

        {/* Right Section: Chart */}
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Chart</h2>
          <div className="h-64 flex items-center justify-center border border-gray-700 rounded">
            <BudgetChart />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Minimum Amount to be Paid</h2>
        <div className="h-20 flex items-center justify-center border border-gray-700 rounded">
          <span className="text-2xl">$500</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
