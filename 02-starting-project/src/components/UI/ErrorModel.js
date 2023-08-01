import ReactDOM from "react-dom"
import Card from "./Card"
import Button from "./Button"
import styles from './ErrorModal.module.css'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onclose} />
}
const Overlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content} >
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onclose={props.onclose}> close </Button>
            </footer>
        </Card>)
}
const ErrorModel = props => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onclose={props.onclose} />, document.querySelector('#modal_backdrop'))}
            {ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onclose={props.onclose} />, document.querySelector('#modal_overlay'))}
        </>
    )
}
export default ErrorModel