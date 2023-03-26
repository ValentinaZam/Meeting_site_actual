import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Users from "./app/components/users";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./app/App";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<App />);

// reportWebVitals();
