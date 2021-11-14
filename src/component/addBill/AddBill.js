import React, { useContext, useState } from "react";
import { BillContext } from "../../Context/BillProvider";
import "./style.css";

export const AddBill = () => {
  const [newBillTitle, setNewBillTitle] = useState("");
  const [newBillCost, setNewBillCost] = useState("");

  const { updateBills } = useContext(BillContext);

  const billObjectValid = () => {
    const costValid = newBillCost && Number.parseFloat(newBillCost);

    const titleValid =
      newBillTitle && newBillTitle.split("").find((char) => char !== " ");
    return costValid && titleValid;
  };

  const clearForm = () => {
    setNewBillCost("");
    setNewBillTitle("");
  };

  return (
    <div className="add-bill-container">
      <input
        className="add-bill-form-control form-control"
        type="text"
        value={newBillTitle}
        placeholder="Enter Your Bill Title"
        onChange={(e) => {
          setNewBillTitle(e.target.value);
        }}
      />

      <input
        className="add-bill-form-control form-control"
        type="number"
        value={newBillCost}
        placeholder="Enter Your Bill Cost"
        onChange={(e) => setNewBillCost(e.target.value)}
      />
      <button
        className="add-bill-form-control btn btn-primary"
        onClick={() => {
          if (billObjectValid()) {
            updateBills({
              title: newBillTitle,
              monthlyCost: newBillCost,
              enabled: true,
            });
            clearForm();
          }
        }}
      >
        Add Bill
      </button>
    </div>
  );
};
