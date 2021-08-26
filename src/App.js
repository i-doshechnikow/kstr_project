import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const Apps = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile" render={() => <Profile />} />
      </div>
    </div>
  );
};

export default Apps;
