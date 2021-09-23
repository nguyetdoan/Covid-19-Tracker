import classes from "./MenuList.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuList = () => {
  const [onActive, setActive] = useState(false);
  const activeHandler = () => {
    onActive ? setActive(false) : setActive(true);
  };
  return (
    <div className={`${classes["menu-mb"]} ${onActive ? classes.active : ""}`}>
      <div className={classes["sign-container"]} onClick={activeHandler}>
        <div className={classes["sign"]}></div>
      </div>
      <div className={classes["menu-list"]}>
        <Link to="/" className={classes.item1} onClick={activeHandler}>
          Home
        </Link>
        <Link to="/overview" className={classes.item2} onClick={activeHandler}>
          Overview
        </Link>
        <Link
          to="/aboutcovid"
          className={classes.item3}
          onClick={activeHandler}
        >
          About Covid-19
        </Link>
        <Link to="/aboutme" className={classes.item4} onClick={activeHandler}>
          About me
        </Link>
      </div>
    </div>
  );
};
export default MenuList;
