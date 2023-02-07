import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

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
  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
