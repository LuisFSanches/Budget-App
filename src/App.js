import React from 'react';
import {Header} from './components/Header.js'
import {Balance} from './components/Balance.js'
import {IncomeExpenses} from './components/IncomeExpenses.js'
import {TransactionList} from './components/TransactionList.js'
import {AddTransaction} from './components/AddTransaction.js'
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
      </div>
    </div>
  );
}

export default App;
