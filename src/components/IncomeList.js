import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function IncomeList() {
  const { incomeTransactions } = useContext(GlobalContext);

  return (
    <div className="transactions transactions-income">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {incomeTransactions.map((incomeTransaction) => (
          <li className="transaction" key={incomeTransaction.id}>
            <span className="transactio-text">
              {incomeTransaction.incomeText}
            </span>
            <span className="transactio-amount">
              {incomeTransaction.incomeAmount}
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
