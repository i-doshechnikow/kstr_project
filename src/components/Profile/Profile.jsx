import React from "react";
import MyPosts from "./myPosts/myPosts";
import MyPostsContainer from "./myPosts/myPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
