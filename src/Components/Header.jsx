import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X, Cpu, Code2, Database, Server } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.png"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Strategy", path: "/strategy" },

  
];

const Header = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // --- Dynamic Classes (Dark Theme Optimized) ---
  
  // Scrolled: Dark Background with Blur (Glassmorphism) | Top: Transparent
  const headerClasses = isScrolled
    ? "bg-[#0B1120]/90 backdrop-blur-md border-b border-gray-800 shadow-lg py-2"
    : "bg-transparent py-4";

  // Text Colors
  const textClasses = "text-gray-200"; 
  const hoverClasses = "hover:text-blue-400";
  
  // Logo Logic
  const logoIconBg = "bg-gradient-to-r from-blue-600 to-cyan-500 text-white";
  const logoTextMain = "text-white";
  const logoTextSub = "text-gray-400";

  const dropdownVariants = {
    hidden: { opacity: 0, y: 15, display: "none" },
    visible: { opacity: 1, y: 0, display: "block", transition: { duration: 0.2 } },
    exit: { opacity: 0, y: 15, transition: { duration: 0.2 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans ${headerClasses}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* --- Logo Section --- */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0 group">
            <img src={logo} className="h-12" alt="" />
            <div className="flex flex-col">
              <h1 className={`text-2xl font-bold leading-none tracking-tight ${logoTextMain}`}>
                IVISHA
              </h1>
              <span className={`text-[10px] font-bold tracking-widest uppercase ${logoTextSub}`}>
                Infotech Pvt. Ltd.
              </span>
            </div>
          </Link>

          {/* --- Desktop Navigation --- */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link, index) => {
              if (!link.children && !link.columns) {
                return (
                  <NavLink
                    key={index}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                        isActive 
                          ? "text-blue-400" 
                          : `${textClasses} ${hoverClasses}`
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              }

              return (
                <div
                  key={index}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button
                    className={`px-4 py-2 text-sm font-medium inline-flex items-center transition-colors duration-300 ${textClasses} ${hoverClasses}`}
                  >
                    {link.name}
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${hoveredIndex === index ? "rotate-180 text-blue-400" : ""}`} />
                  </button>

                  {/* Dropdown Menu (Dark Background) */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`absolute top-full mt-2 bg-[#151F32] border border-gray-700 shadow-2xl rounded-lg overflow-hidden z-20 ${
                          link.type === "dropdown-mega" ? "left-1/2 -translate-x-1/2 w-[600px]" : "left-0 w-64"
                        }`}
                      >
                         {/* Border Top Highlight */}
                         <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>

                        {/* Simple List Dropdown */}
                        {link.type === "dropdown-simple" && (
                          <div className="py-2">
                            {link.children.map((child, idx) => (
                              <Link
                                key={idx}
                                to={child.path}
                                className="block px-6 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-blue-400 transition-colors border-l-2 border-transparent hover:border-blue-500"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Mega Menu Dropdown */}
                        {link.type === "dropdown-mega" && (
                          <div className="p-6 grid grid-cols-3 gap-6 bg-[#151F32]">
                            {link.columns.map((col, colIdx) => (
                              <div key={colIdx}>
                                <div className="flex items-center mb-3 text-blue-400 border-b pb-2 border-gray-700">
                                  <col.icon size={16} className="mr-2" />
                                  <h3 className="text-xs font-bold uppercase tracking-wider">{col.heading}</h3>
                                </div>
                                <ul className="space-y-2">
                                  {col.items.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <Link to="/technologies" className="text-gray-400 hover:text-white text-sm transition-colors block hover:translate-x-1 transform duration-200">
                                        {item}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* --- Contact Button --- */}
          <div className="hidden md:flex items-center ml-6">
            <Link
              to="/contact"
              className={`px-6 py-2.5 text-sm font-bold rounded shadow-[0_0_15px_rgba(37,99,235,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 bg-blue-600 text-white hover:bg-blue-700`}
            >
              CONTACT US
            </Link>
          </div>

          {/* --- Mobile Menu Button --- */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className={`p-2 focus:outline-none text-white hover:text-blue-400`}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu Drawer (Dark Theme) --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1120] border-t border-gray-800 px-4 pt-4 pb-6 space-y-2 shadow-2xl overflow-y-auto max-h-[80vh]"
          >
            {navLinks.map((link, index) => (
              <div key={index}>
                {!link.children && !link.columns ? (
                  <Link to={link.path} onClick={toggleMobileMenu} className="block px-3 py-3 rounded-md text-base font-medium text-gray-200 hover:text-blue-400 hover:bg-white/5">
                    {link.name}
                  </Link>
                ) : (
                  <div className="space-y-1">
                    <div className="px-3 py-3 text-base font-bold text-white border-b border-gray-800">{link.name}</div>
                    <div className="pl-4 space-y-1">
                      {link.type === "dropdown-simple" && link.children.map((child, i) => (
                        <Link key={i} to={child.path} onClick={toggleMobileMenu} className="block py-2 px-2 text-sm text-gray-400 hover:text-blue-400 pl-4 border-l border-gray-800 hover:border-blue-500">
                          {child.name}
                        </Link>
                      ))}
                      {link.type === "dropdown-mega" && link.columns.map((col, j) => (
                         <div key={j} className="py-2">
                             <p className="text-xs font-bold text-blue-500 uppercase px-2 mb-1">{col.heading}</p>
                             {col.items.map((item, k) => (
                                 <Link key={k} to="/technologies" onClick={toggleMobileMenu} className="block py-1.5 px-2 text-sm text-gray-400 hover:text-white">
                                     {item}
                                 </Link>
                             ))}
                         </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
             <div className="pt-4 mt-2 border-t border-gray-800">
                <Link to="/contact" onClick={toggleMobileMenu} className="block w-full text-center px-6 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700">
                    CONTACT US
                </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;