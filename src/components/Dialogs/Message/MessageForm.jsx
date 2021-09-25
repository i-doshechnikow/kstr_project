import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        type={"text"}
        name={"message"}
        component={Textarea}
        placeholder={"enter message"}
        validate={[requiredField, maxLength10]}
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
