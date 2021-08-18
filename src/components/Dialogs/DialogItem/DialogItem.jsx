import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const DialogItem = (props) => {
  return (
    //  + " " + s.active
    <div className={s.dialogs}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
