import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import "./LineChart.scss";
const generateOptions = (data) => {
  const categories = data.map((item) => moment(item.Date).format("DD/MM/YYYY"));
  return {
    chart: {
      type: "line",
      height: "500px",
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
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      spline: {
        lineWidth: 4,
        states: {
          hover: {
            lineWidth: 5,
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
        name: "ConfirmedCases",
        data: data.map((item) => item.Confirmed),
      },
      {
        name: "Recovered Cases",
        data: data.map((item) => item.Recovered),
      },
      {
        name: "Dead Cases",
        data: data.map((item) => item.Deaths),
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
};

export default function LineChart({ data }) {
  const [options, setOptions] = useState({});
  useEffect(() => {
    setOptions(generateOptions(data.slice(data.length - 31, data.length - 1)));
  }, [data]);

  return (
    <div id="container">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
