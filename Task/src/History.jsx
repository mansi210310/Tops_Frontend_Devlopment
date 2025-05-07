// src/pages/History.jsx
import React from "react";

const History = () => {
  const logs = [
    { date: "2025-04-01", action: "Order Placed", person: "Ravi Shah", notes: "Window A - Qty: 2" },
    { date: "2025-04-02", action: "Payment Received", person: "Neha Patel", notes: "Advance cleared" },
    { date: "2025-04-03", action: "Order Dispatched", person: "Sanjay", notes: "Via DTDC" },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Activity History</h2>
      <div className="overflow-x-auto shadow border rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Action</th>
              <th className="px-4 py-2 text-left">Person</th>
              <th className="px-4 py-2 text-left">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {logs.map((log, idx) => (
              <tr key={idx} className="hover:bg-blue-50">
                <td className="px-4 py-2">{log.date}</td>
                <td className="px-4 py-2">{log.action}</td>
                <td className="px-4 py-2">{log.person}</td>
                <td className="px-4 py-2">{log.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
