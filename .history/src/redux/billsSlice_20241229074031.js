import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bills: [],
};

const billsSlice = createSlice({
  name: "bills",
  initialState,
  reducers: {
    addBill(state, action) {
      state.bills.push(action.payload);
    },
    editBill(state, action) {
      const index = state.bills.findIndex((bill) => bill.id === action.payload.id);
      if (index !== -1) state.bills[index] = action.payload;
    },
    deleteBill(state, action) {
      state.bills = state.bills.filter((bill) => bill.id !== action.payload);
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
    },
  },
});

export const { addBill, editBill, deleteBill, calculateMinimumBills } = billsSlice.actions;
export default billsSlice.reducer;
