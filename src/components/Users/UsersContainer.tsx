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

type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  users: Array<any>;
  followingInProgress: Array<number>;
};

type MapDispatchPropType = {
  getUsers: (currentPage: number, pageSize: number) => {};
  getFollow: (userId: number) => {};
  onUnFollow: (userId: number) => {};
  // onPageChanged: (parameter: number) => {};
  // onFollow: (parameter: number) => {};
  // follow: () => {};
  // unfollow: () => {};
  // setToggelFollowingProgress: () => {};
};

type ownPropsType = {
  pageTitle: string;
};

type PropsType = MapStatePropsType & MapDispatchPropType & ownPropsType;

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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
  connect<MapStatePropsType, MapDispatchPropType, ownPropsType, AppStateType>(
    mapStateToProps,
    {
      getUsers,
      getFollow,
      onUnFollow,
    }
  ),
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
