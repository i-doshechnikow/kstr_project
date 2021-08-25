import React from "react";
import {
  addPostActionCreator,
  updateNewPostText,
} from "../../../redux/profile-reducer";
import MyPosts from "./myPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPosts = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostText(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPosts}
      postsData={state.profilePage.postsData}
      textAr={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
