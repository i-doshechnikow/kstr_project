import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.msg}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="iliya" id="1" />
        <DialogItem name="ev" id="2" />
        <DialogItem name="ger" id="3" />
      </div>
      <div className={s.messages}>
        <Message msg="test" />
        <Message msg="hello" />
        <Message msg="bonjorno" />
      </div>
    </div>
  );
};

export default Dialogs;
