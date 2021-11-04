import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  setUserProfile,
  getProfile,
  getUserStatus,
  updateUserStatus,
  savePhoto,
  saveAbout,
} from "../../redux/profile-reducer";
import MyPosts from "./myPosts/myPosts";
import MyPostsContainer from "./myPosts/myPostsContainer";
import Profile from "./Profile";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
  refreshProfileData() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }

    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfileData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfileData();
    }
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          isOwner={!this.props.match.params.userId}
          userProfileId={this.props.userProfileId}
          status={this.props.status}
          updateStatus={this.props.updateUserStatus}
          savePhoto={this.props.savePhoto}
          saveAbout={this.props.saveAbout}
        />
      </div>
    );
  }
}

// let AuthRedirectComponent = (props) => {
//   if (!props.isAuth) {
//     return <Redirect to={"/login"} />;
//   }
//   return <ProfileContainer {...props} />;
// };
let mapStateToProps = (state) => ({
  userProfileId: state.profilePage.userProfileId,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getUserStatus,
    updateUserStatus,
    savePhoto,
    saveAbout,
  }),
  withRouter
  // withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, { setUserProfile, getProfile })(
//   WithUrlDataContainerComponent
// );
