import React from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";
const MyBarChart = ({ data }) => {
  return (
    <div className="border-2">
      <h3 className="text-xl my-3 text-center">Investment vs Revenue</h3>

      <BarChart width={400} height={400} data={data}>
        <Bar dataKey="investment" stackId="a" fill="#7722f8" />
        <Bar dataKey="revenue" stackId="a" fill="#8ff4d8" />

        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </BarChart>
    </div>
  );
};

export default MyBarChart;
