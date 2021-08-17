import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.active}>msgs</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/news" activeClassName={s.active}>news</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/sttgs" activeClassName={s.active}>sttgs</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
