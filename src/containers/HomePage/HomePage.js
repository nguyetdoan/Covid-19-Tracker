import Cover from "../../components/UI/Cover";
import React from "react";
import { useEffect, useState } from "react";
import Map from "../../components/Covid19/Map/Map";
import axios from "axios";
import OverViewBoard from "../../components/Covid19/OverViewBoard/OverViewBoard";
import "./HomePage.scss";
import LiveCase from "../../components/Covid19/LiveCase/LiveCase";
import Loading from "../../components/UI/Loading";
const initialState = {
  Confirmed: 0,
  Deaths: 0,
  Recovered: 0,
};
const HomePage = () => {
  const [mapData, setMapData] = useState({});
  const [customData, setCustomData] = useState([]);
  const [summary, setSummary] = useState(initialState);
  useEffect(() => {
    (async () => {
      const mapData = await import(
        `@highcharts/map-collection/custom/world.geo.json`
      );
      const customData = await axios.get(`https://api.covid19api.com/summary`);
      setMapData(mapData);
      setCustomData(customData.data.Countries);
      setSummary(customData.data.Global);
    })();
  }, []);

  return (
    <div className="home-container">
      <Cover />
      <div className="overview-board">
        <OverViewBoard
          Confirmed={summary.TotalConfirmed}
          Recovered={summary.TotalRecovered}
          Deaths={summary.TotalDeaths}
          affectedCountries={customData.length}
        />
      </div>
      <div className="world-map">
        <Map mapData={mapData} customData={customData} />
        <LiveCase countries={customData} summary={summary} />
      </div>
    </div>
  );
};

export default HomePage;
