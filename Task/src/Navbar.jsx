import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "./Image/logo.jpeg";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <img src={logo} alt="Magic Windows Logo" className="h-12 w-auto" />

        {/* Menu */}
        <ul className="flex flex-wrap gap-7 text-sm font-medium text-gray-700" ref={dropdownRef}>
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/dashboard" className="hover:text-blue-600">MD Dashboard</Link></li>
          <li><Link to="/sales" className="hover:text-blue-600">Sales</Link></li>
          <li><Link to="/training" className="hover:text-blue-600">Training Module</Link></li>
          <li><Link to="/hr" className="hover:text-blue-600">HR</Link></li>

          {/* Dropdown - Accounts */}
          {/* <li className="relative">
            <button onClick={() => toggleDropdown("accounts")} className="hover:text-blue-600 flex items-center gap-1">
              Accounts <span className="text-blue-500">⬇️</span>
            </button>
            {openDropdown === "accounts" && (
              <ul className="absolute left-0 mt-2 bg-white border shadow-md rounded-md overflow-hidden">
                <li><Link to="/accounts/summary" className="block px-4 py-2 hover:bg-blue-100">Summary</Link></li>
                <li><Link to="/accounts/balance" className="block px-4 py-2 hover:bg-blue-100">Balance</Link></li>
              </ul>
            )}
          </li>  */}

          <li><Link to="/scorecard" className="hover:text-blue-600">Scorecard</Link></li>

          {/* Dropdown - Dashboard */}
            {/* <li>
                <button onClick={() => toggleDropdown("accounts")} className="hover:text-blue-600 flex items-center gap-1">
                    Accounts <span className="text-blue-500">⬇️</span>
                </button>
                {openDropdown === "accounts" && (
                    <ul className="absolute left-0 mt-2 bg-white border shadow-md rounded-md overflow-hidden">
                    <li><button onClick={() => window.dispatchEvent(new CustomEvent("setAccountsTab", { detail: "summary" }))} className="block w-full text-left px-4 py-2 hover:bg-blue-100">Summary</button></li>
                    <li><button onClick={() => window.dispatchEvent(new CustomEvent("setAccountsTab", { detail: "balance" }))} className="block w-full text-left px-4 py-2 hover:bg-blue-100">Balance</button></li>
                    </ul>
                )}
            </li> */}


          <li><Link to="/history" className="hover:text-blue-600">History</Link></li>
          <li><Link to="/more" className="hover:text-blue-600">More</Link></li>

          {/* Search icon */}
          <li>
            <button className="hover:text-blue-600 text-lg">🔍</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
