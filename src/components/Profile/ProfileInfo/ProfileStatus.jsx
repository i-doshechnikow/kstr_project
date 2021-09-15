import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  ActivateEditMode = () => {
    debugger;
    this.setState({
      editMode: true,
    });
  };

  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });

    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditMode}
              value={this.state.status}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.ActivateEditMode}>
              {this.props.status || 'NO STATUS'}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
