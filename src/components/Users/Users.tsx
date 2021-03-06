import React from "react";
import styles from "./Users.module.css";
import face from "../../assets/images/face.png";
import { NavLink } from "react-router-dom";

type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (parameter: number) => void;
  users: Array<any>;
  followingInProgress: Array<number>;
  onUnFollow: (parameter: number) => void;
  onFollow: (parameter: number) => void;
};

let Users: React.FC<PropsType> = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((el) => (
        <button
          key={el}
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
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : face}
                  className={styles.photo}
                />
              </NavLink>
            </div>
            <div>
              {u.followed === true ? (
                <button
                  disabled={props.followingInProgress.some((el) => el == u.id)}
                  className={styles.button}
                  onClick={() => {
                    props.onUnFollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some((el) => el == u.id)}
                  className={styles.button}
                  onClick={() => {
                    props.onFollow(u.id);
                  }}
                >
                  follow
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
