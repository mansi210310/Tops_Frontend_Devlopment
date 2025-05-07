// src/pages/More.jsx
import React from "react";

const More = () => {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold text-blue-700">More Resources</h2>

      <div className="bg-white shadow p-4 rounded-lg border">
        <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
        <ul className="list-disc list-inside text-blue-600">
          <li><a href="https://drive.google.com" target="_blank" rel="noreferrer">Google Drive</a></li>
          <li><a href="https://mail.google.com" target="_blank" rel="noreferrer">Gmail</a></li>
          <li><a href="#" target="_blank" rel="noreferrer">Company Folder</a></li>
        </ul>
      </div>

      <div className="bg-white shadow p-4 rounded-lg border">
        <h3 className="font-semibold text-lg mb-2">FAQs</h3>
        <p className="text-gray-700">Q: How to place an order?<br />A: Go to the Sales page and fill the form.</p>
        <p className="mt-2 text-gray-700">Q: Who to contact for login issues?<br />A: Contact IT via internal group.</p>
      </div>

      <div className="bg-white shadow p-4 rounded-lg border">
        <h3 className="font-semibold text-lg mb-2">Contact Admin</h3>
        <form className="space-y-2">
          <input type="text" placeholder="Your Name" className="w-full border px-3 py-2 rounded" />
          <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" />
          <textarea placeholder="Your Message" rows="3" className="w-full border px-3 py-2 rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default More;
