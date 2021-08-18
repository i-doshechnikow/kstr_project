import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Apps from "./App";
import reportWebVitals from "./reportWebVitals";

let dialogsData = [
  {
    id: 1,
    name: "iliya",
  },
  {
    id: 2,
    name: "ev",
  },
  {
    id: 3,
    name: "nik",
  },
];

let msgsData = [
  {
    id: 1,
    msg: "hello",
  },
  {
    id: 2,
    msg: "privet",
  },
  {
    id: 3,
    msg: "bonjour",
  },
];

let postsData = [
  {
    id: 1,
    post: "info post 0",
    likes: 80,
  },
  {
    id: 2,
    post: "info post 1",
    likes: 100,
  },
  {
    id: 3,
    post: "info post 2",
    likes: 880,
  },
  {
    id: 4,
    post: "props awesome",
    likes: 37,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <Apps dialogsData={dialogsData} msgs={msgsData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
