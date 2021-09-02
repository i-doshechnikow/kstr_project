import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import face from "../../assets/images/face.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((ans) => {
        this.props.setUsers(ans.data.items);
      });
  }

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        {pages.map((el) => (
          <span
            className={this.props.currentPage == el && styles.selectedPage}
            onClick={() => {
              this.props.setCurrentPage(el);
            }}
          >
            {el}
          </span>
        ))}
        {/* <div>
          <span>1</span>
          <span className={styles.selectedPage}>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div> */}
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  src={u.photos.small != null ? u.photos.small : face}
                  className={styles.photo}
                />
              </div>
              <div>
                {u.followed === true ? (
                  <button
                    className={styles.button}
                    onClick={() => {
                      this.props.unfollow(u.id);
                    }}
                  >
                    unfollowed
                  </button>
                ) : (
                  <button
                    className={styles.button}
                    onClick={() => {
                      this.props.follow(u.id);
                    }}
                  >
                    followed
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              {/* <span>
                  <div>{u.location.city}</div>
                  <div>{u.location.country}</div>
                </span> */}
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
