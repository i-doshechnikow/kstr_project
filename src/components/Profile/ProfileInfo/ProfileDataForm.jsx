import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./ProfileInfo.module.css";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = (props) => {
  const { data, deActivateEditMode, ContactTitle, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      {/* out from edit mode  */}
      {/* <button onClick={deActivateEditMode}>save</button> */}
      <button>save</button>
      <div>
        <b>Full name: </b>
        {createField("text", "Full name", "fullName", [], Input)}
        {/* <Field
          type={"text"}
          name={"message"}
          component={Textarea}
          placeholder={"enter message"}
          validate={[]}
        /> */}
      </div>
      <div>
        <b>Looking for a job:</b>
        {createField("checkbox", "Looking for a job", "lfaj", [], Input)}
      </div>
      {
        <div>
          <b>My skills:</b>
          {createField("text", "My skills", "skills", [], Textarea)}
        </div>
      }
      <div>
        <b>About me:</b>
        {createField("text", "About me", "about", [], Textarea)}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(data.contacts).map((el) => (
          <div key={el} className={s.contactsSection}>
            <ContactTitle contact={el} contactDescription={data.contacts[el]} />
            {createField("text", el, "contacts." + el, [], Input)}
          </div>
        ))}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "profileEdit" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
