import React from "react";
import styles from "./Users.module.css";
import face from "../../assets/images/face.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                  className={styles.button}
                  onClick={() => {
                    axios.delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "234cc3be-73fc-42c6-9994-80baa9a4fe68",
                        },
                      }
                    );
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  className={styles.button}
                  onClick={() => {
                    props.onFollow(u.id);
                    props.follow(u.id);
                    // .then((ans) => {
                    //   if (ans.messages[0] !== `You can't follow yourself`) {
                    //     props.follow(u.id);
                    //   }
                    // });
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
