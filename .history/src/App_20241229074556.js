import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import BillTable from "./components/BillTable";
import AddEditBillModal from "./components/AddEditBillModal";
import FilterDropdown from "./components/FilterDropdown";
import BudgetChart from "./components/BudgetChart";
import MinimumBillsCalculator from "./components/MinimumBillsCalculator";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Bill Manager</h1>
        <AddEditBillModal />
        <FilterDropdown />
        <BudgetChart />
        <MinimumBillsCalculator />
        <BillTable />
      </div>
    </Provider>
  );
};

export default App;
