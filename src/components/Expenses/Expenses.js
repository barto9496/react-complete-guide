import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2022');
    const selectOnChangeValue = (value) => {
        setFilteredYear(value)
    }

    const filteredExpenseArray = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeValue={selectOnChangeValue} />
            <h1 className='expenses__header'>Expense Tracker</h1>
            {filteredExpenseArray.map( item => { 
                return (
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date}
                    />
                )
            })}
        </Card>
    );
}

export default Expenses;
