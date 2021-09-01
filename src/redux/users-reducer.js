const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id == action.userId) {
            return { ...el, followed: true };
          }
          return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (el.id == action.userId) {
            return { ...el, followed: false };
          }
          return el;
        }),
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
