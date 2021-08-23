import reportWebVitals from "./reportWebVitals";
// import state, { subscribe } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./App";
// import { addPost, addPostText } from "./redux/state";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";

let rerender = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <Apps
          state={state}
          dispatch={store.dispatch.bind(store)}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerender(store.getState());

store.subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
