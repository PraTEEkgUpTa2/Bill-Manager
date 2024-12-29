import { createSlice } from "@reduxjs/toolkit";

// Helper to load bills from localStorage
const loadBillsFromLocalStorage = () => {
  const storedBills = localStorage.getItem("bills");
  return storedBills ? JSON.parse(storedBills) : [];
};

// Helper to save bills to localStorage
const saveBillsToLocalStorage = (bills) => {
  localStorage.setItem("bills", JSON.stringify(bills));
};

const billsSlice = createSlice({
  name: "bills",
  initialState: {
    bills: loadBillsFromLocalStorage(), // Initialize from localStorage
  },
  reducers: {
    addBill: (state, action) => {
      state.bills.push(action.payload);
      saveBillsToLocalStorage(state.bills); // Sync to localStorage
    },
    editBill: (state, action) => {
      const index = state.bills.findIndex((bill) => bill.id === action.payload.id);
      if (index !== -1) {
        state.bills[index] = action.payload;
        saveBillsToLocalStorage(state.bills); // Sync to localStorage
      }
    },
    deleteBill: (state, action) => {
      state.bills = state.bills.filter((bill) => bill.id !== action.payload);
      saveBillsToLocalStorage(state.bills); // Sync to localStorage
    },
    calculateMinimumBills(state, action) {
      const budget = action.payload;
      const sortedBills = [...state.bills].sort((a, b) => a.amount - b.amount);
      let total = 0;
      const highlightedBills = [];

      for (const bill of sortedBills) {
        if (total + bill.amount <= budget) {
          total += bill.amount;
          highlightedBills.push(bill);
        } else {
          break;
        }
      }

      state.bills = state.bills.map((bill) => ({
        ...bill,
        highlighted: highlightedBills.includes(bill),
      }));
      saveBillsToLocalStorage(state.bills); // Sync to localStorage
    },
  },
});

export const { addBill, editBill, deleteBill, calculateMinimumBills } =
  billsSlice.actions;
export default billsSlice.reducer;
