import './ExpenseItem.css'

/**
 * You can see that this would throw an error -> You cannot have two root elements in one JSX file
 * Why is not allowed? Later we'll know 
 */
function ExpenseItem() {
    const expenseDate = new Date(2023, 4, 28).toLocaleDateString();
    const expenseTitle = 'Car insurance';
    const expenseAmount = 294.67;

    return (
        <div className='expense-item'>
            <div>
                {expenseDate}
            </div>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem