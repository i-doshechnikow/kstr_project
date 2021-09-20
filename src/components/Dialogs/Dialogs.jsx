import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from "./Dialogs.module.css";
import {
  addMsgActionCreator,
  updateNewMsgText,
} from "../../redux/message-reducer";
import MessageNewTest from "./Message/MessageForm";

const Dialogs = (props) => {
  let dialogsMap = props.data.dialogsData.map((el) => {
    return <DialogItem name={el.name} id={el.id} key={el.id} />;
  });

  let msgsMap = props.data.msgsData.map((el) => {
    return <Message msg={el.msg} key={el.id} />;
  });

  let onMsgAreaChange = (e) => {
    // console.log(props);
    let text = e.target.value;
    props.onMsgAreaChange(text);
  };

  let addMsg = () => {
    // props.dispatch(addMsgActionCreator());
    props.addMsg();
  };

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
        <div>
          <MessageNewTest addNewMessage={props.newAdd} />
        </div>

        {/* <textarea
          placeholder={"enter message"}
          onChange={onMsgAreaChange}
          value={props.data.newMessageBody}
        ></textarea>
        <div>
          <button onClick={addMsg}>send</button>
        </div> */}

        {/* <Message msg={msgsData[0].msg} />
        <Message msg={msgsData[1].msg} />
        <Message msg={msgsData[2].msg} /> */}
      </div>
    </div>
  );
};

export default Dialogs;
