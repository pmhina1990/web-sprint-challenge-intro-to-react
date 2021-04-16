// This is for the fake API. Do not delete!
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ThemeProvider} from "styled-components";
import theme from "./theme"

 ReactDOM.render(
   <ThemeProvider theme={theme}>
  <App />
 </ThemeProvider>,
    document.getElementById('root'));

// render(
//     <ThemeProvider theme={theme}>
//         <App />
//     </ThemeProvider>, 
//     document.getElementById("root"));


// import { worker } from "./mocks/browser";
// worker.start();

// ReactDOM.render(<App />, document.getElementById("root"));
