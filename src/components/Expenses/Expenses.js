import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const selectExpenseFilter = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onExpenseFilterSelected={selectExpenseFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
