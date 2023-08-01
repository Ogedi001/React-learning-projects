import Card from "../UI/Card"
import styles from './ListUser.module.css'

const ListUser = props => {
    const GenUniqueID = (id) => {
        const existingIDs = new Set(props.users.map((user) => user.id));//store all existing ID in a set
        console.log(existingIDs)
        if (existingIDs.has(id)) {

            //generate new id while  id clashes with the set of existingIDs
            while (existingIDs.has(id)) {
                id = Math.floor(Math.random() * 1000);
            }
            return id
        }
        return id
    }


    return (
        <Card className={styles.users}>
            <ul>
                {
                    props.users.map(user =>
                        <li key={GenUniqueID(user.id)}>
                            {`${user.username}   (${user.age}  ${user.age > 1 ? 'years Old' : 'year Old'})`}
                        </li>)
                }
            </ul>
        </Card >
    )
}
export default ListUser