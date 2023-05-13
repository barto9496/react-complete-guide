import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
import { useState } from 'react'
/**
 * You can see that this would throw an error -> You cannot have two root elements in one JSX file
 * Why is not allowed? Later we'll know 
 * 
 * Now to make something change with user interaction what we need to do is use a html element and then 
 * use one of its event to track the changes/interaction done by the user
 * 
 * One such example is on the button where in we will use one of the event listener of the button and then change the state using props
 * in the system. Because react exposes all these elements on an html element by default like usually the ones that start with on... and 
 * these on.. props want function as a value so that they're executed once the action has taken place
 * 
 * We need to worry about state in this concept, because what happens is the first time we pull the data and display it,
 * but with reach even after the changes we don't re render it, we just keep it as is so we will need to make react re render the changes
 * once they're clicked so hence we use stages
 * 
 * to re render the data we use a react hook called useState() there are other hooks apart from react state which need to be looked into
 */
function ExpenseItem(props) {
    /**
     * useState should always be called inside the component function
     */

    const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated!');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler} >
                Change title
            </button>
        </Card>
    )
}

export default ExpenseItem