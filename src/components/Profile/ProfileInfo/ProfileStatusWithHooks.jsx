import React, { useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    debugger;
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus={true}
            onBlur={deActivateEditMode}
            onChange={onStatusChange}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activateEditMode}>
            {props.status || "NO STATUS"}
          </span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
