import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  if (props.isAuth) {
    return (
      <header className={s.header}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
          alt="react icon"
          width="90px"
        />
        <div className={s.loginBlock}>
          <NavLink to={"/login"}>{props.login}</NavLink>
        </div>
      </header>
    );
  }
  return (
    <header className={s.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        alt="react icon"
        width="90px"
      />
      <div className={s.loginBlock}>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
    </header>
  );
};

export default Header;
