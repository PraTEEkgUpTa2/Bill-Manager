import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BudgetChart from "./components/BudgetChart";
import MinimumBillsCalculator from "./components/MinimumBillsCalculator";
import BillManager from "./components/BillManager";
import "./App.css"; // Import the CSS for layout

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="header">Bill Manager</h1>
        <div className="top-section">
          <div className="bill-manager-section">
            <BillManager />
          </div>
          <div className="budget-chart-section">
            <BudgetChart />
          </div>
        </div>
        <div className="bottom-section">
          <MinimumBillsCalculator />
        </div>
      </div>
    </Provider>
  );
};

export default App;
