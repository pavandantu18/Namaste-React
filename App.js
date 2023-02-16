const heading1 = React.createElement(
    "h1", {
        id: "heading1",
        className: "heading1",
        key : "h1"
    },
    "Namaste React"
)

const heading2 = React.createElement(
    "h2", {
        id: "heading2",
        className: "heading2",
        key : "h2"
    },
    "Namaste React heading 2"
)

const container = React.createElement(
    "div", {
        id: "container"
    },
    [heading1,heading2]
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container)