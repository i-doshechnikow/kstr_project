import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostText,
} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    textAr: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostText(text);
      dispatch(action);
    },

    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
