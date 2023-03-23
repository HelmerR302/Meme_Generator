import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

//<HashRouter basename="/Meme_Generator">
// https://helmerr302.github.io/Meme_Generator/Meme_Generator/static/js/main.4cf94e97.js
