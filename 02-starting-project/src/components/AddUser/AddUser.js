import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import styles from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helper/Wrapper";

const AddUserForm = (props) => {


    const [error, setError] = useState()
    const NameInput = useRef()
    const AgeInput = useRef()



    const submitHandler = (e) => {
        e.preventDefault();
        const NameInputValue = NameInput.current.value
        const AgeInputValue = AgeInput.current.value

        const userInfo = {
            username: NameInputValue,
            age: AgeInputValue,
            id: (Math.random() * 2).toFixed(1)
        };

        if (NameInputValue.trim().length === 0 || AgeInputValue.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'username and age cannot be empty!'
            })
            return
        }

        if (+AgeInputValue < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Age must be greater than 0'
            })
            return
        }
        console.log(userInfo);
        props.myform(userInfo);

        NameInput.current.value = " "
        AgeInput.current.value = " "
    };
    const ErrorHandler = () => {
        setError(null)
    }
    return (
        <Wrapper>
            {error && <ErrorModel title={error.title} message={error.message} onclose={ErrorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={submitHandler}>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        ref={NameInput}
                    />
                    <label htmlFor="age">Age (years): </label>
                    <input
                        id="age"
                        type="number"
                        ref={AgeInput}
                    />
                    <Button>Add user</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUserForm;

