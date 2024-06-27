import React, { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <h1>Counter App</h1>
            <div style={{ fontSize: 60, color: "red" }}>{counter}</div>
            <button
                onClick={() => {
                    setCounter(counter - 1)
                }}
            >
                Decrease
            </button>
            <button
                onClick={() => {
                    setCounter(counter + 1)
                }}
            >
                Increase
            </button>
        </div>
    )
}
