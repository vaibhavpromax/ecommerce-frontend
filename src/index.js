import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";

console.log(process.env.REACT_APP_BACKEND_URL);
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
