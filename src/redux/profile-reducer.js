const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    {
      id: 1,
      post: "info post 0",
      likes: 80,
    },
    {
      id: 2,
      post: "info post 1",
      likes: 100,
    },
    {
      id: 3,
      post: "info post 2",
      likes: 880,
    },
    {
      id: 4,
      post: "props awesome",
      likes: 37,
    },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 8,
        post: state.newPostText,
        likes: 546,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.msg;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  msg: text,
});

export default profileReducer;