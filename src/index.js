import React from "react"
import * as ReactDOMClient from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import App from "./app/App"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
)

reportWebVitals()
