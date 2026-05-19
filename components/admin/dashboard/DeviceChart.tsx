"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: 'Mobile', value: 68 },
  { name: 'Desktop', value: 28 },
  { name: 'Tablet', value: 4 },
];

const COLORS = ['#f97316', '#3b82f6', '#10b981'];

export default function DeviceChart() {
  return (
    <div className="h-full w-full flex flex-col">
      <h3 className="text-lg font-bold text-navy-900 mb-4">Clicks by Device</h3>
      <div className="flex-1 min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ fontWeight: 600 }}
              formatter={(value) => `${value}%`}
            />
            <Legend verticalAlign="bottom" height={36} iconType="circle" />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-8">
          <span className="text-2xl font-bold text-navy-900">45k</span>
          <span className="text-xs text-text-muted">Total Clicks</span>
        </div>
      </div>
    </div>
  );
}
