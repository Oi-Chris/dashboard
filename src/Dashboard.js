import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { subDays, startOfMonth, endOfMonth, format } from 'date-fns';

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
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Dashboard;