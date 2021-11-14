import React, { createContext, useEffect, useState } from "react";

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [selectedCostInterval, setSelectedCostInterval] = useState("Monthly");
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem("Bills")) || []);
  }, [setBills]);

  useEffect(() => {
    console.log(bills);
  }, [bills]);

  const updateBills = (bill) => {
    const updatedBills = [...bills, bill];
    localStorage.setItem("Bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const alphabeticalOrder = (bills) => {
    return bills.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0
    );
  };

  const editBill = (billToUpdate) => {
    const billsFiltered = bills.filter(
      (bill) => bill.title !== billToUpdate.title
    );
    const updatedBills = alphabeticalOrder([...billsFiltered, billToUpdate]);
    localStorage.setItem("Bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const deleteBill = (billToDelete) => {
    const updatedBills = bills.filter(
      (bill) => bill.title !== billToDelete.title
    );
    localStorage.setItem("Bills", JSON.stringify(updatedBills));
    setBills(updatedBills);
  };
  return (
    <div>
      <BillContext.Provider
        value={{
          bills,
          updateBills,
          editBill,
          selectedCostInterval,
          setSelectedCostInterval,
          setEditModeEnabled,
          editModeEnabled,
          deleteBill,
        }}
      >
        {children}
      </BillContext.Provider>
    </div>
  );
};

export { BillProvider, BillContext };
