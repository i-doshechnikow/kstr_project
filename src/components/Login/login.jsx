import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./login.module.css";
import { authorized } from "../../redux/auth-reducer";
import { Input } from "../common/FormsControls/FormsControls";
import {
  maxLengthCreator,
  requiredField,
} from "../../utils/validators/validators";

const maxLenth30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.formControll}>
        <Field
          type="text"
          name={"login"}
          required
          component={Input}
          validate={[requiredField, maxLenth30]}
        />
        <label>Email</label>
      </div>
      <div className={s.formControll}>
        <Field
          type="password"
          name={"password"}
          required
          component={Input}
          validate={[requiredField, maxLenth30]}
        />
        <label>Password</label>
      </div>
      {props.captcha && (
        <div className={s.formControll}>
          <img className={s.captcha} src={props.captcha} />
          <Field
            type="captcha"
            name={"captcha"}
            required
            component={Input}
            validate={[requiredField, maxLenth30]}
          />
          <label>captcha</label>
        </div>
      )}
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <button className={s.btn}>Login</button>
      <Field type="checkbox" name={"rememberMe"} component={"input"} /> Remember
      me?
      <p className={s.text}>
        Don't have an account?<a href="#">Register</a>
      </p>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.authorized(formData);
  };
  return (
    <div className={s.main}>
      <div className={s.container}>
        <h1>Please Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
      </div>
    </div>
  );
};

export default Login;
