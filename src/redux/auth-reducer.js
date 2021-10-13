import { stopSubmit } from "redux-form";
import { userApi, testAuthApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH = "SET_AUTH";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.userData,
        isAuth: action.isAuth,
      };
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};

export const setAuth = (answer) => ({
  type: SET_AUTH,
  isAuth: answer,
});

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login },
  isAuth: isAuth,
});

export const authorized = (formData) => (dispatch) => {
  testAuthApi
    .authTest(formData.login, formData.password, formData.rememberMe)
    .then((ans) => {
      if (ans.resultCode !== 1) {
        dispatch(setAuth(true));
      } else {
        let message = ans.messages.length > 0 ? ans.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
};

export const logoutFromAcc = () => (dispatch) => {
  testAuthApi.logout().then((ans) => {
    if (ans.resultCode === 0) {
      dispatch(setAuth(false));
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export const getAuth = () => (dispatch) => {
  return userApi.getIsAuth().then((ans) => {
    if (ans.resultCode === 0) {
      let { id, email, login } = ans.data;
      dispatch(setUserData(id, email, login, true));
    }
  });
};

export default authReducer;
