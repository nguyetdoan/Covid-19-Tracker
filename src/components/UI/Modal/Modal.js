import { Fragment } from "react";
import classes from "./Modal.module.scss";

const Modal = ({ children, onClick, className }) => {
  return (
    <Fragment>
      <section className={`${classes["modal-wrapper"]} ${classes[className]}`}>
        <div className={classes["message-card"]}>
          <h3>{children}</h3>
          <p className={classes["exit-btn"]} onClick={onClick}>
            X
          </p>
        </div>
      </section>
      {className && <div className={classes.backdrop} onClick={onClick}></div>}
    </Fragment>
  );
};
export default Modal;
