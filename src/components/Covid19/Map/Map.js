import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import "./Map.scss";

highchartsMap(Highcharts);

const initOptions = {
  chart: {
    height: "500",
  },
  title: {
    text: null,
  },
  mapNavigation: {
    enabled: true,
  },

  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },

  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#9d4edd"],
      [0.4, "#7b2cbf"],
      [0.6, "#5a189a"],
      [0.8, "#3c096c"],
      [1, "	#240046"],
    ],
  },
  series: [
    {
      name: "cases",
      joinBy: ["hc-key", "key"],
    },
  ],
};

const HighMaps = ({ mapData, customData }) => {
  const [options, setOptions] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const chartRef = useRef(null);
  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      let confirmedData = [];
      if (customData) {
        let customDataObj = {};
        for (let data of customData) {
          customDataObj[data.CountryCode.toLowerCase()] = [
            data.TotalConfirmed,
            data.TotalRecovered,
            data.TotalDeaths,
          ];
        }
        for (let feature of mapData.features) {
          const confirmedCase = customDataObj[feature.properties["hc-key"]]
            ? customDataObj[feature.properties["hc-key"]][0]
            : 0;
          const recoveredCase = customDataObj[feature.properties["hc-key"]]
            ? customDataObj[feature.properties["hc-key"]][1]
            : 0;
          const deadCase = customDataObj[feature.properties["hc-key"]]
            ? customDataObj[feature.properties["hc-key"]][2]
            : 0;
          confirmedData.push({
            "hc-key": feature.properties["hc-key"],
            data: [confirmedCase, recoveredCase, deadCase],
            value: customDataObj[feature.properties["hc-key"]]
              ? customDataObj[feature.properties["hc-key"]][0]
              : 0,
          });
        }
      } else {
        for (let feature of mapData.features) {
          const confirmedCase = Math.floor(Math.random() * 1000);
          const recoveredCase = Math.floor(Math.random() * confirmedCase);
          const deadCase = confirmedCase - recoveredCase;
          confirmedData.push({
            "hc-key": feature.properties["hc-key"],
            data: [confirmedCase, recoveredCase, deadCase],
            value: confirmedCase,
          });
        }
      }
      setOptions(() => ({
        ...initOptions,
        title: {
          text: mapData.title,
        },
        tooltip: {
          backgroundColor: "#2b2d34",
        },
        series: [
          {
            ...initOptions.series[1],
            mapData: mapData,
            data: confirmedData,
            tooltip: {
              backgroundColor: "#2b2d34",
              borderRadius: 10,
              color: "white",
              crosshairs: true,
              shared: true,
              useHTML: true,
              headerFormat: "",
              pointFormatter: function () {
                return (
                  "<b>" +
                  this.name +
                  "</b><br/>" +
                  Highcharts.map(
                    [
                      ["Confirmed cases", this.data[0], "#ff7b00"],
                      ["Recovered cases", this.data[1], "#0aefff"],
                      ["Dead cases", this.data[2], "#fc2f00"],
                    ],
                    function (line) {
                      return (
                        '<span style="color:' +
                        line[2] +
                        // Colorized bullet
                        '">\u25CF</span> ' +
                        // Party and votes
                        line[0] +
                        ": " +
                        line[1] +
                        "<br/>"
                      );
                    }
                  ).join("")
                );
              },
            },
          },
        ],
      }));

      if (!mapLoaded) setMapLoaded(true);
    }
  }, [mapData, mapLoaded, customData]);

  useEffect(() => {
    if (chartRef && chartRef.current && mapLoaded) {
      chartRef.current.chart.series[0].update({
        mapData,
      });
    }
  }, [options, mapData, mapLoaded]);
  // if (!mapLoaded) return null;
  return (
    <div className="map-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
        ref={chartRef}
      />
    </div>
  );
};

HighMaps.defaultProps = {
  mapData: {},
};

export default React.memo(HighMaps);
