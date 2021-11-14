const UPDATE_NEW_MSG_TEXT = "UPDATE-NEW-MSG-TEXT";
const ADD_MSG = "ADD-MSG";
const NEW_ADD_MSG = "NEW-ADD-MSG";

type MsgsDataType = {
  id: number;
  msg: string;
};

type DialogsDataType = {
  id: number;
  name: string;
};

export type InitialeStateType = {
  dialogsData: Array<DialogsDataType>;
  msgsData: Array<MsgsDataType>;
  newMessageBody: string;
};

let initialState: InitialeStateType = {
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

const messageReducer = (
  state = initialState,
  action: any
): InitialeStateType => {
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

type NewAddType = {
  type: typeof NEW_ADD_MSG;
  newMessage: string;
};

export const newAdd = (text: string): NewAddType => ({
  type: NEW_ADD_MSG,
  newMessage: text,
});

type AddMsgActionCreatorType = {
  type: typeof ADD_MSG;
};

export const addMsgActionCreator = (): AddMsgActionCreatorType => ({
  type: ADD_MSG,
});

type UpdateNewMsgTextType = {
  type: typeof UPDATE_NEW_MSG_TEXT;
  msg: string;
};

export const updateNewMsgText = (text: string): UpdateNewMsgTextType => ({
  type: UPDATE_NEW_MSG_TEXT,
  msg: text,
});

export default messageReducer;
