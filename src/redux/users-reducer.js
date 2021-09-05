const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetch };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.total };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
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

export const follow = (userId) => ({ type: FOLLOW, userId });

export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsers = (total) => ({ type: SET_TOTAL_COUNT, total });
export const setToggelFetching = (isFetch) => ({
  type: TOGGLE_IS_FETCHING,
  isFetch,
});

export default usersReducer;
