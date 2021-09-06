import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";
import MyPosts from "./myPosts/myPosts";
import MyPostsContainer from "./myPosts/myPostsContainer";
import Profile from "./Profile";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((ans) => {
        this.props.setUserProfile(ans.data);
      });
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
