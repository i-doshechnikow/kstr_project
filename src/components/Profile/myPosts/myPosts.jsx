import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.postsData.map((el) => {
    return <Post message={el.post} likeCounter={el.likes} />;
  });

  let newPostEl = React.createRef();

  let onAddPosts = () => {
    // props.dispatch(addPostActionCreator());
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    // props.dispatch(updateNewPostText(text));
    props.updateNewPostText(text);
  };

  return (
    <div className={s.content}>
      <div>
        my post
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostEl}
              // value={props.newPostText}
              value={props.textAr}
            />
          </div>
          <div>
            <button onClick={onAddPosts}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
