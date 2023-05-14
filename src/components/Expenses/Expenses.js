import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    const selectOnChangeValue = (value) => {
        props.onSelectedYear(value)
        setFilteredYear(value)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeValue={selectOnChangeValue} />
            <h1 className='expenses__header'>Expense Tracker</h1>
            {props.items.map( item => { 
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
