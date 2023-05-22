import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card"
import classes from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error, setError] = useState();


    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+userAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid age (>0).',
            });
            return;
        }
        props.onUserDetailsChange(userName, userAge)
        setUserAge('')
        setUserName('')
    }

    const errorHandler = () => {
        setError(null);
    };

    const onAgeChangeHandler = (event) => {
        setUserAge(event.target.value)
    }

    const onNameChangeHandler = (event) => {
        setUserName(event.target.value)
    }


    return (
        <div>
            {
                error && <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}/>
            }
            <Card className={classes.input}>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="userName">Username</label>
                    <input type="text" id="userName" onChange={onNameChangeHandler} value={userName} />
                    <label htmlFor="age">Age(years)</label>
                    <input type="number" id="age" step="1" onChange={onAgeChangeHandler} value={userAge} />
                    <Button buttonType="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser