import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import {
  addMsgActionCreator,
  updateNewMsgText,
} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import StoreСontext from "../../storeСontext";

const DialogsContainer = (props) => {
  return (
    <StoreСontext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMsg = () => {
          store.dispatch(addMsgActionCreator());
        };

        let onMsgAreaChange = (text) => {
          store.dispatch(updateNewMsgText(text));
        };

        return (
          <Dialogs
            data={state.messagePage}
            addMsg={addMsg}
            onMsgAreaChange={onMsgAreaChange}
          />
        );
      }}
    </StoreСontext.Consumer>
  );
};

export default DialogsContainer;
