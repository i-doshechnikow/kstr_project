import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsMap = props.data.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} />;
  });

  let msgsMap = props.data.msgsData.map((el) => {
    return <Message msg={el.msg} />;
  });

  let newMsgs = React.createRef();

  let alertMsgs = () => {
    alert(newMsgs.current.value);
  }

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
        <textarea ref={newMsgs}></textarea>
        <button onClick={alertMsgs}>send</button>
        {/* <Message msg={msgsData[0].msg} />
        <Message msg={msgsData[1].msg} />
        <Message msg={msgsData[2].msg} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
