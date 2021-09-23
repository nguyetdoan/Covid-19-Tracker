import React from "react";
import classes from "./Cover.module.scss";

const Cover = () => {
  return (
    <div className={classes["cover-container"]}>
      <div className={classes.quote}>
        <h1 className={classes.title}>Not Safe Outside</h1>
        <h1 className={classes.title}>
          Stay at <span>Home</span>
        </h1>
        <p>
          Most people infected with the COVID-19 virus will experience mild to
          moderate respiratory illness.
        </p>
      </div>
      <div className={classes["cover-image"]}>
        <img src="assets/homepage-cover.png" alt="homepage cover" />
        <img className={classes["virus-1"]} src="assets/logo.png" alt="virus" />
        <img className={classes["virus-2"]} src="assets/logo.png" alt="virus" />
      </div>
    </div>
  );
};

export default Cover;
