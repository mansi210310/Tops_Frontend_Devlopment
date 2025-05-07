import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import heroImg from "./Image/hero-bg1.jpg";
import img1 from "./Image/modern-glass.jpg";
import img2 from "./Image/contact-bg.jpg";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [zoomIndex, setZoomIndex] = useState(null);

  const openModal = (img) => {
    setModalImg(img);  
    setIsModalOpen(true);
  };

  const products = [
    {
      img: img1,
      title: "Sliding Glass Door",
      desc: "Modern sliding design with maximum visibility.",
    },
    {
      img: img2,
      title: "Patio Door",
      desc: "Elegant design for modern spaces.",
    },
  ];

  return (
    <div className="px-6 py-8 space-y-10">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-700">
          Welcome to Magic Windows – Redefining furniture and fittings.
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We craft premium windows, doors, and furniture. Serving quality across Ahmedabad.
        </p>
        <img
          src={heroImg}
          alt="Hero"
          className="mx-auto rounded-lg shadow-lg max-h-96 object-cover"
        />
      </div>

      {/* Product Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
            <div className="relative">
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className={`w-full h-64 object-cover transition-transform duration-500 ${
                  zoomIndex === index ? "scale-110" : "scale-100"
                }`}
              />

              {/* Hover Icons */}
              <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button
                  onMouseEnter={() => setZoomIndex(index)}
                  onMouseLeave={() => setZoomIndex(null)}
                  onClick={() => openModal(item.img)}
                  className="bg-white p-2 rounded-full shadow hover:scale-110"
                >
                  🔍
                </button>
                <Link
                  to="/HR"
                  className="bg-white p-2 rounded-full shadow hover:scale-110"
                >
                  🔗
                </Link>
              </div>
            </div>

            {/* Bottom text area */}
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-4 py-3 backdrop-blur-sm z-0">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-black text-2xl hover:scale-125"
            >
              &times;
            </button>
            <img
              src={modalImg}
              alt="Zoom"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}

      {/* Achievements */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {
          [
            { label: "Clients", end: 200 },
            { label: "Projects", end: 300 },
            { label: "Support", end: 24 },
            { label: "Employees", end: 100 },
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 p-4 rounded-lg shadow-sm">
              <p className="text-2xl font-bold text-blue-600">
                <CountUp end={item.end} duration={2} />{item.label === "Support" ? "/7" : "+"}
              </p>
              <p className="text-sm">{item.label}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
