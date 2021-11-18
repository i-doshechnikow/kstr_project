import React from "react";
import {
  follow,
  unfollow,
  setToggelFollowingProgress,
  getUsers,
  getFollow,
  onUnFollow,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageFromState,
  getUserCount,
  getUsersS,
} from "../../redux/users-selectors";
import { AppStateType } from "../../redux/redux-store";

type PropsType = {
  getUsers: (currentPage: number, pageSize: number) => {};
  currentPage: number;
  pageSize: number;
  getFollow: (userId: number) => {};
  onUnFollow: (userId: number) => {};
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<any>;
  onPageChanged: (parameter: number) => {};
  followingInProgress: Array<number>;
  onFollow: (parameter: number) => {};
  pageTitle: string;
};

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  onFollow = (userId: number) => {
    this.props.getFollow(userId);
  };

  onUnFollow = (userId: number) => {
    this.props.onUnFollow(userId);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          onFollow={this.onFollow}
          onUnFollow={this.onUnFollow}
          followingInProgress={this.props.followingInProgress}
          />
          <h4>{this.props.pageTitle}</h4>
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => {
  return {
    // users: getUsersFromState(state),
    users: getUsersS(state),
    pageSize: getPageFromState(state),
    totalUsersCount: getUserCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setToggelFollowingProgress,
    getUsers,
    getFollow,
    onUnFollow,
  }),
  withAuthRedirect
)(UsersContainer);

// let AuthRedirectComponent = withAuthRedirect(UsersContainer);

// export default connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setToggelFollowingProgress,
//   getUsers,
//   getFollow,
//   onUnFollow,
// })(AuthRedirectComponent);
