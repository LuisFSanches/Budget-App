import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
  const [incomeText, setIncomeText] = useState("");
  const [incomeAmount, setIncomeAmount] = useState("");
  const { addIncome } = useContext(GlobalContext);

  const handleSubmitIncome = (e) => {
    e.preventDefault();
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText: incomeText,
      incomeAmount: incomeAmount,
    };
    addIncome(newIncomeTransaction);
    setIncomeText("");
    setIncomeAmount("");
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            value={incomeText}
            placeholder="Add Income"
            autoComplete="off"
            onChange={(e) => setIncomeText(e.target.value)}
          />
          <input
            type="number"
            value={incomeAmount}
            placeholder="Amount"
            autoComplete="off"
            onChange={(e) => setIncomeAmount(e.target.value)}
          />
          <input type="submit" value="submit" />
        </div>
      </form>
      <form action="">
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense" autoComplete="off" />
          <input type="number" placeholder="Amount" autoComplete="off" />
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
