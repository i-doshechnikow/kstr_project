import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: "yo",
  };

  ActivateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              value={this.props.status}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.ActivateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
