import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App"; // Ensure the correct path to your App file
import { Practices } from "./practices";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Practices/> */}
  </React.StrictMode>,
  document.getElementById("root") // Ensure there's a root element in your HTML
);
