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
  console.log(data);
  return (
    <div>
      <LineChart width={400} height={400} data={data} margin={{ top: 5 }}>
        <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />

        <XAxis dataKey={"month"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line dataKey={"investment"} stroke="#8884d8"></Line>
        <Line dataKey={"sell"} stroke="#8808d8"></Line>
        <Line dataKey={"revenue"} stroke="#88f4d8"></Line>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
