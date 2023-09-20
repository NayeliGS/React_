import React from "react";
import ReactDOM  from "react-dom";

import App from "./components/app/App"

const rootElement = document.getElementById("mexico");
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)