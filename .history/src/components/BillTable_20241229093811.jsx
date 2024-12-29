import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBill, editBill } from "../redux/billsSlice";

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
    <div>
      <table className="w-full bg-gray-700 rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-600">
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) =>
            editId === bill.id ? (
              <tr key={bill.id} className="bg-gray-800">
                <td>
                  <input
                    type="text"
                    value={editedBill.category}
                    onChange={(e) =>
                      setEditedBill({ ...editedBill, category: e.target.value })
                    }
                    className="input p-1 rounded w-full"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editedBill.description}
                    onChange={(e) =>
                      setEditedBill({
                        ...editedBill,
                        description: e.target.value,
                      })
                    }
                    className="input p-1 rounded w-full"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={editedBill.amount}
                    onChange={(e) =>
                      setEditedBill({
                        ...editedBill,
                        amount: parseFloat(e.target.value),
                      })
                    }
                    className="input p-1 rounded w-full"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={editedBill.date}
                    onChange={(e) =>
                      setEditedBill({ ...editedBill, date: e.target.value })
                    }
                    className="input p-1 rounded w-full"
                  />
                </td>
                <td>
                  <button
                    className="bg-green-500 px-2 py-1 rounded text-white"
                    onClick={handleSave}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 px-2 py-1 rounded text-white ml-2"
                    onClick={() => setEditId(null)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={bill.id} className="bg-gray-800">
                <td className="py-2 px-4">{bill.category}</td>
                <td className="py-2 px-4">{bill.description}</td>
                <td className="py-2 px-4">{bill.amount}</td>
                <td className="py-2 px-4">{bill.date}</td>
                <td className="py-2 px-4">
                  <button
                    className="bg-yellow-500 px-2 py-1 rounded text-white"
                    onClick={() => handleEdit(bill)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-2 py-1 rounded text-white ml-2"
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
  );
};

export default BillTable;
