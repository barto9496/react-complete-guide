import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

/**
 * You can see that this would throw an error -> You cannot have two root elements in one JSX file
 * Why is not allowed? Later we'll know 
 */
function ExpenseItem(props) {
    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem