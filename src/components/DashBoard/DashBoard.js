import React, { useEffect, useState } from "react";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";

const DashBoard = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChartData(data));
  }, []);

  return (
    <div className="m-8 p-2 grid md:grid-cols-2 ">
      <MyLineChart data={chartData}></MyLineChart>

      <MyBarChart data={chartData}></MyBarChart>
    </div>
  );
};

export default DashBoard;
