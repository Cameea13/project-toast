import React from "react";

import styles from "./Button.module.css";

function Button({ clickPop, className = "", ...delegated }) {
  return (
    <button
      onClick={clickPop}
      className={`${styles.button} ${className}`}
      {...delegated}
    />
  );
}

export default Button;
