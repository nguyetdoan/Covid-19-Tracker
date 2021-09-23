import React, { useEffect, useReducer } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import "./LineChart.scss";
const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));
  return {
    chart: {
      type: "line",
      height: 500,
    },
    title: {
      text: "COVID-19 TRACKER",
    },

    subtitle: {
      text: "Source: postman.com",
    },

    yAxis: {
      min: 0,
      title: {
        text: "Number of Cases",
      },
      labels: {
        align: "right",
      },
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },

    tooltip: {
      backgroundColor: "#2b2d34",
      borderRadius: 10,
      shared: true,
    },
    plotOptions: {
      spline: {
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 3,
          },
        },
        marker: {
          enabled: false,
        },
        pointInterval: 3600000, // one hour
      },
    },

    series: [
      {
        name: "Confirmed Cases",
        data: data.map((item) => item.Confirmed),
        color: "#ff7b00",
      },
      {
        name: "Recovered Cases",
        data: data.map((item) => item.Recovered),
        color: "#0aefff",
      },
      {
        name: "Dead Cases",
        data: data.map((item) => item.Deaths),
        color: "#fc2f00",
      },
    ],
  };
};
const timeReducer = (state, action) => {
  let { data } = action;
  if (action.type === "7") {
    return {
      option: generateOptions(data.slice(data.length - 7, data.length - 1)),
      type: "7",
    };
  } else if (action.type === "30") {
    return {
      option: generateOptions(data.slice(data.length - 30, data.length - 1)),
      type: "30",
    };
  } else {
    return { option: generateOptions(data), type: "all" };
  }
};
export default function LineChart({ data }) {
  const [options, dispatchOptions] = useReducer(timeReducer, {});
  useEffect(() => {
    dispatchOptions({
      type: "all",
      data,
    });
  }, [data]);
  const handleClick = (e) => {
    dispatchOptions({ type: e.target.id, data });
  };
  const { type, option } = options;
  return (
    <div className="line-chart">
      <div className="btns">
        <button
          id="all"
          className={type === "all" ? "active-btn" : ""}
          onClick={handleClick}
        >
          All
        </button>
        <button
          id="30"
          className={type === "30" ? "active-btn" : ""}
          onClick={handleClick}
        >
          30 days
        </button>
        <button
          id="7"
          className={type === "7" ? "active-btn" : ""}
          onClick={handleClick}
        >
          7 days
        </button>
      </div>
      <HighchartsReact highcharts={Highcharts} options={option} />
    </div>
  );
}
