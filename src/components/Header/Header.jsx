import React from "react";
import { NavLink } from "react-router-dom";
import { logoutFromAcc } from "../../redux/auth-reducer";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="react icon"
        width="90px"
      />
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}
            <button onClick={props.logoutFromAcc}>logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
