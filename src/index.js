import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";



const root = ReactDOM.render(<App />, document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>
)