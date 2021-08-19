import { rerender } from "../render";

let state = {
  profilePage: {
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
  },
  messagePage: {
    dialogsData: [
      {
        id: 1,
        name: "iliya",
      },
      {
        id: 2,
        name: "ev",
      },
      {
        id: 3,
        name: "nik",
      },
    ],
    msgsData: [
      {
        id: 1,
        msg: "hello",
      },
      {
        id: 2,
        msg: "privet",
      },
      {
        id: 3,
        msg: "bonjour",
      },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 8,
    post: postMessage,
    likes: 546,
  };
  state.profilePage.postsData.push(newPost);
  rerender(state);
};

export default state;
