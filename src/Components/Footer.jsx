import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, ChevronRight, Cpu } from "lucide-react";

import logo from "../assets/logo.png"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ✅ Header wale exact navLinks
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Strategy", path: "/strategy" },
  ];

  return (
    <footer className="bg-[#020617] text-gray-400 border-t border-gray-800 font-sans relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* --- Column 1: Company Info --- */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} className="h-12" alt="" />
              <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                IVISHA INFOTECH
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500">
             In an era where businesses depend heavily on digital performance, system reliability, and data-driven operations, infrastructure is no longer optional - it is strategic. IVISHA INFOTECH was established to design and implement the foundational systems that allow enterprises to operate efficiently, scale confidently, and innovate sustainably.

            </p>
          </div>

          {/* --- Column 2: Quick Links (Updated) --- */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm flex items-center hover:text-blue-400 transition-colors group"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-2 text-gray-600 group-hover:text-blue-500 transition-colors"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Column 3: Services --- */}
         

          {/* --- Column 4: Contact Info --- */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3 group">
                <Mail className="mt-1 w-5 h-5 text-blue-500 group-hover:text-blue-400 transition-colors shrink-0" />
                <div>
                  <span className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                    Email Support
                  </span>
                  <a
                    href="mailto:support@ivishainfotech.in"
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    support@ivishainfotech.in
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-3 group">
                <MapPin className="mt-1 w-5 h-5 text-orange-500 group-hover:text-orange-400 transition-colors shrink-0" />
                <div>
                  <span className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                    Headquarters
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                    4819/24 3rd Floor, Ansari Road, <br />
                    Darya Ganj, Central Delhi, <br />
                    New Delhi - 110002, India
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="bg-[#01040f] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-xs text-gray-600 text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-gray-400 font-medium">
              IVISHA INFOTECH PRIVATE LIMITED
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link
              to="/privacy-policy"
              className="text-xs text-gray-500 hover:text-blue-400 transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-xs text-gray-500 hover:text-blue-400 transition-colors font-medium"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
