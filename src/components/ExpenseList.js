import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function ExpenseList() {
  const { expenseTransactions } = useContext(GlobalContext);
  return (
    <div className="transactions transactions-expense">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {expenseTransactions.map((expenseTransaction) => (
          <li className="transaction" key={expenseTransaction.id}>
            <span className="transactio-text">
              {expenseTransaction.expenseText}
            </span>
            <span className="transactio-amount">
              {expenseTransaction.expenseAmount}
            </span>
            <button className="delete-btn">
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
