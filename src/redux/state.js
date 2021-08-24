const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MSG_TEXT = "UPDATE-NEW-MSG-TEXT";
const ADD_MSG = "ADD-MSG";

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
      newMessageBody: "",
    },
  },

  rerender() {
    console.log("test");
  },

  subscribe(observer) {
    this.rerender = observer;
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
    this._state.profilePage.newPostText = "";
    this.rerender(this._state);
  },

  addMsg() {
    let newMsg = {
      id: 1,
      msg: this._state.messagePage.newMessageBody,
    };
    this._state.messagePage.msgsData.push(newMsg);
    this._state.messagePage.newMessageBody = "";
    this.rerender(this._state);
  },

  addPostText(text) {
    this._state.profilePage.newPostText = text;
    this.rerender(this._state);
  },

  addMsgText(text) {
    this._state.messagePage.newMessageBody = text;
    this.rerender(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this.addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this.addPostText(action.msg);
    } else if (action.type === UPDATE_NEW_MSG_TEXT) {
      this.addMsgText(action.msg);
    } else if (action.type === ADD_MSG) {
      this.addMsg();
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addMsgActionCreator = () => ({ type: ADD_MSG });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  msg: text,
});

export const updateNewMsgText = (text) => ({
  type: UPDATE_NEW_MSG_TEXT,
  msg: text,
});

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
