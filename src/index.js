import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["lime", "lemon", "Organe"];
const fruits = ["Apple", "Banana", "watermelon", ...citrus];
console.log(fruits);
