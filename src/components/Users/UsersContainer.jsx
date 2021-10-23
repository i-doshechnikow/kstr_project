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
  getUsersFromState,
  getUsersS,
  getUsersSuperSelector,
  getUserSuper,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  onFollow = (userId) => {
    this.props.getFollow(userId);
  };

  onUnFollow = (userId) => {
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
      </>
    );
  }
}

let mapStateToProps = (state) => {
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
