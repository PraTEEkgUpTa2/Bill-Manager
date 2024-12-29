import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBill, editBill } from "../redux/billsSlice";

const BillTable = () => {
  const bills = useSelector((state) => state.bills.bills);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editedBill, setEditedBill] = useState({
    id: null,
    description: "",
    category: "",
    amount: 0,
    date: "",
  });

  const handleEdit = (bill) => {
    setEditId(bill.id);
    setEditedBill(bill);
  };

  const handleSave = () => {
    dispatch(editBill(editedBill));
    setEditId(null);
  };

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
        {bills.map((bill) =>
          editId === bill.id ? (
            <tr key={bill.id}>
              <td>
                <input
                  type="text"
                  value={editedBill.description}
                  onChange={(e) =>
                    setEditedBill({ ...editedBill, description: e.target.value })
                  }
                  className="input"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={editedBill.category}
                  onChange={(e) =>
                    setEditedBill({ ...editedBill, category: e.target.value })
                  }
                  className="input"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={editedBill.amount}
                  onChange={(e) =>
                    setEditedBill({ ...editedBill, amount: +e.target.value })
                  }
                  className="input"
                />
              </td>
              <td>
                <input
                  type="date"
                  value={editedBill.date}
                  onChange={(e) =>
                    setEditedBill({ ...editedBill, date: e.target.value })
                  }
                  className="input"
                />
              </td>
              <td>
                <button className="btn btn-success" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setEditId(null)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ) : (
            <tr key={bill.id} className={bill.highlighted ? "bg-green-200" : ""}>
              <td>{bill.description}</td>
              <td>{bill.category}</td>
              <td>{bill.amount}</td>
              <td>{bill.date}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(bill)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(deleteBill(bill.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default BillTable;
