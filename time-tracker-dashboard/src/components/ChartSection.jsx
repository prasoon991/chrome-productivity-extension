import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function ChartSection({ logs }) {
  const totalTimePerSite = {};

  logs.forEach((log) => {
    const site = log.site;
    const time = log.timeSpent || 0;
    totalTimePerSite[site] = (totalTimePerSite[site] || 0) + time;
  });

  const chartData = Object.entries(totalTimePerSite).map(([site, timeSpent]) => ({
    site,
    minutes: Math.floor(timeSpent / 60000),
  }));

  return (
    <div className="bg-white border-2 border-black shadow-3xl rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-4xl">
      <h2 className="text-3xl font-extrabold text-orange-600 text-center mb-6 underline decoration-orange-600 drop-shadow-lg tracking-wide leading-tight">
        ⏱ Website Usage (Minutes)
      </h2>

      {chartData.length === 0 ? (
        <p className="text-center text-gray-600">No data available.</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <XAxis dataKey="site" stroke="#000000" tick={{ fill: '#000000', fontWeight: 'bold' }} />
            <YAxis 
              stroke="#000000" 
              tick={{ fill: '#000000', fontWeight: 'bold' }} 
              label={{ value: 'Minutes', angle: -90, position: 'insideLeft', fill: '#000000', fontWeight: 'bold', fontSize: 14 }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#2563EB', borderRadius: '0', borderColor: '#2563EB', padding: '10px' }} 
              itemStyle={{ color: '#FFFFFF', fontWeight: 'bold', fontSize: '18px', textShadow: '0 0 5px rgba(255,255,255,1)', lineHeight: '1.5' }} 
            />
            <Bar dataKey="minutes" fill="#F97316" radius={[6, 6, 0, 0]} animationDuration={1500} className="transition-transform duration-500 ease-in-out hover:scale-110" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ChartSection;
