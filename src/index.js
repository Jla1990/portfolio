import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*styles */
import "./assets/styles/index.scss";
import "./assets/styles/showcase.scss";
import "./assets/styles/aboutMe.scss";
import "./assets/styles/cssLab.scss";
import "./assets/styles/contact.scss";

/* css lab styles */
import "./lab/CssLab/loader/main.css";
import "./lab/CssLab/hearts/main.css";
import "./lab/CssLab/circle/main.scss";
import "./lab/CssLab/meltaway/main.css";


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
