export const getUsersFromState = (state) => {
  return state.usersPage.users;
};

export const getPageFromState = (state) => {
  return state.usersPage.pageSize;
};
export const getUserCount = (state) => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
