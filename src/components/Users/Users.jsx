import axios from "axios";
import React from "react";
import styles from "./Users.module.css";
import face from "../../assets/images/face.png";

let Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((ans) => {
          props.setUsers(ans.data.items);
        });
    }
  };
  
  return (
    <div>
    <button className={styles.button} onClick={getUsers}>Get Users</button>
      {props.users.map((u) => (
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
