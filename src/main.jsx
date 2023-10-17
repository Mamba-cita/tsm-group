import React from "react";
import ReactDOM from "react-dom/client";
import Store from "./store/Store.js";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";


//Routing on windows loading depending on the browser

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <Provider store={Store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>
);
