import React from "react";
import { Field, reduxForm } from "redux-form";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        type={"text"}
        name={"message"}
        component={"textarea"}
        placeholder={"enter message"}
      />
      <button>add msgs</button>
    </form>
  );
};

const MessageReduxForm = reduxForm({ form: "message" })(MessageForm);

const MessageNewTest = (props) => {
  const onSubmit = (formData) => {
    props.addNewMessage(formData.message);
    formData.message = "";
  };

  return (
    <div>
      <MessageReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default MessageNewTest;
