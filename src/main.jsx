import React from "react";
import ReactDOM from "react-dom";
// import { App } from "./App"; // Ensure the correct path to your App file
// import { Practices } from "./practices";
import Profile from "./components/Profile";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Practices/> */}
    <Profile/>
  </React.StrictMode>,
  document.getElementById("root") // Ensure there's a root element in your HTML
);
