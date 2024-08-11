import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filterRange, setFilterRange] = useState('30');

  useEffect(() => {
    fetchData();
  }, [filterRange]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/data?range=${filterRange}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <select value={filterRange} onChange={(e) => setFilterRange(e.target.value)}>
        <option value="LAST_90_DAYS">Last 30 days</option>
        <option value="LAST_60_DAYS">Last 60 days</option>
        <option value="LAST_30_DAYS">Last 90 days</option>
        <option value="CURRENT_MONTH">Current month</option>
      </select>
      {charts.map((chart, index) => (
        <div key={index}>
          <h3>{chart}</h3>
          {renderChart(chart)}
        </div>
      ))}
    </div>
  );
};

export default Dashboard;