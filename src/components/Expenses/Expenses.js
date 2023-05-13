import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';

function Expenses(props) {
    const[filteredYear, setFilteredYear]=useState('');
    const selectOnChangeValue = (value) => {
        console.log('Here the value is coming out', value)
        setFilteredYear(value)
    }
    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeValue={selectOnChangeValue}/>
            <h1 className='expenses__header'>Expense Tracker</h1>
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
    );
}

export default Expenses;
