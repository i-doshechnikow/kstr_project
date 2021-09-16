import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./login.module.css";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={s.formControll}>
        <Field type="text" name={"login"} required component={"input"} />
        <label>Email</label>
      </div>
      <div className={s.formControll}>
        <Field type="password" name={"password"} required component={"input"} />
        <label>Password</label>
      </div>
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
    console.log(formData);
  };
  return (
    <div className={s.main}>
      <div className={s.container}>
        <h1>Please Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Login;
