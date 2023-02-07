import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenseItems = props.items.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return <div className="expenses">{expenseItems}</div>;
}

export default Expenses;
