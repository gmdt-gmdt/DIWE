import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index";

import App from "./App";
import { Provider } from "react-redux";
import { TOAST_OPTIONS } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    <ToastContainer {...TOAST_OPTIONS} />
  </React.StrictMode>
);
