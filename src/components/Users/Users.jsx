import React from "react";
import styles from "./Users.module.css";
import face from "../../assets/images/face.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((el) => (
        <button
          className={
            (props.currentPage == el && styles.buttonNow) || styles.button
          }
          onClick={(e) => {
            props.onPageChanged(el);
          }}
        >
          {el}
        </button>
      ))}
      {/* <div>
      <span>1</span>
      <span className={styles.selectedPage}>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
    </div> */}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : face}
                  className={styles.photo}
                />
              </NavLink>
            </div>
            <div>
              {u.followed === true ? (
                <button
                  className={styles.button}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollowed
                </button>
              ) : (
                <button
                  className={styles.button}
                  onClick={() => {
                    props.follow(u.id);
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
};

export default Users;
