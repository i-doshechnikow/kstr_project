import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let posts = props.postsData.map((el) => {
    return <Post message={el.post} likeCounter={el.likes} />;
  });

  let newPostEl = React.createRef();

  let addPost = () => {
    props.addPost(newPostEl.current.value);
    newPostEl.current.value = '';
  };

  return (
    <div className={s.content}>
      <div>
        my post
        <div>
          <div>
            <textarea ref={newPostEl}></textarea>
          </div>
          <div>
            <button onClick={addPost}>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
