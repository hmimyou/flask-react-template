import React from "react";
import ReactDom from "react-dom";
import App from "./App.js"
import { HashRouter as Router } from "react-router-dom"
import '../css/app.css'
import '../scss/main.scss'

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)
