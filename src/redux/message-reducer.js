const UPDATE_NEW_MSG_TEXT = "UPDATE-NEW-MSG-TEXT";
const ADD_MSG = "ADD-MSG";

const messageReducer = (state, action) => {
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
