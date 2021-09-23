import classes from "./Prevention.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Prevention = () => {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
      duration: 2000,
    });
  }, []);
  return (
    <div className={classes["prevention-wrapper"]}>
      <h1 className={classes.title} data-aos="fade-up">
        How to protect yourself and prepare for the coronavirus
      </h1>
      <div className={classes["prevention-container"]} data-aos="fade-up">
        <ul>
          <li>
            <img src="assets/1.jpg" alt="" />
            <p>Avoid close contact</p>
          </li>
          <li>
            <img src="assets/2.jpg" alt="" />
            <p>Clean your hands often </p>
          </li>
          <li>
            <img src="assets/3.jpg" alt="" />
            <p>Stay at home</p>
          </li>
          <li>
            <img src="assets/4.jpg" alt="" />
            <p>Cover coughs and sneezes</p>
          </li>
          <li>
            <img src="assets/5.jpg" alt="" />
            <p>Wear facemask</p>
          </li>
          <li>
            <img src="assets/6.jpg" alt="" />
            <p>Clean and disinfect</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Prevention;
