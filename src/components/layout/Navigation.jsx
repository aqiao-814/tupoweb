import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Learn more", href: "/learn" },
    { title: "Coming soon", href: "/soon" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Hamburger Menu */}
        <button
          onClick={() => setIsNavOpen((prev) => !prev)}
          className="text-white z-50"
        >
          {!isNavOpen ? (
            <div className="space-y-2">
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
              <span className="block h-0.5 w-8 bg-white"></span>
            </div>
          ) : (
            <svg
              className="h-8 w-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>

        {/* Logo Text */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <h1 className="text-2xl font-bold text-white">TUPO</h1>
          </Link>
        </div>

        {/* Company Logo */}
        <Link to="/" className="w-8 h-8 hover:opacity-80 transition-opacity">
          <img
            src="/tupo no text.png"
            alt="Tupo Logo"
            className="w-full h-full object-contain invert"
          />
        </Link>

        {/* Mobile Menu */}
        <motion.div
          initial="closed"
          animate={isNavOpen ? "open" : "closed"}
          variants={menuVariants}
          className={`fixed inset-0 bg-black ${
            isNavOpen ? "flex" : "hidden"
          } flex-col items-center justify-center`}
        >
          <ul className="space-y-8 text-center">
            {menuItems.map((item) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-2xl"
              >
                <Link
                  to={item.href}
                  className="text-white hover:text-gray-400 transition-colors"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}
