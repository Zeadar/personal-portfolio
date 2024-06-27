function MenuItems(props) {
    return (
        <h1 style={{ color: "blue", backgroundColor: "yellow" }}>
            <li>{props.info}</li>
        </h1>
    )
}

function Menu() {
    return (
        <ul>
            <MenuItems info="Home" />
            <MenuItems info="About" />
            <MenuItems info="Products" />
        </ul>
    )
}

export default Menu
