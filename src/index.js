import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Store from './Store';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-number-input/bundle/style.css";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
