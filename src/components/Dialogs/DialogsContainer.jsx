import React from "react";
import {
  addMsgActionCreator,
  updateNewMsgText,
} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

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

// let AuthRedirectComponent = (props) => {
//   if (!props.isAuth) {
//     return <Redirect to={"/login"} />;
//   }
//   return <Dialogs {...props} />;
// };
let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthRedirectComponent);

export default DialogsContainer;
