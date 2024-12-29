import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBill } from "../redux/billsSlice";

const BillTable = () => {
  const bills = useSelector((state) => state.bills.bills);
  const dispatch = useDispatch();

  return (
    <table className="table w-full">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {bills.map((bill) => (
          <tr key={bill.id} className={bill.highlighted ? "bg-green-200" : ""}>
            <td>{bill.description}</td>
            <td>{bill.category}</td>
            <td>{bill.amount}</td>
            <td>{bill.date}</td>
            <td>
              <button className="btn btn-warning">Edit</button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteBill(bill.id))}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BillTable;
