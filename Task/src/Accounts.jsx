import React, { useState } from "react";

const Accounts = () => {
  const [view, setView] = useState("summary");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Accounts Overview</h1>

      {/* Dropdown selector */}
      <div className="mb-6">
        <label htmlFor="viewSelector" className="mr-2 font-medium text-gray-700">
          Select View:
        </label>
        <select
          id="viewSelector"
          value={view}
          onChange={(e) => setView(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="summary">Summary</option>
          <option value="balance">Balance</option>
        </select>
      </div>

      {/* Summary Section */}
      {view === "summary" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-green-800">Revenue</h2>
            <p className="text-2xl font-bold text-green-900 mt-2">₹6,00,000</p>
          </div>
          <div className="bg-red-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-red-800">Expenses</h2>
            <p className="text-2xl font-bold text-red-900 mt-2">₹2,20,000</p>
          </div>
          <div className="bg-blue-100 p-4 rounded shadow">
            <h2 className="text-lg font-semibold text-blue-800">Profit</h2>
            <p className="text-2xl font-bold text-blue-900 mt-2">₹3,80,000</p>
          </div>
        </div>
      )}

      {/* Balance Section */}
      {view === "balance" && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4">🏦 Account Balances</h2>
          <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="px-4 py-2">Bank</th>
                <th className="px-4 py-2">Account Number</th>
                <th className="px-4 py-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">HDFC Bank</td>
                <td className="px-4 py-2">XXXX-1234</td>
                <td className="px-4 py-2 text-green-600 font-semibold">₹2,10,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">SBI</td>
                <td className="px-4 py-2">XXXX-5678</td>
                <td className="px-4 py-2 text-green-600 font-semibold">₹1,75,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">ICICI</td>
                <td className="px-4 py-2">XXXX-9012</td>
                <td className="px-4 py-2 text-green-600 font-semibold">₹95,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Accounts;
