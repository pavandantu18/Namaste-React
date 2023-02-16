import React from "react"
import ReactDOM from "react-dom/client"

const Title = () => (
    <h1 id="title" key= "h1">
        Namaste JS!!
    </h1>
)

const HeaderComponent = () => {
    return (
        <div>
            {Title()}
            <h1>Namaste React Functional Component</h1>
            <h2>This is a h2 tag.</h2>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeaderComponent />)