import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// github deploy attemp:
//  "homepage": "https://helmerr302.github.io/Meme_Generator/",
//   "homepage": "https://github.com/HelmerR302/",
// import { HashRouter } from "react-router-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <HashRouter basename="">
//       <App />
//     </HashRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// "predeploy": "npm run build",
// "deploy": "gh-pages -d build",
