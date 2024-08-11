import React, { useState } from 'react';
import Dashboard from './Dashboard';

const DashboardContainer = () => {
    const [selectedDashboard, setSelectedDashboard] = useState('main');

    const dashboards = {
        main: {
            name: 'Main Dashbaord',
            charts: ['LineChart', 'BarChart']
        },
        sales: {
            name: 'Sales Dashboard',
            charts: ['PieChart', 'AreaChart']
        },
    };

    return (
        <div>
            <h1>Dashbaord Selector</h1>
            <select
                value={selectedDashboard}
                onChange={(e) => setSelectedDashboard(e.target.value)}>
                
                {Object.keys(dashboards).map(key => (
                    <option key={key} value={key}>{dashboards[key].name}</option>
                ))}
            </select>

            <Dashboard
                name={dashboards[selectedDashboard].name}
                charts={dashboards[selectedDashboard].charts}/>
        </div>
    );
};

export default DashboardContainer;