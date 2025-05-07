import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from "recharts";

const scoreData = [
  { department: "Sales", score: 92 },
  { department: "Installation", score: 85 },
  { department: "Support", score: 78 },
  { department: "Accounts", score: 88 },
];

const trendData = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 140 },
  { month: "Mar", orders: 160 },
  { month: "Apr", orders: 180 },
];

const Scorecard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📈 Performance Scorecard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-100 p-4 rounded-xl shadow text-center">
          <p className="text-sm">🧑‍💼 Top Salesperson</p>
          <h2 className="text-xl font-semibold">Ravi Patel</h2>
        </div>
        <div className="bg-green-100 p-4 rounded-xl shadow text-center">
          <p className="text-sm">💰 Total Revenue</p>
          <h2 className="text-xl font-semibold">₹4,25,000</h2>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl shadow text-center">
          <p className="text-sm">📦 Orders Completed</p>
          <h2 className="text-xl font-semibold">152</h2>
        </div>
        <div className="bg-red-100 p-4 rounded-xl shadow text-center">
          <p className="text-sm">📉 Cancelled Orders</p>
          <h2 className="text-xl font-semibold">8</h2>
        </div>
      </div>

      {/* Department Performance */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-3">🏢 Department Performance</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={scoreData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="score" fill="#60a5fa" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Monthly Order Trend */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-3">📅 Monthly Orders Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Feedback Highlights */}
      <div>
        <h2 className="text-lg font-semibold mb-3">💬 Feedback Highlights</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>“Quick delivery and professional team. Really happy!”</li>
          <li>“Quality of windows was top-notch. Highly recommend.”</li>
          <li>“Sales team explained all product options clearly.”</li>
        </ul>
      </div>
    </div>
  );
};

export default Scorecard;
