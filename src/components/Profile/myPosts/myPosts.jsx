import React from "react";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  // let postsData = [
  //   {
  //     id: 1,
  //     post: "info post 0",
  //     likes: 8,
  //   },
  //   {
  //     id: 2,
  //     post: "info post 1",
  //     likes: 10,
  //   },
  //   {
  //     id: 3,
  //     post: "info post 2",
  //     likes: 88,
  //   },
  // ];

  let posts = props.postsData.map((el) => {
    return <Post message={el.post} likeCounter={el.likes} />;
  });

  return (
    <div className={s.content}>
      <div>
        my post
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

export default MyPosts;
