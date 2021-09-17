import React from "react";
import Login from "./login";
import { authorized } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import ProfileContainer from "../Profile/ProfileContainer";

class LoginContainer extends React.Component {
  componentDidUpdate() {
    console.log(this.props.isAuth);
  }

  render() {
    return this.props.isAuth ? (
      <ProfileContainer />
    ) : (
      <Login authorized={this.props.authorized} />
    );
  }
}

let mapDispatchToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapDispatchToProps, { authorized })(LoginContainer);
