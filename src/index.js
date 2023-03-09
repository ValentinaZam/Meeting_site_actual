import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./components/users";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <>
    <Users />
  </>,
  document.getElementById("root")
);
reportWebVitals();
