import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return <div className={s.message}>{props.msg}</div>;
};

export default Message;