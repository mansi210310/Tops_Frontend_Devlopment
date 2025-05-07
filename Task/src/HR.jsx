import React from 'react';

const HR = () => {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">👥 Human Resources</h1>

      {/* Employee List */}
      <section className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📋 Employee Directory</h2>
        <table className="w-full table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left">Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="p-2">Ankit Shah</td>
              <td className="p-2">Production Manager</td>
              <td className="p-2">+91 98765 43210</td>
            </tr>
            <tr>
              <td className="p-2">Meera Patel</td>
              <td className="p-2">HR Executive</td>
              <td className="p-2">+91 98765 12345</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Leave Request Form */}
      <section className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📝 Leave Request</h2>
        <form className="grid gap-4 md:grid-cols-2">
          <input type="text" placeholder="Employee Name" className="p-2 border rounded" />
          <input type="email" placeholder="Email Address" className="p-2 border rounded" />
          <input type="date" placeholder="From Date" className="p-2 border rounded" />
          <input type="date" placeholder="To Date" className="p-2 border rounded" />
          <textarea placeholder="Reason" className="md:col-span-2 p-2 border rounded h-24" />
          <button className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Submit Request
          </button>
        </form>
      </section>

      {/* Holiday Calendar */}
      <section className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📅 Holiday Calendar</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>26 Jan – Republic Day</li>
          <li>18 Mar – Holi</li>
          <li>15 Aug – Independence Day</li>
          <li>2 Oct – Gandhi Jayanti</li>
          <li>25 Dec – Christmas</li>
        </ul>
      </section>

      {/* Announcements */}
      <section className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📢 Announcements</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-700">
          <li>All staff meeting on Friday at 11:00 AM.</li>
          <li>New uniforms to be distributed next week.</li>
          <li>Team building event scheduled for 20th April.</li>
        </ul>
      </section>

      {/* Resume Upload & Jobs */}
      <section className="bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📁 Resume Upload & Internal Jobs</h2>

        {/* Upload */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-700">Upload Your Resume</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
          <p className="mt-1 text-xs text-gray-500">Supported formats: PDF, DOC, DOCX (Max 2MB)</p>
        </div>

        {/* Jobs */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">📌 Open Positions</h3>
          <ul className="list-disc ml-6 text-sm space-y-2 text-gray-700">
            <li><strong>📦 Inventory Manager</strong> – Full-time, Apply by 15th April.</li>
            <li><strong>🎨 Product Designer</strong> – Part-time, Flexible hours.</li>
            <li><strong>📞 Customer Support Lead</strong> – Urgent Hiring.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HR;
