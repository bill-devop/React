import ExpenseItem from "./components/ExpenseItem";

function App() {
  // passing data via 'props'

  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Towel", amount: 12.29, date: new Date(2021, 3, 23) },
    { title: "Toilet Paper", amount: 8.65, date: new Date(2021, 3, 3) },
    { title: "Wooden Table", amount: 2733.75, date: new Date(2020, 6, 26) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
