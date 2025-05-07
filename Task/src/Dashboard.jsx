import React, { useState } from "react";

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    contact: "",
    product: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.address && formData.contact && formData.product) {
      setOrders((prev) => [...prev, { ...formData, status: "Pending" }]);
      setFormData({ name: "", address: "", contact: "", product: "" });
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">MD Dashboard - Order Form</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Contact</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-gray-700">Product</label>
          <select
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">Select Product</option>
            <option value="Window A">Window A</option>
            <option value="Door B">Door B</option>
            <option value="Sliding C">Sliding C</option>
            <option value="Partition D">Partition D</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Order
        </button>
      </form>

      {/* Table */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Order Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm">
            <thead className="bg-blue-100 text-left">
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Product</th>
                <th className="px-4 py-2 border">Contact</th>
                <th className="px-4 py-2 border">Address</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{idx + 1}</td>
                  <td className="px-4 py-2 border">{order.name}</td>
                  <td className="px-4 py-2 border">{order.product}</td>
                  <td className="px-4 py-2 border">{order.contact}</td>
                  <td className="px-4 py-2 border">{order.address}</td>
                  <td className="px-4 py-2 border text-yellow-600">{order.status}</td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-4 text-gray-500">
                    No orders submitted yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
