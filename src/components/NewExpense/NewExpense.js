import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
    const saveExpenseDataHandler = (expenseDataValues) => {
        const expenseData = {
            id: Math.random().toString(),
            ...expenseDataValues
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
            <h1>Add expense form</h1>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}