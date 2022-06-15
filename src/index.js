import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import middleware from "./middleware";
import { createBrowserHistory } from "history";
import ErrorBoundry from "../src/components/ErrorBoundry";
const store = createStore(reducers, middleware);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router history={createBrowserHistory}>
      <ErrorBoundry>
        <App />
      </ErrorBoundry>
    </Router>
  </Provider>
);
