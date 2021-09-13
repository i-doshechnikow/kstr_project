import { userApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

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
    default:
      return state;
  }
};

export const setUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  userData: { userId, email, login },
});

export const getAuth = () => (dispatch) => {
  userApi.getIsAuth().then((ans) => {
    if (ans.resultCode === 0) {
      let { id, email, login } = ans.data;
      dispatch(setUserData(id, email, login));
    }
  });
};

export default authReducer;
