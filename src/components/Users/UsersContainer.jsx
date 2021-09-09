import React from "react";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsers,
  setToggelFetching,
  setToggelFollowingProgress,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import axios from "axios";
import preloader from "../../assets/images/1476.gif";
import Preloader from "../common/Preloader/Preloader";
import { userApi } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToggelFetching(true);
    userApi
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((ans) => {
        this.props.setToggelFetching(false);
        this.props.setUsers(ans.items);
        if (ans.totalCount < 100) {
          this.props.setTotalUsers(ans.totalCount);
        } else {
          this.props.setTotalUsers(50);
        }
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setToggelFetching(true);
    userApi.getUsers(pageNumber, this.props.pageSize).then((ans) => {
      this.props.setToggelFetching(false);
      this.props.setUsers(ans.items);
    });
  };

  onFollow = (userId) => {
    // userApi.onFollowClick(userId);
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
          // follow={this.props.follow}
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

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (page) => {
//       dispatch(setCurrentPageAC(page));
//     },
//     setTotalUserCount: (total) => {
//       dispatch(setTotalUsersAC(total));
//     },
//     setToggelFetching: (isFetch) => {
//       dispatch(setToggelFetchingAC(isFetch));
//     },
//   };
// };

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsers,
  setToggelFetching,
  setToggelFollowingProgress,
})(UsersContainer);
