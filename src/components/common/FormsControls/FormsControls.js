import React from "react";
import styles from "./FormsControls.module.css";

export const Textarea = ({ input, meta, ...props }) => {
  return (
    <div className={styles.formControl + " " + styles.error}>
      <div>
        <textarea {...input} {...props} />
      </div>
      {meta.error && <span className={styles.formControl}>{meta.error}</span>}
      {/* <div>
        <span className={styles.formControl}>{some_error}</span>
      </div> */}
    </div>
  );
};
