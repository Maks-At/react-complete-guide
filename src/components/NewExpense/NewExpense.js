import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isNewExpense, setNewExpenseState] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExpenseState(false);
  };

  const cancelNewExpenseHandler = () => {
    setNewExpenseState(false);
  }

  const addNewExpenseHandler = () => {
    setNewExpenseState(true);
  }

  if (!isNewExpense) {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelNewExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
