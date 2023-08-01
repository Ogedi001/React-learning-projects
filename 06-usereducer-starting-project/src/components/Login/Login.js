import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';
import Input from '../UI/Input/Input';


const emailReducer = (preState, action) => {
  if (action.type === 'User_Input') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'input_blur') {
    return { value: preState.value, isValid: preState.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (preState, action) => {
  if (action.type === 'p.user_input') {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === 'p.input_blur') {
    return { value: preState.value, isValid: preState.value.trim().length > 6 };
  }
  return { value: '', isValid: false };
};

const Login = (props) => {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();

  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, DispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });
  const [passwordState, DispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  const ctx = useContext(AuthContext)
  const passwordRef = useRef()
  const emailRef = useRef()


  const { isValid: validEmail } = emailState
  const { isValid: validPassword } = passwordState


  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        validEmail && validPassword
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [validEmail, validPassword]);

  const emailChangeHandler = (event) => {
    DispatchEmail({
      type: 'User_Input',
      val: event.target.value,
    });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    DispatchPassword({
      type: 'p.user_input',
      val: event.target.value,
    });

    // setFormIsValid(
    //   emailState.isValid && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    DispatchEmail({ type: 'input_blur' })
    // setEmailIsValid(emailState.isValid);
  };

  const validatePasswordHandler = () => {
    DispatchPassword({
      type: 'p.input_blur'
    })
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      ctx.onLogIn(emailState.value, passwordState.value);
    } else if (!emailState.isValid) {
      emailRef.current.ActivateFocus()
    }
    else {
      passwordRef.current.ActivateFocus()
    }

  };
  console.log(emailRef)
  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          type="email"
          id="email"
          isValid={emailState.isValid}
          label="E-mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        >
        </Input>
        <Input
          ref={passwordRef}
          type="password"
          id="password"
          isValid={passwordState.isValid}
          label="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        >
        </Input>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>


      </form>
    </Card>
  );
};

export default Login;
