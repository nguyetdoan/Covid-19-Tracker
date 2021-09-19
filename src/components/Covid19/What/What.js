import classes from "./What.module.scss";

const What = () => {
  return (
    <div className={classes["what-container"]}>
      <div className={classes["image-container"]}>
        <img src="assets/logo.png" alt="virus" />
      </div>
      <div className={classes["info-container"]}>
        <h1 className={classes.question}>
          What is <span>COVID 19</span> ?
        </h1>
        <p className={classes.answer}>
          The Virus was first reported in Wuhan, Hubel China on 17 November
          2019, and on 11 March 2020, the World Health Organization (WHO)
          declared the outbreak a pandamic. Coronavirus disease (COVID-19) is an
          infectious disease causes by a new virus. The disease causes
          respiratory illness (like the flu) with symptoms such as a cough,
          fever and in more severe cases, difficult breathing.
        </p>
      </div>
    </div>
  );
};

export default What;
