import React from "react";
import cx from "classnames";
import styles from "./Button.module.scss";

const Button = ({ text, color, size, onClick }) => {
  return (
    <button
      className={cx(
        styles.button,
        color && styles[color],
        size && styles[`size_${size}`]
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
