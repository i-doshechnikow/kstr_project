import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  // let dialogsData = [
  //   {
  //     id: 1,
  //     name: "iliya",
  //   },
  //   {
  //     id: 2,
  //     name: "ev",
  //   },
  //   {
  //     id: 3,
  //     name: "nik",
  //   },
  // ];

  // let msgsData = [
  //   {
  //     id: 1,
  //     msg: "hello",
  //   },
  //   {
  //     id: 2,
  //     msg: "privet",
  //   },
  //   {
  //     id: 3,
  //     msg: "bonjour",
  //   },
  // ];

  let dialogsMap = props.data.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let msgsMap = props.msgs.map((el) => {
    return <Message msg={el.msg} />;
  });

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsMap}
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} /> */}
      </div>
      <div className={s.messages}>
        {msgsMap}
        {/* <Message msg={msgsData[0].msg} />
        <Message msg={msgsData[1].msg} />
        <Message msg={msgsData[2].msg} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
