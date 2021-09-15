import classes from "./Prevention.module.scss";

const Prevention = () => {
  return (
    <div className={classes["prevention-container"]}>
      <h1 className={classes.title}>
        How to protect yourself and prepare for the coronavirus
      </h1>
      <div className={classes["content-container"]}>
        <ul>
          <li>
            <img src="assets/1.png" alt="wearmask" />
            <div>
              <h2>Avoid close contact</h2>
            </div>
          </li>
          <li>
            <img src="assets/2.png" alt="wearmask" />
            <div>
              <h2>Clean your hand often</h2>
            </div>
          </li>
          <li>
            <img src="assets/3.png" alt="wearmask" />
            <div>
              <h2>Stay at home</h2>
            </div>
          </li>
          <li>
            <img src="assets/4.png" alt="wearmask" />
            <div>
              <h2>Cover coughs and sneezes</h2>
            </div>
          </li>
          <li>
            <img src="assets/5.png" alt="wearmask" />
            <div>
              <h2>Wear mask when going out </h2>
            </div>
          </li>
          <li>
            <img src="assets/6.png" alt="wearmask" />
            <div>
              <h2>Clean and disinfect</h2>
            </div>
          </li>
        </ul>
        <div className={classes["image-container"]}>
          <img src="assets/covid-banner.png" alt="Covid banner" />
        </div>
      </div>
    </div>
  );
};

export default Prevention;
