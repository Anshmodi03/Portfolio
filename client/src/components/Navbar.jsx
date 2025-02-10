// Navbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Change navbar background when scrolling past 50px
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for the underline animation on nav items
  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 },
  };

  // Variants for mobile menu slide animation
  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-3 b flex items-center justify-between">
        {/* Logo and Brand */}
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img
            src="/Portfoliologo.png"
            alt="Logo"
            className="w-12 h-12 object-cover"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="relative text-lg text-gray-300 hover:text-white transition-colors border-b-2 border-transparent hover:border-white pb-1"
              initial="initial"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              <motion.span
                className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 origin-left"
                variants={underlineVariants}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Semi-transparent backdrop */}
            <div
              className="absolute inset-0 bg-black opacity-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="absolute top-0 right-0 w-72 h-full bg-black/90 shadow-lg p-6"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-white">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-300 hover:text-white focus:outline-none"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="relative text-gray-300 hover:text-white transition-colors"
                    initial="initial"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    <motion.span
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 origin-left"
                      variants={underlineVariants}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
