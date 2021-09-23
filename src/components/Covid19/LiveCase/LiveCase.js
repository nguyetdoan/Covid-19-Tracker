import classes from "./LiveCase.module.scss";

const LiveCase = ({ countries }) => {
  return (
    <div className={classes["live-case__wrapper"]}>
      <h1 className={classes.title}>Live Cases By Country</h1>
      <div className={classes["livecase-table"]}>
        <div className={classes["case-title"]}>
          <h3>Country</h3>
          <h3>Confirmed cases</h3>
        </div>
        <div className={classes["data-cases"]}>
          {countries.map((country) => (
            <div className={classes.case} key={country.Country}>
              <p>{country.Country}</p>
              <p>{country.TotalConfirmed}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveCase;
