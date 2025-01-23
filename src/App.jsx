import { useState } from "react";
import Addtransaction from "./components/Addtransaction";
import Transactionlist from "./components/Transactionlist";
import "./App.css";
import Balance from "./components/Balance";
import Incomeexpense from "./components/Incomeexpense";

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "laptop", amount: -6000 },
    { id: 2, title: "salary", amount: 25000 },
    { id: 3, title: "trip-ladakh", amount: -7000 },
    { id: 4, title: "dress", amount: -1500 },
  ]);

  const onDeleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  const onAddTransaction = (data) => {
    const modifiedData = { ...data, id: Math.random() * 1000 };
    setTransactions([...transactions, modifiedData]);
    console.log(transactions);
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      <Balance transaction={transactions} />
      <Incomeexpense transactions={transactions} />
      <Addtransaction onAdd={onAddTransaction} />
      
      <Transactionlist
        transactions={transactions}
        onDelete={onDeleteTransaction}
      />
    </>
  );
}

export default App;