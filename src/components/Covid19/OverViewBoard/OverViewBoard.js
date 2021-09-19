import classes from "./OverViewBoard.module.scss";
import { formatNumber } from "../../../service/convert";
import Loading from "../../UI/Loading";

const OverViewBoard = ({
  TotalConfirmed,
  TotalDeaths,
  TotalRecovered,
  loading,
}) => {
  return (
    <div className={classes["overview-board__container"]}>
      <div className={`${classes.case} ${classes.case1}`}>
        <p>{formatNumber(TotalConfirmed)}</p>
        <p>Confirmed Cases</p>
      </div>
      <div className={`${classes.case} ${classes.case2}`}>
        <p>{formatNumber(TotalRecovered)}</p>
        <p>Recovered Cases</p>
      </div>
      <div className={`${classes.case} ${classes.case3}`}>
        <p>{formatNumber(TotalDeaths)}</p>
        <p>Dead Cases</p>
      </div>
      {loading && <Loading />}
    </div>
  );
};

export default OverViewBoard;
