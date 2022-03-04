import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState wants a default state value, props.title. First element is a pointer at the managed value, here 'props.title'. The second is a function we can call to set a new title.
  const [title, setTitle] = useState(props.title);

  // function that is event dependent. We execute it onClick of the change title button. use the function from useState to update the title.
  const clickHandler = () => {
    setTitle("Updated");
  };

  // Here we create attributes for the ExpenseDate like we did in App.js. This will pass props on to that component. This is how you pass on. You cannot skip. Forwarding.
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
