import React from "react";
import CountrySelector from "../../components/Covid19/CountrySelector/CountrySelector";
import { useEffect, useState } from "react";
import classes from "./Overview.module.scss";
import OverViewBoard from "../../components/Covid19/OverViewBoard/OverViewBoard";
import LineChart from "../../components/Covid19/LineChart/LineChart";
import Map from "../../components/Covid19/Map/Map";
import getData from "../../service/api";

const initialState = {
  Confirmed: 0,
  Deaths: 0,
  Recovered: 0,
};
export default function Overview() {
  const [countries, setCountries] = useState([]);
  const [selectedCountryID, setSelectedCountryID] = useState("vn");
  const [casesStatus, setCasesStatus] = useState(initialState);
  const [dataForChart, setDataForChart] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    (async () => {
      if (selectedCountryID) {
        setLoading(true);
        const response = await getData.getCaseStatus(selectedCountryID);
        const mapData = await getData.getMapData(selectedCountryID);
        setLoading(false);
        setCasesStatus(response.data[response.data.length - 1]);
        setDataForChart(response.data);
        setMapData(mapData);
      }
      return {};
    })();
  }, [selectedCountryID]);

  const onChangeHandler = (country) => {
    setSelectedCountryID(country.toLowerCase());
  };
  useEffect(() => {
    getData.getCountries().then((response) => setCountries(response));
  }, []);
  return (
    <div className={classes["overview__container"]}>
      <div className={classes.summary}>
        <div>
          <h1 className={classes["overview__title"]}>Covid-19 Tracker</h1>
          <h2 className={classes.date}>
            Last update: {new Date().toDateString()}
          </h2>
          <CountrySelector
            countries={countries}
            onChange={onChangeHandler}
            value={selectedCountryID}
          />
        </div>
        <OverViewBoard {...casesStatus} loading={isloading} />
      </div>
      {dataForChart.length > 0 ? (
        <div className={classes.charts}>
          <LineChart data={dataForChart} />
          <Map mapData={mapData} />
        </div>
      ) : (
        <h1 className={classes["update"]}>It's not update yet</h1>
      )}
    </div>
  );
}
