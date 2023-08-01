import styles from './MealsItem.module.css'

const MealsItem = props => {
    const price = `$${props.mealslist.price.toFixed(2)}`
    return (
        <li>
            <div className={styles.meal}>
                <h3>{props.mealslist.name} </h3>
                <div className={styles.description}>{props.mealslist.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div></div>
        </li>
    )
}
export default MealsItem