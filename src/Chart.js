import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from './response.json'

const Chart = () => {
    const [fuelData, setFuelData] = useState([]);

    useEffect(() => {
      
      const formattedData = data.map(entry => ({
        fuelLevel: entry.fuel_level,
        time: new Date(entry.timestamp).toLocaleTimeString(), 
        speed: entry.speed,
        latitude: entry.location.latitude,
        longitude: entry.location.longitude
      }));
      
      setFuelData(formattedData);
    }, []);
    return (
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={fuelData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="fuelLevel" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="speed" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      );
}

export default Chart
