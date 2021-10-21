import React, { useEffect, useState } from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div>
      {editMode ? (
        <div>
          <input
            autoFocus={true}
            onBlur={deActivateEditMode}
            onChange={onStatusChange}
            value={status}
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
