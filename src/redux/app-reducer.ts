import { getAuth } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const SET_AUTH = "SET_AUTH";

export type InitialeStateType = {
  initialized: boolean;
  isAuth?: boolean;
};

let initialState: InitialeStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialeStateType => {
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

export const setAuth = (answer: any) => ({
  type: SET_AUTH,
  isAuth: answer,
});

type InitializedSuccessType = {
  type: typeof INITIALIZED_SUCCESS;
};

export const initializedSuccess = (): InitializedSuccessType => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuth());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
