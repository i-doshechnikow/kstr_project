import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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

// let AuthRedirectComponent = (props) => {
//   if (!props.isAuth) {
//     return <Redirect to={"/login"} />;
//   }
//   return <ProfileContainer {...props} />;
// };

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
  userProfileId: state.profilePage.userProfileId,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, { setUserProfile, getProfile })(
  WithUrlDataContainerComponent
);
