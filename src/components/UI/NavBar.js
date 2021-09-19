import React, { useState, useEffect } from "react";
import classes from "./NavBar.module.scss";
import { Link, useHistory } from "react-router-dom";
const NavBar = () => {
  const [onActive, setOnActive] = useState("home");
  const { pathname } = useHistory().location;
  const history = useHistory();
  useEffect(() => {
    setOnActive(pathname);
  }, [pathname]);

  return (
    <nav className={classes["nav-bar"]}>
      <div className={classes.logo}>
        <h1 onClick={() => history.push("/")} className={classes.title}>
          COVID
        </h1>
      </div>
      <div className={classes.menu}>
        <Link
          to="/"
          className={`${onActive === "/" ? classes.active : ""}`}
          onClick={() => setOnActive("/")}
        >
          Home
        </Link>
        <Link
          to="/overview"
          className={`${onActive === "/overview" ? classes.active : ""}`}
          onClick={() => setOnActive("/overview")}
        >
          Overview
        </Link>
        <Link
          to="/about"
          className={`${onActive === "/about" ? classes.active : ""}`}
          onClick={() => setOnActive("/about")}
        >
          About
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
