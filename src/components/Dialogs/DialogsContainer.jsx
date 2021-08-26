import React from "react";
import {
  addMsgActionCreator,
  updateNewMsgText,
} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    data: state.messagePage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMsg: () => {
      dispatch(addMsgActionCreator());
    },
    onMsgAreaChange: (text) => {
      dispatch(updateNewMsgText(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
