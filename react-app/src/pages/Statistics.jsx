// src/pages/Statistics.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const donationData = [
  { month: "Jan", donations: 2000 },
  { month: "Feb", donations: 2500 },
  { month: "Mar", donations: 3000 },
  { month: "Apr", donations: 4000 },
  { month: "May", donations: 6000 },
  { month: "Jun", donations: 7500 },
];

const hungerData = [
  { name: "Food Secure", value: 65 },
  { name: "Moderate Hunger", value: 25 },
  { name: "Severe Hunger", value: 10 },
];

const COLORS = ["#16a34a", "#fbbf24", "#dc2626"];

export default function Statistics() {
  return (
    <section className="flex flex-col items-center justify-center py-16 px-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-10 text-center">
        Hunger & Donation Statistics 📈
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Line Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Donations Trend (KES)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={donationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="donations" stroke="#16a34a" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            Food Security Levels
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={hungerData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {hungerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
