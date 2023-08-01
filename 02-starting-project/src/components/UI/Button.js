import styles from './Button.module.css'

const Button = props => {
    return (<button className={styles.button} onClick={props.onclose}>
        {props.children}
    </button>)
}
export default Button