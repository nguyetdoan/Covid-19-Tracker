import React from "react";
import CountrySelector from "../../components/Covid19/CountrySelector/CountrySelector";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Overview.module.scss";
import OverViewBoard from "../../components/Covid19/OverViewBoard/OverViewBoard";
import LineChart from "../../components/Covid19/LineChart/LineChart";
import Map from "../../components/Covid19/Map/Map";
import { getMapDataByCountryId } from "../../service/api";
const initialState = {
  TotalConfirmed: "",
  TotalDeaths: "",
  TotalRecovered: "",
};
export default function Overview() {
  const [date, setDate] = useState(new Date().toUTCString());
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Viet Nam");
  const [selectedCountryID, setSelectedCountryID] = useState("vn");
  const [casesStatus, setCasesStatus] = useState(initialState);
  const [dataForChart, setDataForChart] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [mapData, setMapData] = useState({});

  useEffect(() => {
    (async () => {
      if (country) {
        const mapData = await import(
          `@highcharts/map-collection/countries/${selectedCountryID}/${selectedCountryID}-all.geo.json`
        );
        setMapData(mapData);
      }
    })();
  }, [selectedCountryID, country]);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axios.get("https://api.covid19api.com/summary");
      let { Countries: countries } = response.data;
      const reportData = countries.filter(
        (report) => report.Country === country
      );
      setLoading(false);
      setCasesStatus(...reportData);
      setDate(response.data.Date.match(/\d{4}-\d{2}-\d{2}/)[0]);
    })();
  }, [country]);
  const onChangeHandler = (country) => {
    setSelectedCountryID(country.toLowerCase());
    setCountry(country);
  };
  useEffect(() => {
    axios
      .get("https://api.covid19api.com/countries")
      .then((response) => setCountries(response.data));
  }, []);
  useEffect(() => {
    axios
      .get(`https://api.covid19api.com/total/dayone/country/${country}`)
      .then((response) => setDataForChart(response.data));
  }, [country]);

  return (
    <div className={classes["overview__container"]}>
      <div className={classes.summary}>
        <div>
          <h1 className={classes["overview__title"]}>Covid-19 Tracker</h1>
          <h2 className={classes.date}>
            Last update: {new Date(date).toDateString()}
          </h2>
          <CountrySelector
            countries={countries}
            onChange={onChangeHandler}
            value={selectedCountryID}
          />
        </div>
        <OverViewBoard {...casesStatus} loading={isloading} />
      </div>
      <div className={classes.charts}>
        <LineChart data={dataForChart} />
        <Map mapData={mapData} />
      </div>
    </div>
  );
}
