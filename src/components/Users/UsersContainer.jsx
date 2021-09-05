import React from "react";
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsers,
  setToggelFetching,
} from "../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
import axios from "axios";
import preloader from "../../assets/images/1476.gif";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.setToggelFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((ans) => {
        this.props.setToggelFetching(false);
        this.props.setUsers(ans.data.items);
        if (ans.data.totalCount < 100) {
          this.props.setTotalUsers(ans.data.totalCount);
        } else {
          this.props.setTotalUsers(50);
        }
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setToggelFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((ans) => {
        this.props.setToggelFetching(false);
        this.props.setUsers(ans.data.items);
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
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
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
})(UsersContainer);
