/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="changefooter bg-white dark:bg-[#0d0f23] py-10 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700 dark:text-white mb-4">DOCAPP</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Revolutionizing hospital management with seamless solutions for professionals and patients.
          </p>
        </div>

        {/* Quick Links + Explore */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 dark:text-white mb-4">Quick Links</h3>
          <div className="flex flex-wrap gap-8">
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#hero" className="hover:text-green-600 dark:hover:text-green-400">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-600 dark:hover:text-green-400">About</a>
              </li>
              <li>
                <a href="#team" className="hover:text-green-600 dark:hover:text-green-400">Team</a>
              </li>
              <li>
                <a href="#features" className="hover:text-green-600 dark:hover:text-green-400">Features</a>
              </li>
            </ul>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#patients" className="hover:text-green-600 dark:hover:text-green-400">Patients</a>
              </li>
              <li>
                <a href="#doctors" className="hover:text-green-600 dark:hover:text-green-400">Doctors</a>
              </li>
              {/* <li>
                <a href="#testimonials" className="hover:text-green-600 dark:hover:text-green-400">Testimonials</a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 dark:text-white mb-4">Contact Us</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Email: <a href="mailto:support@docapp.com" className="hover:text-green-600 dark:hover:text-green-400">founder@docapp.co.in</a>
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-blue-100 dark:border-gray-700 mt-10 pt-4 text-center text-sm text-blue-700 dark:text-gray-500">
        <p>© {new Date().getFullYear()} DOCAPP. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
