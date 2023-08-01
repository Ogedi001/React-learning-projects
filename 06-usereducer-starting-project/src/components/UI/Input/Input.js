import React, { useImperativeHandle, useRef, } from 'react'
import styles from './Input.module.css'


const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef()



    const Activate = () => {
        console.log(inputRef)
        inputRef.current.focus();
    }
    useImperativeHandle(ref, () => {
        return { ActivateFocus: Activate }
    })
    return <div
        className={`${styles.control} ${props.isValid === false ? styles.invalid : ''
            }`}
    >
        <label htmlFor={props.id}>{props.label}</label>
        <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
        />
    </div>
})
export default Input