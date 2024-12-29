import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBill, editBill } from "../redux/billsSlice";
import './styles/BillTable.css';

const BillTable = ({ bills }) => {
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
    <div className="bill-table-container">
      <table className="bill-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
      </table>
      <div className="scrollable-tbody">
        <table className="bill-table">
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
                    <button className="btn save" onClick={handleSave}>
                      Save
                    </button>
                    <button className="btn cancel" onClick={() => setEditId(null)}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ) : (
                <tr
                  key={bill.id}
                  className={bill.highlighted ? "highlighted" : ""}
                >
                  <td>{bill.description}</td>
                  <td>{bill.category}</td>
                  <td>{bill.amount}</td>
                  <td>{bill.date}</td>
                  <td>
                    <button className="btn edit" onClick={() => handleEdit(bill)}>
                      Edit
                    </button>
                    <button
                      className="btn delete"
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
      </div>
    </div>
  );
};

export default BillTable;
