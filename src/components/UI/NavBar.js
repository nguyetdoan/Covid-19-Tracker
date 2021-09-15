import React, { useState } from "react";
import classes from "./NavBar.module.scss";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [onActive, setOnActive] = useState("home");

  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes.logo}>
        <h1>COVID</h1>
      </div>
      <div className={classes.menu}>
        <Link
          to="/"
          className={`${onActive === "home" ? classes.active : ""}`}
          onClick={() => setOnActive("home")}
          data-text="Home"
        >
          Home
        </Link>
        <Link
          to="/overview"
          className={`${onActive === "overview" ? classes.active : ""}`}
          onClick={() => setOnActive("overview")}
        >
          Overview
        </Link>
        <Link
          to="/about"
          className={`${onActive === "about" ? classes.active : ""}`}
          onClick={() => setOnActive("about")}
        >
          About
        </Link>
        <Link
          to="/symptoms"
          className={`${onActive === "symptoms" ? classes.active : ""}`}
          onClick={() => setOnActive("symptoms")}
        >
          Symptoms
        </Link>
        <Link
          to="/prevention"
          className={`${onActive === "prevention" ? classes.active : ""}`}
          onClick={() => setOnActive("prevention")}
        >
          Prevention
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
