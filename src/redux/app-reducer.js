import { stopSubmit } from "redux-form";
import { userApi, testAuthApi } from "../api/api";
import { getAuth } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SET_AUTH = "SET_AUTH";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
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

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuth());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
