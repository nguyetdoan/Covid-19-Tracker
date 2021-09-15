import classes from "./OverViewBoard.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatNumber } from "../../../service/convert";
const initialState = {
  TotalConfirmed: "",
  TotalDeaths: "",
  TotalRecovered: "",
};
const OverViewBoard = (props) => {
  const [casesStatus, setCasesStatus] = useState(initialState);
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://api.covid19api.com/summary");
      setCasesStatus(response.data.Global);
    })();
  }, []);
  return (
    <div className={classes["overview-board__container"]}>
      <div className={classes.case}>
        <p>{formatNumber(casesStatus.TotalConfirmed)}</p>

        <p>Confirmed Cases</p>
      </div>
      <div className={classes.case}>
        <p>{formatNumber(casesStatus.TotalRecovered)}</p>
        <p>Recovered Cases</p>
      </div>
      <div className={classes.case}>
        <p>{formatNumber(casesStatus.TotalDeaths)}</p>
        <p>Worldwide Deaths</p>
      </div>
    </div>
  );
};

export default OverViewBoard;
