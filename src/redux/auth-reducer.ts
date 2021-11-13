import { stopSubmit } from "redux-form";
import { userApi, testAuthApi, securityAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH = "SET_AUTH";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL";

export type InitialStateType = {
  userId: number | null;
  email: string | null;
  login: string | null;
  isAuth: boolean;
  captcha: string | null;
};

let initialState: InitialStateType = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captcha: null,
};

const authReducer = (state = initialState, action: any): InitialStateType => {
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

type SetAuthType = {
  type: typeof SET_AUTH;
  isAuth: boolean;
};

export const setAuth = (answer: boolean): SetAuthType => ({
  type: SET_AUTH,
  isAuth: answer,
});

type SetCaptchaType = {
  type: typeof GET_CAPTCHA_URL;
  payload: string;
};

export const setCaptcha = (url: string): SetCaptchaType => ({
  type: GET_CAPTCHA_URL,
  payload: url,
});

type SetUserDataTypePayloadType = {
  userId: number | null;
  email: string | null;
  login: string | null;
};

type SetUserDataType = {
  type: typeof SET_USER_DATA;
  userData: SetUserDataTypePayloadType;
  isAuth: boolean;
};

export const setUserData = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
): SetUserDataType => ({
  type: SET_USER_DATA,
  userData: { userId, email, login },
  isAuth: isAuth,
});

type FormDataType = {
  login: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

export const authorized = (formData: FormDataType) => (dispatch: any) => {
  testAuthApi
    .authTest(
      formData.login,
      formData.password,
      formData.rememberMe,
      formData.captcha
    )
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

export const getCaptcha = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptcha();
  const captcha = response.data.url;
  dispatch(setCaptcha(captcha));
};

export const logoutFromAcc = () => (dispatch: any) => {
  testAuthApi.logout().then((ans) => {
    if (ans.resultCode === 0) {
      dispatch(setAuth(false));
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export const getAuth = () => async (dispatch: any) => {
  let ans = await userApi.getIsAuth();
  if (ans.resultCode === 0) {
    let { id, email, login } = ans.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export default authReducer;
