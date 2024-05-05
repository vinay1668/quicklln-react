import React from "react";
import "./Insights.css";
import { Typography, Box } from "@mui/material";
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
const Insights = () => {

  return (
    <div >
      <div className="insightsHeading">
        <Typography variant="h4">
          Insights
        </Typography>
        <select defaultValue="Last 7 days" className="durationSelect">
          <option>Last 7 days</option>
          <option>This month</option>
          <option>This Quarter</option>
          <option>This year</option>
        </select>
      </div>
      <div className="dashboard">
        <Box className="box">
          <Typography variant="h5">Total Sales</Typography>
          <Typography variant="h4" className="data">
            ₹ 5,450.00
          </Typography>
        </Box>
        <Box className="box">
          <Typography variant="h5">Total Appointments</Typography>
          <Typography variant="h4" className="data">
            70
          </Typography>
        </Box>
        <Box className="box">
          <Typography variant="h5">New Appointments</Typography>
          <Typography variant="h4" className="data">
            12
          </Typography>
        </Box>
        <Box className="box">
          <Typography variant="h5">Recurring Appointments</Typography>
          <Typography variant="h4" className="data">
            09
          </Typography>
        </Box>
      </div>
      <div className="overview">
        <Typography variant="h5">Weekly sales overview</Typography>
        <Bars></Bars>
      </div>
    </div>
  );
};

export default Insights;

const data = [
  { "week": "Sun", "price": 5500 },
  { "week": "Mon", "price": 1200 },
  { "week": "Tue", "price": 1000 },
  { "week": "Wed", "price": 1200 },
  { "week": "Thu", "price": 2000 },
  { "week": "Fri", "price": 1200 },
  { "week": "Sat", "price": 5000 }
];

const valueFormatter = (value) => `₹${value}`;
const chartSetting = {
  yAxis: [],
  series: [{ dataKey: 'price', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};
const Bars = () => {

  return (
    <div style={{ width: '100%' }}>
      
      <BarChart
        dataset={data}
        xAxis={[
          { scaleType: 'band', dataKey: 'week', tickPlacement:'middle', tickLabelPlacement:'middle'},
        ]}
        {...chartSetting}
      />
    </div>
  );
}