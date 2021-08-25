const UPDATE_NEW_MSG_TEXT = "UPDATE-NEW-MSG-TEXT";
const ADD_MSG = "ADD-MSG";

let initialState = {
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
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MSG_TEXT:
      state.newMessageBody = action.msg;
      return state;
    case ADD_MSG:
      let newMsg = {
        id: 1,
        msg: state.newMessageBody,
      };
      state.msgsData.push(newMsg);
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export const addMsgActionCreator = () => ({ type: ADD_MSG });

export const updateNewMsgText = (text) => ({
  type: UPDATE_NEW_MSG_TEXT,
  msg: text,
});

export default messageReducer;
