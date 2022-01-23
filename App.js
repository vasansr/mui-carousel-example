import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import Example from "./Example";

const element = <Example />;

ReactDOM.hydrate(element, document.getElementById("root"));
