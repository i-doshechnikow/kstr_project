import React from "react";
import {
  follow,
  unfollow,
  setToggelFollowingProgress,
  getUsers,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userApi } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  onFollow = (userId) => {
    this.props.setToggelFollowingProgress(true, userId);
    userApi.onFollowClick(userId).then((answer) => {
      if (answer.messages[0] !== "You can't follow yourself") {
        this.props.follow(userId);
      }
      this.props.setToggelFollowingProgress(false, userId);
    });
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
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          onFollow={this.onFollow}
          setToggelFollowingProgress={this.props.setToggelFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setToggelFollowingProgress,
  getUsers,
})(UsersContainer);
