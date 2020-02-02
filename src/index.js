import React from "react";
import ReactDOM from "react-dom";
import Parent from "./components/parent";
//import Testing from "./components/playground";
import "bootstrap/dist/css/bootstrap.css";

// const express = require("express");
// const app = express();

// app.listen(3000);
// app.use(express.static("public"));
ReactDOM.render(<Parent />, document.querySelector("#root"));
