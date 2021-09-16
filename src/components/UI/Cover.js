import React from "react";
import { Link } from "react-router-dom";
import OverViewBoard from "../Covid19/OverViewBoard/OverViewBoard";
import classes from "./Cover.module.scss";

const Cover = () => {
  return (
    <div className={classes["cover-container"]}>
      <div className={classes.quote}>
        <h1>Not Safe Outside</h1>
        <h1>
          Stay at <span>Home</span>
        </h1>
        <p>
          Most people infected with the COVID-19 virus will experience mild to
          moderate respiratory illness.
        </p>
        <OverViewBoard />
      </div>
      <div className={classes["cover-image"]}>
        <img src="assets/homepage-cover.png" alt="homepage cover" />
        <img className={classes["virus-1"]} src="assets/logo.png" alt="virus" />
        <img className={classes["virus-2"]} src="assets/logo.png" alt="virus" />
      </div>
      <div className={classes["menu"]}>
        <Link to="/overview" className={classes.item}>
          Overview
        </Link>
        <Link to="/about" className={classes.item}>
          About
        </Link>
        <Link to="/symptoms" className={classes.item}>
          Symptoms
        </Link>
        <Link to="/prevention" className={classes.item}>
          Prevention
        </Link>
      </div>
    </div>
  );
};

export default Cover;
