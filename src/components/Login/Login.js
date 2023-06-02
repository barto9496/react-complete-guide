/**
 * useReducer lecture --> th code is similar to the useState function 
 * 
 * basically const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn)
 * here the state snapshot used in the componenet re-render / re-evaluation cycle, instead of updating the state we dispatch a funtion from our end. 
 * and that action will be consumed by the first argument you pass to useReducer -> reducerFn 
 * A function that is triggered automaticall once an action is dispatched (via dispatchFn()) - it received the latest state snapshot and should return the new, updated state.
 * In addition to that we also have the initialState and the initFunc which can be used to set up
 * a initial state programattically 
 */

import React, { useEffect, useState, useReducer } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  if( action.type === 'USER_INPUT'){
    return {
      value: action.val,
      isValid: action.val.includes('@')
    }
  }
  if ( action.type === 'INPUT_BLUR'){
    return {
      value: state.value,
      isValid: state.value.includes('@')
    }
  }
  return {
    value: '',
    isValid: false
  };
}

const Login = (props) => {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const[emailState, dispatchEmail] = useReducer(emailReducer, {value:'', isValid: null})

  // useEffect(() => {
  //   const identitifer = setTimeout(setFormIsValid(
  //     enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //   ), 500);

  //   return (() => {
  //     console.log(identitifer)
  //     clearTimeout(identitifer)
  //     console.log(identitifer)
  //   })

  // }, [enteredEmail, enteredPassword])

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value
    })
    setFormIsValid(event.target.value.includes('@') && enteredPassword.trim().length > 6)
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length>6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({
      type:"INPUT_BLUR",
    })
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
