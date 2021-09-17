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
        isAuth: true,
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

export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login },
});

export const authorized = (formData) => (dispatch) => {
  testAuthApi
    .authTest(formData.login, formData.password, formData.rememberMe)
    .then((ans) => {
      if (ans !== 1) {
        dispatch(setAuth(true));
      }
    });
};

export const getAuth = () => (dispatch) => {
  userApi.getIsAuth().then((ans) => {
    if (ans.resultCode === 0) {
      let { id, email, login } = ans.data;
      dispatch(setUserData(id, email, login));
    }
  });
};

export default authReducer;
