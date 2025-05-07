import React from 'react';

const Training = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🧠 Training Module</h1>

      {/* Resources */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📂 Training Resources</h2>
        <ul className="list-disc ml-6 space-y-4">

          {/* Google Sheet */}
          <li>
            <span className="font-medium">View: Training Sheet</span>
            <div className="mt-2 border rounded-lg overflow-hidden">
              <iframe
                src="https://docs.google.com/spreadsheets/d/1gc3UsXMveEs7qEPrw2NT_6uOlDQT7ZdlIxhJ27DlZGo/edit?gid=0#gid=0"
                width="100%"
                height="400"
                title="Training Sheet"
              ></iframe>
            </div>
          </li>

          {/* YouTube Video Card */}
          <li>
            <span className="font-medium">Watch: Product Installation Video</span>
            <div className="mt-2 max-w-md rounded overflow-hidden shadow-lg border hover:shadow-xl transition duration-300">
              <a
                href="https://youtu.be/hU3kR4cQv_s?si=IT_xlCaFefIrwPLg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://youtube.com/shorts/P28SSEXZfQY?si=NpM7ypFyUnXtYOWs"
                  alt="Installation Video"
                  className="w-full"
                />
                <div className="px-4 py-2 bg-white">
                  <p className="text-sm font-semibold text-blue-600">▶️ Installation Video – Watch Now</p>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </section>

      {/* How to measure a window */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📏 How to Measure a Window</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Measure width from left to right (top, middle, bottom).</li>
          <li>Measure height from top to bottom (left, center, right).</li>
          <li>Note the smallest width & height as final size.</li>
          <li>Record measurements in mm or inches clearly.</li>
        </ol>
      </section>

      {/* Product material explanation */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🪵 Product Materials</h2>
        <p>
          We use high-quality materials like teak wood, aluminum, UPVC, and glass. Each material has different
          strength, finish, and weather resistance.
        </p>
      </section>

      {/* Checklist or Quiz */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Checklist Before Installation</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Measurement confirmed with customer</li>
          <li>Material checked and loaded properly</li>
          <li>Team aware of location & client preferences</li>
          <li>All tools and safety gear available</li>
        </ul>
      </section>
    </div>
  );
};

export default Training;
