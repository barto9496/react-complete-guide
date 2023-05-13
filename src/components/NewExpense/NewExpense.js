import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

export default function NewExpense(props) {
    const saveExpenseDataHandler = (expenseDataValues) => {
        const expenseData = {
            ...expenseDataValues,
            id: Math.random().toString()
        }
        console.log(expenseData);
        console.log(props)
        props.onAddExpense(expenseData)
    }


    return (
        <div className='new-expense'>
            <h1>Add expense form</h1>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )
}