import React from "react";
import { ToastContext } from "../ToastProvider/ToastProvider";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toastList, handleClickX } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toastList.map((item) => {
        return (
          <li key={item.id} className={styles.toastWrapper}>
            <Toast
              id={item.id}
              info={item.message}
              clickX={handleClickX}
              sign={item.variant}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
