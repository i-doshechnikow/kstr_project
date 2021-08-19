import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const Apps = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          {/* <Route exact path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} /> */}

          <Route
            path="/dialogs"
            render={() => <Dialogs data={props.state.messagePage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile data={props.state.profilePage} addPost={props.addPost} />}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Apps;
