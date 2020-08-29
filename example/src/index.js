import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./Reducers";

reducer();

ReactDOM.render(<App />, document.getElementById("root"));
