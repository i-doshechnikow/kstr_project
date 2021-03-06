import React from "react";
import {
  addMsgActionCreator,
  newAdd,
  updateNewMsgText,
} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

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
    newAdd: (text) => {
      dispatch(newAdd(text));
    },
  };
};

// let AuthRedirectComponent = (props) => {
//   if (!props.isAuth) {
//     return <Redirect to={"/login"} />;
//   }
//   return <Dialogs {...props} />;
// };

// const DialogsContainer = compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect
// )(Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
