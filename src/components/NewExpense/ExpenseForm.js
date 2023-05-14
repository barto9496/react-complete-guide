import { useState } from 'react'
import './ExpenseForm.css'
/**
 *  Working with single states
 * 
 * onSubmit functionality of the form the browser reloads and submits a request to the server 
 * which is working currently
 */

export default function ExpenseForm(props) {

    const [enteredTitle, setTitleChangeHandler] = useState('');
    const [enteredAmount, setAmountChangeHandler] = useState(1);
    const [enteredDate, setDateChangeHandler] = useState('2020-01-01');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: 'Please enter your expense',
    //     enteredAmount: '1',
    //     enteredDate: '2019-01-01'
    // })

    const titleChangeHandler = (event) => {
        setTitleChangeHandler(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
    }

    const amountChangeHandler = (event) => {
        setAmountChangeHandler(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setDateChangeHandler(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setAmountChangeHandler(1)
        setDateChangeHandler('2019-01-01')
        setTitleChangeHandler('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="1" step="1" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={enteredDate} max='2024-12-31' min='2010-01-01' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    )
}