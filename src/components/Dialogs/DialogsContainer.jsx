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

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMsg = () => {
    props.store.dispatch(addMsgActionCreator());
  };

  let onMsgAreaChange = (text) => {
    props.store.dispatch(updateNewMsgText(text));
  };

  return (
    <Dialogs
      data={state.messagePage}
      addMsg={addMsg}
      onMsgAreaChange={onMsgAreaChange}
    />
  );
};

export default DialogsContainer;
