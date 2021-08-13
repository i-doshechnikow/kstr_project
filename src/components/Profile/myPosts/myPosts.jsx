import React from 'react';
import s from './myPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.content}>
        <div>
          my post
          <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Remove</button>
          </div>
        </div>
        <div>
          <Post />
          <Post />
        </div>
      </div>
    
    )
}

export default MyPosts;