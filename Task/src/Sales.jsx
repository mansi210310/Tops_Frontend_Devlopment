import React, { useState } from "react";

const Sales = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Ravi Patel",
      product: "Window A",
      quantity: 2,
      status: "Delivered",
    },
    {
      id: 2,
      customer: "Meena Shah",
      product: "Door B",
      quantity: 1,
      status: "Pending",
    },
  ]);

  const [newOrder, setNewOrder] = useState({
    customer: "",
    product: "",
    quantity: 1,
    status: "Pending",
  });

  const handleChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderWithId = { ...newOrder, id: Date.now() };
    setOrders([...orders, orderWithId]);
    setNewOrder({ customer: "", product: "", quantity: 1, status: "Pending" });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Sales & Orders</h1>

      {/* Orders Table */}
      <div className="overflow-x-auto mb-8">
        <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
          <thead className="bg-blue-100 text-blue-700">
            <tr>
              <th className="py-3 px-4 text-left">Customer</th>
              <th className="py-3 px-4 text-left">Product</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-t hover:bg-gray-100">
                <td className="py-2 px-4">{order.customer}</td>
                <td className="py-2 px-4">{order.product}</td>
                <td className="py-2 px-4">{order.quantity}</td>
                <td className="py-2 px-4">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add New Order Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md max-w-xl"
      >
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Add New Order</h2>

        <div className="mb-4">
          <label className="block font-medium mb-1">Customer Name</label>
          <input
            type="text"
            name="customer"
            value={newOrder.customer}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Product</label>
          <select
            name="product"
            value={newOrder.product}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select Product</option>
            <option value="Window A">Window A</option>
            <option value="Door B">Door B</option>
            <option value="Table C">Table C</option>
            <option value="Chair D">Chair D</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={newOrder.quantity}
            onChange={handleChange}
            min="1"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-1">Status</label>
          <select
            name="status"
            value={newOrder.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Order
        </button>
      </form>
    </div>
  );
};

export default Sales;
