import React from "react";
import { Field } from "redux-form";
import styles from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {hasError && <span className={styles.formControl}>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>
        <input {...input} {...props} />
      </div>
      {hasError && <span className={styles.formControl}>{meta.error}</span>}
    </div>
  );
};

export const createField = (
  type,
  placeHolder,
  name,
  validators,
  component,
  props = {},
  text = "",
) => {
  return (
    <div>
      <Field
        type={type}
        placeholder={placeHolder}
        name={name}
        validators={validators}
        component={component}
        {...props}
      />
      {text}
    </div>
  );
};
