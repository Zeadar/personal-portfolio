// import logo from "./logo.svg"
import "./App.css"
import MenuItem from "./components/MenuItem"
import Title from "./components/Title.js"
import Menu from "./components/Menu"
import { useState } from "react"
import Counter from "./components/Counter"
// import img from "https://i.postimg.cc/bvGG0FvH/00039-479170277.png"

// React component
// function Title() {
//     return <h1>React is cool</h1>
// }

function App() {
    const [data, setData] = useState("This is first value")

    let clicked = false
    function handleClick() {
        if (clicked) {
            setData("This is first value")
        } else {
            setData("React is fun")
        }
        clicked = !clicked
    }

    return (
        <div className="App">
            <MenuItem item1="Home" item2="About" item3="Products" />
            <Menu />
            <Title title="React is Cool!" />
            <div>
                <button onClick={handleClick}>What is this?</button>
            </div>

            {data}

            {Counter()}
        </div>
    )
}

export default App
