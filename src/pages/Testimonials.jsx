/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import testimonials from '../data/testimonials.json';
import FeedbackForm from '../components/FeedbackForm'; 

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-6xl mx-auto px-6 py-20"
    >
      <h1 className="text-4xl font-bold text-center mb-4">Trusted by Healthcare Professionals</h1>
      <p className="text-center mb-10">
        Don't just take our word for it. Here's what doctors, patients, and healthcare administrators are saying about our platform.
      </p>

      <div className="flex justify-center mb-10">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openForm}
        >
          Connect with us
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="card" style={{
                boxShadow:
                  '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(147,51,234,0.7), 0 0 30px rgba(99,102,241,0.6)'
              }}
          >
            {/* <h1>⭐⭐⭐⭐⭐</h1> */}
            <p className="italic mb-4">"{item.quote}"</p>
            <p className="text-blue-600 font-semibold">{item.name}</p>
            <p className="text-sm">{item.role}, {item.organization}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal Overlay */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="relative max-w-xl w-full mx-4">
            <FeedbackForm />

            {/* Close Button */}
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Testimonials;
