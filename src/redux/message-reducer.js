const UPDATE_NEW_MSG_TEXT = "UPDATE-NEW-MSG-TEXT";
const ADD_MSG = "ADD-MSG";
const NEW_ADD_MSG = "NEW-ADD-MSG";

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
    case NEW_ADD_MSG:
      return {
        ...state,
        msgsData: [
          ...state.msgsData,
          {
            id: state.msgsData.length + 1,
            msg: action.newMessage,
          },
        ],
      };
    case UPDATE_NEW_MSG_TEXT:
      return { ...state, newMessageBody: action.msg };
    case ADD_MSG:
      return {
        ...state,
        newMessageBody: "",
        msgsData: [
          ...state.msgsData,
          {
            id: state.msgsData.length + 1,
            msg: state.newMessageBody,
          },
        ],
      };
    default:
      return state;
  }
};
export const newAdd = (text) => ({ type: NEW_ADD_MSG, newMessage: text });
export const addMsgActionCreator = () => ({ type: ADD_MSG });

export const updateNewMsgText = (text) => ({
  type: UPDATE_NEW_MSG_TEXT,
  msg: text,
});

export default messageReducer;
