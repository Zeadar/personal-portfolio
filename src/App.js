// import logo from "./logo.svg"
import "./App.css"
import MenuItem from "./components/MenuItem"
import Title from "./components/Title.js"
// import img from "https://i.postimg.cc/bvGG0FvH/00039-479170277.png"

// React component
// function Title() {
//     return <h1>React is cool</h1>
// }

function App() {
    const name = "John the Insipid"
    const x = Math.random() < 0.5
    return (
        <div className="App">
            <MenuItem />
            <h1>Hello React!</h1>
            <h2>Hello {name}</h2>
            <Title />
            <h2>{x ? "Yes" : "No"}</h2>
            {/* <img src={"https://i.postimg.cc/bvGG0FvH/00039-479170277.png"} alt=""></img> */}
            <img src={"https://i.postimg.cc/bvGG0FvH/00039-479170277.png"} alt=""></img>
        </div>
    )
}

export default App
