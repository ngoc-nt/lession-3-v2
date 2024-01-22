import React from "react";
import styles from "./LoadingSkeleton.module.scss";

const MovieItemLoading: React.FC = () => {
  return (
    <div>
      <div className={`${styles.isloading}`} style={{ height: "100%" }}>
        <div
          className={`${styles.loadingImage}`}
          style={{ height: "500px" }}
        ></div>
        <div
          className={`d-xl-flex justify-content-between align-items-center ${styles.textContent}`}
        >
          <div className={`${styles.textContainer}`}>
            <div className={`${styles.mainText}`}></div>
            <div className={`${styles.subText}`}></div>
          </div>
          <div className={`${styles.loadingBtn}`}></div>
          <div className={`${styles.loadingBtn}`}></div>
        </div>
      </div>
    </div>
  );
};

export default MovieItemLoading;
