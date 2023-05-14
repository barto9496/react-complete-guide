import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019');
    const selectOnChangeValue = (value) => {
        setFilteredYear(value)
    }

    const filteredExpenseArray = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeValue={selectOnChangeValue} />
            <ExpensesChart expenses={filteredExpenseArray}/>
            <h1 className='expenses__header'>Expense Tracker</h1>
            {filteredExpenseArray.length === 0 ? <h3 className='conditionalPara'>No expenses found</h3> : filteredExpenseArray.map(item => {
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
