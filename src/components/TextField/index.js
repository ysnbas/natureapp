import React from "react";
import styles from "./Textfield.module.scss";

const TextField = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.textField}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default TextField;
