import React from "react";
import MyPosts from "./myPosts/myPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts postsData={props.data.postsData} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
