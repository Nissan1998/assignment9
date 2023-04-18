import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import DetailsBanner from "../DetailsBanner/DetailsBanner";

const Statistics = () => {
  const data = [
    {
      name: "Assignment 1",
      ObtainMark: 55,
      pv: 60,
      amt: 55,
    },
    {
      name: "Assignment 2",
      ObtainMark: 58,
      pv: 60,
      amt: 60,
    },
    {
      name: "Assignment 3",
      ObtainMark: 60,
      pv: 60,
      amt: 60,
    },
    {
      name: "Assignment 4",
      ObtainMark: 58,
      pv: 60,
      amt: 60,
    },
    {
      name: "Assignment 5",
      ObtainMark: 60,
      pv: 60,
      amt: 60,
    },
    {
      name: "Assignment 6",
      ObtainMark: 57,
      pv: 60,
      amt: 60,
    },
    {
      name: "Assignment 7",
      ObtainMark: 60,
      pv: 60,
      amt: 60,
    },
    {
      name: "Assignment 8",
      ObtainMark: 60,
      pv: 60,
      amt: 60,
    },
  ];
  return (
    <div>
      <div className="mx-5">
        <DetailsBanner Children={"Assignment Analytics"}></DetailsBanner>
      </div>
      <h2 className="text-center -mt-2">
        Total Average :- <span className="text-xl font-bold">58.50</span>
      </h2>
      <div className="flex justify-center mt-2">
        <div>
          <AreaChart
            width={1000}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />

            <YAxis />
            <Tooltip />
            <Legend></Legend>
            <Area
              type="monotone"
              dataKey="ObtainMark"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
