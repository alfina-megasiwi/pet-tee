import React from "react";
import styles from "./Toast.module.css";

type ToastProps = {
  message: string;
  visible: boolean;
};

const Toast = ({ message, visible }: ToastProps) => {
  return (
    <div className={`${styles.toast} ${visible ? styles.show : ""}`}>
      {message}
    </div>
  );
};

export default Toast;
