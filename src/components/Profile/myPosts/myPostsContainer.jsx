import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    textAr: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
