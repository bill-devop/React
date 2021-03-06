import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
  { title: "Towel", amount: 12.29, date: new Date(2021, 3, 23) },
  { title: "Toilet Paper", amount: 8.65, date: new Date(2021, 3, 3) },
  { title: "Wooden Table", amount: 2733.75, date: new Date(2020, 6, 26) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
