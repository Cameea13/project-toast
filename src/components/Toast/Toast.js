import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./Toast.module.css";

function Icon({ sign, size }) {
  if (sign === "notice") {
    return <Info size={size} />;
  } else if (sign === "warning") {
    return <AlertTriangle size={size} />;
  } else if (sign === "success") {
    return <CheckCircle size={size} />;
  } else if (sign === "error") {
    return <AlertOctagon size={size} />;
  }
}

function Toast({ info, sign, clickX, id }) {
  return (
    <div className={`${styles.toast} ${styles[sign]}`}>
      <div className={styles.iconContainer}>
        <Icon sign={sign} size={24} />
      </div>
      <p className={styles.content}>{info}</p>
      <button className={styles.closeButton}>
        <X onClick={() => clickX(id)} id={id} size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
