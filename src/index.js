import React from "react";
import ReactDOM from "react-dom"

import App from "./appi.jsx"

const rootElement = document.getElementById("root")




ReactDOM.render(
  <React.StrictMode>
    <App id={window.id}/>
    </React.StrictMode>,
  rootElement
)
