import { createSelector } from "reselect";
import { AppStateType } from "./redux-store";

export const getUsersSelector = (state: AppStateType) => {
  return state.usersPage.users;
};

export const getUsersS = createSelector(getUsersSelector, (users) => {
  return users.filter((u) => true);
});

export const getPageFromState = (state: AppStateType) => {
  return state.usersPage.pageSize;
};
export const getUserCount = (state: AppStateType) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state: AppStateType) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state: AppStateType) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state: AppStateType) => {
  return state.usersPage.followingInProgress;
};
