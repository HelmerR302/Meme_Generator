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
// > remove basename

//  the server responded with a status of 404 ()
//  "homepage": "https://helmerr302.github.io/Meme_Generator/",
// > remove homepage, same situation. Put it back

// https://github.com/HelmerR302/Meme_Generator/blob/gh-pages/static/js/main.0195ed73.js
//<HashRouter basename="">
