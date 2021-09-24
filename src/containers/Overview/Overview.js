import React from "react";
import CountrySelector from "../../components/Covid19/CountrySelector/CountrySelector";
import { useEffect, useState } from "react";
import classes from "./Overview.module.scss";
import OverViewBoard from "../../components/Covid19/OverViewBoard/OverViewBoard";
import LineChart from "../../components/Covid19/LineChart/LineChart";
import Map from "../../components/Covid19/Map/Map";
import getData from "../../service/api";
import Modal from "../../components/UI/Modal/Modal";

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
  const [onWrong, setWrong] = useState(false);
  useEffect(() => {
    (async () => {
      let response, mapData;
      try {
        if (selectedCountryID) {
          setLoading(true);
          response = await getData.getCaseStatus(selectedCountryID);
          mapData = await getData.getMapData(selectedCountryID);
          setLoading(false);
          if (response.data.length === 0) {
            setWrong(true);
            setCasesStatus(initialState);
            setDataForChart(response.data);
            setMapData(mapData);
            return;
          }
          setCasesStatus(response.data[response.data.length - 1]);
          setDataForChart(response.data);
          setMapData(mapData);
        }
        return {};
      } catch (err) {
        setLoading(false);
        if (response.data.length === 0) {
          setWrong(true);
          setCasesStatus(initialState);
          setDataForChart([]);
          setMapData({});
        } else {
          setCasesStatus(response.data[response.data.length - 1]);
          setDataForChart(response.data);
          setMapData({});
        }
      }
    })();
  }, [selectedCountryID]);

  const onChangeHandler = (country) => {
    setSelectedCountryID(country.toLowerCase());
  };
  useEffect(() => {
    getData.getCountries().then((response) => setCountries(response));
  }, []);
  const modalHandler = () => {
    setWrong(false);
  };
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
      {(dataForChart.length && mapData.features) || dataForChart.length ? (
        <div className={classes.charts}>
          <LineChart data={dataForChart} />
          {mapData.features ? (
            <Map mapData={mapData} />
          ) : (
            <p className={classes.update}>Not updated yet</p>
          )}
        </div>
      ) : (
        <p className={classes.update}>Not updated yet</p>
      )}

      <Modal className={onWrong ? "active" : ""} onClick={modalHandler}>
        Data hasn't updated yet. Please choose another country.
      </Modal>
    </div>
  );
}
