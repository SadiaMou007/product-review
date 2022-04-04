import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyLineChart = ({ data }) => {
  return (
    <div className="border-2">
      <h3 className="text-xl my-3 text-center">Month wise sell </h3>
      <LineChart width={400} height={400} data={data} margin={{ top: 5 }}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />

        <XAxis dataKey={"month"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey={"sell"} stroke="#8808d8"></Line>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
