import React from "react"
import ReactDOM from "react-dom/client"
import {Header}  from "./components/Header"
import Body from "./components/Body"
import * as Obj from "./components/Footer"

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Obj.Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)