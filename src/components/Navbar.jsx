// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Stock Insight
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          className={`md:flex space-x-4 md:static absolute w-full md:w-auto left-0 bg-gray-900 md:bg-transparent md:p-0 p-4 top-16 md:top-auto transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden"}`}
        >
          <li className="py-2 md:py-0">
            <Link to="/" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/dashboard" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          </li>
          <li className="py-2 md:py-0">
            <Link to="/blank" className="hover:text-blue-400" onClick={() => setIsOpen(false)}>
              Insights
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
