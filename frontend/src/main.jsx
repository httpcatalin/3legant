import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Store from "./Store.jsx";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>
);
