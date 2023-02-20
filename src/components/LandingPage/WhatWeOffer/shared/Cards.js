import React from "react";
import styles from "./index.module.css";

export function Cards({ top, bottom, middle }) {
  return (
    <div className={styles["container"]}>
      <div className={styles["top"]}>
        <img src={top} alt="icon" />
      </div>

      <div className={styles["middle"]}>{middle}</div>
      
      <div className={styles["bottom"]}>{bottom}</div>
    </div>
  );
}
