import React from "react";
import ReactDOM from "react-dom"

import App from "./appi.jsx"




const rootElement = document.getElementById("root")



window.attachApp = (usr, page, id, opt, token) => {

  ReactDOM.render(
    <React.StrictMode>
      <App id={id}/>
      </React.StrictMode>,
    rootElement
  )

};


// let id = 3544

// ReactDOM.render(
//   <React.StrictMode>
//     <App id={id}/>
//     </React.StrictMode>,
//   rootElement
// )





