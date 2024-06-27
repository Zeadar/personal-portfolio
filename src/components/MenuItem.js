import "./MenuItem.css"

function MenuItem(props) {
    return (
        <ul>
            <li>
                <a href="index.html">{props.item1}</a>
            </li>
            <li>
                <a href="index.html">{props.item2}</a>
            </li>
            <li>
                <a href="index.html">{props.item3}</a>
            </li>
        </ul>
    )
}

export default MenuItem
