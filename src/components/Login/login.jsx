import React from "react";
import s from "./login.module.css";
const Login = (props) => {
  return (
    <div className={s.main}>
      <div className={s.container}>
        <h1>Please Login</h1>
        <form>
          <div className={s.formControll}>
            <input type="text" required />
            <label>Email</label>
          </div>
          <div className={s.formControll}>
            <input type="password" required />
            <label>Password</label>
          </div>
          <button className={s.btn}>Login</button>
          <p className={s.text}>
            Don't have an account?<a href="#">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
