import { userApi } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

export type InitialStateType = {
  users: Array<any>;
  pageSize: number;
  totalUsersCount: number;
  currentPage: number;
  isFetching: boolean;
  followingInProgress: Array<any>;
};

let initialState: InitialStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFolowing
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
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

type FollowType = {
  type: typeof FOLLOW;
  userId: number;
};

export const follow = (userId: number): FollowType => ({
  type: FOLLOW,
  userId,
});

type UnfollowType = {
  type: typeof UNFOLLOW;
  userId: number;
};

export const unfollow = (userId: number): UnfollowType => ({
  type: UNFOLLOW,
  userId,
});

type SetUsersType = {
  type: typeof SET_USERS;
  users: Array<any>;
};

export const setUsers = (users: Array<any>): SetUsersType => ({
  type: SET_USERS,
  users,
});

type SetCurrentPageType = {
  type: typeof SET_CURRENT_PAGE;
  page: number;
};

export const setCurrentPage = (page: number): SetCurrentPageType => ({
  type: SET_CURRENT_PAGE,
  page,
});

type SetTotalUsersType = {
  type: typeof SET_TOTAL_COUNT;
  total: number;
};

export const setTotalUsers = (total: number): SetTotalUsersType => ({
  type: SET_TOTAL_COUNT,
  total,
});

type SetToggelFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetch: boolean;
};

export const setToggelFetching = (isFetch: boolean): SetToggelFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetch,
});

type SetToggelFollowingProgressType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
  isFolowing: boolean;
  userId: number;
};

export const setToggelFollowingProgress = (
  isFolowing: boolean,
  userId: number
): SetToggelFollowingProgressType => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFolowing,
  userId,
});

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(setToggelFetching(true));
    userApi.getUsers(currentPage, pageSize).then((ans) => {
      dispatch(setToggelFetching(false));
      dispatch(setUsers(ans.items));
      if (ans.totalCount < 100) {
        dispatch(setTotalUsers(ans.totalCount));
      } else {
        dispatch(setTotalUsers(50));
      }
    });
  };
};

const followUnfollowFlow = async (
  id: number,
  dispatch: any,
  apiMethod: Function,
  actionCreator: Function
) => {
  dispatch(setToggelFollowingProgress(true, id));
  let response = await apiMethod(id);
  if (response.data.result === 0) {
    dispatch(actionCreator(id));
  }

  dispatch(setToggelFollowingProgress(false, id));
};

export const oldGetFollow = (id: number) => (dispatch: any) => {
  let apiMethod = userApi.onFollowClick;
  let actionCreator = follow;
  followUnfollowFlow(id, dispatch, apiMethod, actionCreator);
};

export const getFollow = (id: number) => {
  return (dispatch: any) => {
    dispatch(setToggelFollowingProgress(true, id));
    userApi.onFollowClick(id).then((answer) => {
      if (answer.messages[0] !== "You can't follow yourself") {
        dispatch(follow(id));
      }
      dispatch(setToggelFollowingProgress(false, id));
    });
  };
};

export const onUnFollow = (id: number) => (dispatch: any) => {
  dispatch(setToggelFollowingProgress(true, id));
  userApi.onUnfollowClick(id).then((ans) => {
    if (ans.resultCode == 0) dispatch(unfollow(id));
    dispatch(setToggelFollowingProgress(false, id));
  });
};

export default usersReducer;
