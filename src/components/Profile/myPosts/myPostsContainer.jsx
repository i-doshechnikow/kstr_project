import React from "react";
import {
  addPostActionCreator,
  updateNewPostText,
} from "../../../redux/profile-reducer";
import StoreСontext from "../../../storeСontext";
import MyPosts from "./myPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreСontext.Consumer>
      {(store) => {
        let state = store.getState();

        let addPosts = () => {
          store.dispatch(addPostActionCreator());
        };

        let onPostChange = (text) => {
          let action = updateNewPostText(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPosts}
            postsData={state.profilePage.postsData}
            textAr={state.profilePage.newPostText}
          />
        );
      }}
    </StoreСontext.Consumer>
  );
};

export default MyPostsContainer;
