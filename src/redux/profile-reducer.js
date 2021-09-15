import { profileApi, userApi } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

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
  userProfileId: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_USER_PROFILE:
      return { ...state, userProfileId: action.userID };
    case ADD_POST:
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: state.postsData.length + 1,
            post: state.newPostText,
            likes: 546,
          },
        ],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.msg,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (userID) => ({ type: SET_USER_PROFILE, userID });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  msg: text,
});

export const getProfile = (id) => (dispatch) => {
  if (!id) {
    id = 19492;
  }
  userApi.getUserInfo(id).then((ans) => {
    dispatch(setUserProfile(ans));
  });
};

export const getUserStatus = (id) => (dispatch) => {
  if (!id) {
    id = 19492;
  }
  profileApi.getStatus(id).then((ans) => {
    dispatch(setStatus(ans));
  });
};

export const updateUserStatus = (statusString) => (dispatch) => {
  profileApi.updateStatus(statusString).then((ans) => {
    if (ans.data.resultCode === 0) {
      dispatch(setStatus(statusString));
    }
  });
};

export default profileReducer;
