const components = (props) => {
    return (
        <ul id="concepts">
            <li className="concept">
                <img src={props.items[0].image} alt={props.items[0].title} />
                <h2>{props.items[0].title}</h2>
                <p>{props.items[0].description}</p>
            </li>
            <li className="concept">
                <img src={props.items[1].image} alt={props.items[1].title} />
                <h2>{props.items[1].title}</h2>
                <p>{props.items[1].description}</p>
            </li>
            <li className="concept">
                <img src={props.items[2].image} alt={props.items[2].title} />
                <h2>{props.items[2].title}</h2>
                <p>{props.items[2].description}</p>
            </li>
        </ul>
    )
}
export default components