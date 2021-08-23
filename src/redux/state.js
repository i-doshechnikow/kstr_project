let store = {
  _state: {
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
      newPostText: "",
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
  },

  rerender() {
    console.log("test");
  },

  getState() {
    return this._state;
  },

  addPost() {
    let newPost = {
      id: 8,
      post: this._state.profilePage.newPostText,
      likes: 546,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this.rerender(this._state);
  },

  addPostText(text) {
    this._state.profilePage.newPostText = text;
    this.rerender(this._state);
  },

  subscribe(observer) {
    this.rerender = observer;
  },
};

export default store;
window.store = store;

// let rerender = () => {
//   console.log("state rerender");
// };

// let state = {
//   profilePage: {
//     postsData: [
//       {
//         id: 1,
//         post: "info post 0",
//         likes: 80,
//       },
//       {
//         id: 2,
//         post: "info post 1",
//         likes: 100,
//       },
//       {
//         id: 3,
//         post: "info post 2",
//         likes: 880,
//       },
//       {
//         id: 4,
//         post: "props awesome",
//         likes: 37,
//       },
//     ],
//     newPostText: "",
//   },
//   messagePage: {
//     dialogsData: [
//       {
//         id: 1,
//         name: "iliya",
//       },
//       {
//         id: 2,
//         name: "ev",
//       },
//       {
//         id: 3,
//         name: "nik",
//       },
//     ],
//     msgsData: [
//       {
//         id: 1,
//         msg: "hello",
//       },
//       {
//         id: 2,
//         msg: "privet",
//       },
//       {
//         id: 3,
//         msg: "bonjour",
//       },
//     ],
//   },
// };

// export const addPost = () => {
//   let newPost = {
//     id: 8,
//     post: state.profilePage.newPostText,
//     likes: 546,
//   };
//   state.profilePage.postsData.push(newPost);
//   state.profilePage.newPostText = "";
//   rerender(state);
// };

// export const addPostText = (text) => {
//   state.profilePage.newPostText = text;
//   rerender(state);
// };

// export const subscribe = (observer) => {
//   rerender = observer;
// };

// export default state;