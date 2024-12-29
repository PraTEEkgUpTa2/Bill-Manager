import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BudgetChart from "./components/BudgetChart";
import MinimumBillsCalculator from "./components/MinimumBillsCalculator";
import BillManager from "./components/BillManager";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Bill Manager</h1>
        <BillManager />
        <BudgetChart />
        <MinimumBillsCalculator />
      </div>
    </Provider>
  );
};

export default App;
