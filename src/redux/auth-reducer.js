import { stopSubmit } from "redux-form";
import { userApi, testAuthApi, securityAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH = "SET_AUTH";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
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
    case GET_CAPTCHA_URL:
      return {
        ...state,
        captcha: action.payload,
      };
    default:
      return state;
  }
};

export const setAuth = (answer) => ({
  type: SET_AUTH,
  isAuth: answer,
});

export const setCaptcha = (url) => ({
  type: GET_CAPTCHA_URL,
  payload: url,
});

export const setUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login },
  isAuth: isAuth,
});

export const authorized = (formData) => (dispatch) => {
  testAuthApi
    .authTest(formData.login, formData.password, formData.rememberMe, formData.captcha)
    .then((ans) => {
      if (ans.resultCode === 0) {
        dispatch(setAuth(true));
      } else if (ans.messages[0] === "Incorrect anti-bot symbols") {
        let message = ans.messages.length > 0 ? ans.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
        dispatch(getCaptcha());
      } else {
        let message = ans.messages.length > 0 ? ans.messages[0] : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    });
};

export const getCaptcha = () => async (dispatch) => {
  let response = await securityAPI.getCaptcha();
  const captcha = response.data.url;
  dispatch(setCaptcha(captcha));
};

export const logoutFromAcc = () => (dispatch) => {
  testAuthApi.logout().then((ans) => {
    if (ans.resultCode === 0) {
      dispatch(setAuth(false));
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export const getAuth = () => async (dispatch) => {
  let ans = await userApi.getIsAuth();
  if (ans.resultCode === 0) {
    let { id, email, login } = ans.data;
    dispatch(setUserData(id, email, login, true));
  }
};
// export const getAuth = () => (dispatch) => {
//   return userApi.getIsAuth().then((ans) => {
//     if (ans.resultCode === 0) {
//       let { id, email, login } = ans.data;
//       dispatch(setUserData(id, email, login, true));
//     }
//   });
// };

export default authReducer;
