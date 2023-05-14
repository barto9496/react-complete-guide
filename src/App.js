import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from "react";

const initialExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e5',
    title: 'INS',
    amount: 294.67,
    date: new Date(2019, 5, 12),
  },
]

function App() {

  const [expenses, setExpenses] = useState(initialExpenses)
  const addExpenseDataToArray = (enteredExpenseData) => {
    setExpenses((prevState) => {
      return [enteredExpenseData, ...prevState]
    })
  }
  const selectedYear = (yearVal) => {
    let expenseArr = initialExpenses.filter(expense => {
      return expense.date.getFullYear().toString() === yearVal
    })
    setExpenses(expenseArr)
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseDataToArray} />
      <Expenses onSelectedYear={selectedYear} items={expenses} />
    </div>
  );
}

export default App;