import classes from "./Symptoms.module.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Symptoms = () => {
  useEffect(() => {
    AOS.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: "animated",
      duration: 2000,
    });
  }, []);
  return (
    <div className={classes["symptoms-wrapper"]}>
      <div className={classes["symptoms-container"]}>
        <div className={classes["image-container"]} data-aos="fade-up">
          <img src="assets/symptoms.png" alt="symptoms" />
        </div>
        <div className={classes["main-content"]} data-aos="fade-up">
          <h1>Symptoms of Coronavirus</h1>
          <p>
            The COVID-19 virus spreads primarily through droplets of saliva or
            dischange from the nose when an infected person coughs or sneezes,
            so it's important that you also practice respiratory etiquette (by
            coughing into a flexed elbow).
          </p>
          <ul>
            <li>
              <img src="assets/logo.png" alt="virus" />
              <p>Fever</p>
            </li>
            <li>
              <img src="assets/logo.png" alt="virus" />
              <p>Headache</p>
            </li>
            <li>
              <img src="assets/logo.png" alt="virus" />
              <p>Dypsnoea</p>
            </li>
            <li>
              <img src="assets/logo.png" alt="virus" />
              <p>Runny nose</p>
            </li>
            <li>
              <img src="assets/logo.png" alt="virus" />
              <p>Throat pain</p>
            </li>
            <li>
              <img src="assets/logo.png" alt="virus" />
              <p>Shaking chills</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
