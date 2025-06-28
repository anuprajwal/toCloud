/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 ">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide">DOCAPP</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-lg font-medium">
          <a href="#hero" onClick={closeMenu} className="hover:text-green-500 transition-colors">Home</a>
          <a href="#patients" onClick={closeMenu} className="hover:text-green-500 transition-colors">Patients</a>
             <a href="#doctors" onClick={closeMenu} className="block text-lg hover:text-green-500">Doctors</a>
          <a href="#features" onClick={closeMenu} className="hover:text-green-500 transition-colors">Features</a>
          {/* <a href="#testimonials" onClick={closeMenu} className="hover:text-green-500 transition-colors">Testimonials</a> */}
          <a href="#about" onClick={closeMenu} className="hover:text-green-500 transition-colors">About</a>
          <a href="#team" onClick={closeMenu} className="hover:text-green-500 transition-colors">Team</a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={toggleMenu} className="">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobilenavbar">
          <a href="#hero" onClick={closeMenu} className="block text-lg hover:text-green-500">Home</a>
          <a href="#patients" onClick={closeMenu} className="block text-lg hover:text-green-500">Patients</a>
          <a href="#doctors" onClick={closeMenu} className="block text-lg hover:text-green-500">Doctors</a>
          <a href="#features" onClick={closeMenu} className="block text-lg hover:text-green-500">Features</a>
          {/* <a href="#testimonials" onClick={closeMenu} className="block text-lg hover:text-green-500">Testimonials</a> */}
          <a href="#about" onClick={closeMenu} className="block text-lg hover:text-green-500">About</a>
          <a href="#team" onClick={closeMenu} className="block text-lg hover:text-green-500">Team</a>
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
