// In this component, we are pointing up. Our use of 'props' as a parameter is allowing us to take the data created from where we are pointing, which is inside App.js. 

import "./ExpenseItem.css";

// passing 1 paramater, which holds all the attribute properties for the obejct. Contains key/value pairs
function ExpenseItem(props) {


  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  // using the parameter, 'props' as used here, to call the attribute set in App.js. We use the key from where this function gets called, in this case, inside of App.js. There it contains 3: title, amount, date.
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
