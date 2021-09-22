import classes from "./Prevention.module.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <div className={classes["prevention-container"]}>
        <h1 className={classes.title}>
          How to protect yourself and prepare for the coronavirus
        </h1>
        <div className={classes["content-container"]} data-aos="fade-up">
          <ul>
            <li>
              <img src="assets/1.png" alt="wearmask" />
              <div>
                <p>Avoid close contact</p>
              </div>
            </li>
            <li>
              <img src="assets/2.png" alt="wearmask" />
              <div>
                <p>Clean your hand often</p>
              </div>
            </li>
            <li>
              <img src="assets/3.png" alt="wearmask" />
              <div>
                <p>Stay at home</p>
              </div>
            </li>
            <li>
              <img src="assets/4.png" alt="wearmask" />
              <div>
                <p>Cover coughs and sneezes</p>
              </div>
            </li>
            <li>
              <img src="assets/5.png" alt="wearmask" />
              <div>
                <p>Wear mask when going out </p>
              </div>
            </li>
            <li>
              <img src="assets/6.png" alt="wearmask" />
              <div>
                <p>Clean and disinfect</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Prevention;
