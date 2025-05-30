import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import User from "./reducers/user";
import { combineReducers, legacy_createStore } from "redux";
import { Provider } from "react-redux";

const combineReducer = combineReducers({
  User: User,
});
const store = legacy_createStore(combineReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
