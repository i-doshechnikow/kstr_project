import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import s from "./myPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let posts = props.postsData.map((el) => {
    return <Post message={el.post} likeCounter={el.likes} key={el.id} />;
  });

  let onClickAddPost = (formData) => {
    props.addPost(formData.newPost);
    formData.newPost = "";
  };

  return (
    <div className={s.content}>
      <div>
        my post
        <div>
          {/* <NewPostTest add={props.addPost} /> */}
          <PostReduxForm onSubmit={onClickAddPost} />
        </div>
      </div>
      <div className={s.posts}>{posts}</div>
    </div>
  );
};

const newAddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type={"text"}
          name={"newPost"}
          component={Textarea}
          placeholder={"enter post"}
          validate={[requiredField, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: "newPost" })(newAddPostForm);

// const NewPostTest = (props) => {
//   const onSubmit = (formData) => {
//     props.add(formData.newPost);
//     formData.newPost = "";
//   };
//   return (
//     <div>
//       <PostReduxForm onSubmit={onSubmit} />
//     </div>
//   );
// };

export default MyPosts;
