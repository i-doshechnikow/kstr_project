import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setUserProfile, getProfile } from "../../redux/profile-reducer";
import MyPosts from "./myPosts/myPosts";
import MyPostsContainer from "./myPosts/myPostsContainer";
import Profile from "./Profile";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.getProfile(this.props.match.params.userId);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} userProfileId={this.props.userProfileId} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  userProfileId: state.profilePage.userProfileId,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getProfile })(
  WithUrlDataContainerComponent
);