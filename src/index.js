import React from "react"
import ReactDOM from "react-dom"

import { BrowserRouter as Router } from "react-router-dom";

//component
import TodoContainer from "./components/TodoContainer"

//stylesheet
import "/home/kwaleyela/react-todo-app/src/App.css"

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <TodoContainer />
    </Router>  
  </React.StrictMode>, 
  document.getElementById("root")
);