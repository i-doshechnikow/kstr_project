import { profileApi, userApi } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_PHOTO = "SET_PHOTO";

type InitialStateType = {
  postsData: Array<PostDataType>;
  newPostText: string;
  userProfileId: null | object;
  status: string;
};

type PostDataType = {
  id: number;
  post: string;
  likes: number;
};

let initialState: InitialStateType = {
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

const profileReducer = (state = initialState, action: any) => {
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
            post: action.text,
            likes: 546,
          },
        ],
      };
    case DELETE_POST:
      return {
        ...state,
        postsData: state.postsData.filter((el) => el.id !== action.id),
      };
    case SET_PHOTO:
      return {
        ...state,
        userProfileId: { ...state.userProfileId, photos: action.photo },
        //check this in devtools
      };
    default:
      return state;
  }
};

type AddPostActionCreatorType = {
  type: typeof ADD_POST;
  text: string;
};

export const addPostActionCreator = (
  text: string
): AddPostActionCreatorType => ({
  type: ADD_POST,
  text,
});

type DeleteActionCreator = {
  type: typeof DELETE_POST;
  id: number;
};

export const deleteActionCreator = (id: number): DeleteActionCreator => ({
  type: DELETE_POST,
  id,
});

type SetUserProfileType = {
  type: typeof SET_USER_PROFILE;
  userID: number;
};

export const setUserProfile = (userID: number): SetUserProfileType => ({
  type: SET_USER_PROFILE,
  userID,
});

type SetStatusType = {
  type: typeof SET_STATUS;
  status: string;
};

export const setStatus = (status: string): SetStatusType => ({
  type: SET_STATUS,
  status,
});

type SetPhotoType = {
  type: typeof SET_PHOTO;
  photo: string;
};
export const setPhoto = (photo: string): SetPhotoType => ({
  type: SET_PHOTO,
  photo,
});

export const getProfile = (id: number) => (dispatch: any) => {
  if (!id) {
    id = 19492;
  }
  userApi.getUserInfo(id).then((ans) => {
    dispatch(setUserProfile(ans));
  });
};

export const getUserStatus = (id: number) => (dispatch: any) => {
  if (!id) {
    id = 19492;
  }
  profileApi.getStatus(id).then((ans) => {
    dispatch(setStatus(ans));
  });
};

export const updateUserStatus =
  (statusString: string) => async (dispatch: any) => {
    try {
      let response = await profileApi.updateStatus(statusString);
      if (response.data.resultCode === 0) {
        dispatch(setStatus(statusString));
      }
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

export const savePhoto = (photo: string) => async (dispatch: any) => {
  let response = await profileApi.updateProfilePhoto(photo);
  if (response.data.resultCode === 0) {
    dispatch(setPhoto(response.data.data.photos));
  }
};

export const saveAbout = (info: object) => async (dispatch: any) => {
  const id = 19492;
  let response = await profileApi.updateAbout(info);
  if (response.data.resultCode === 0) {
    // add setAbout
    dispatch(getProfile(id));
  } else {
    console.log("response :>> ", response);
  }
};

export default profileReducer;
