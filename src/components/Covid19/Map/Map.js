import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import { cloneDeep } from "lodash";
import "./Map.scss";
import "moment/locale/vi";
import moment from "moment";
moment.locale("vi");
// Load Highcharts modules
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
  colorAxis: {
    min: 0,
    stops: [
      [0.2, "#e0aaff"],
      [0.4, "#c77dff"],
      [0.6, "#7b2cbf"],
      [0.8, "#5a189a"],
      [1, "	#240046"],
    ],
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "bottom",
  },
  series: [
    {
      name: "Confirmed Cases",
      joinBy: ["hc-key", "key"],
    },
  ],
};

const HighMaps = ({ mapData }) => {
  const [options, setOptions] = useState({});
  const [mapLoaded, setMapLoaded] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    if (mapData && Object.keys(mapData).length) {
      console.log({ mapData });
      const fakeData = mapData.features.map((feature, index) => ({
        key: feature.properties["hc-key"],
        value: index,
      }));

      setOptions(() => ({
        ...initOptions,
        title: {
          text: mapData.title,
        },
        series: [
          { ...initOptions.series[0], mapData: mapData, data: fakeData },
        ],
      }));

      if (!mapLoaded) setMapLoaded(true);
    }
  }, [mapData, mapLoaded]);

  useEffect(() => {
    if (chartRef && chartRef.current && mapLoaded) {
      chartRef.current.chart.series[0].update({
        mapData,
      });
    }
  }, [options, mapData, mapLoaded]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={cloneDeep(options)}
      constructorType={"mapChart"}
      ref={chartRef}
    />
  );
};

HighMaps.defaultProps = {
  mapData: {},
};

export default React.memo(HighMaps);
