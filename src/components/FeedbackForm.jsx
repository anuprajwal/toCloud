/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FeedbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Feedback:', formData);
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', rating: '', comments: '' });
    if (onClose) onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="feedbackform"
    >
     

      <h1 className="text-4xl font-bold text-center mb-6 text-blue-400">Connect with us</h1>
      <p className="text-center mb-8 text-gray-300">
        We value your feedback. Please let us know about your experience.
      </p>

      <form onSubmit={handleSubmit} className="space-y-1">
        <div>
          <label className="float-left text-black mb-2 text-xl" htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="float-left text-black mb-2 text-xl" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full"
            placeholder="Your Email"
          />
        </div>

        {/* <div>
          <label className="float-left text-gray-300 mb-2" htmlFor="rating">Rating</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
            className="w-full"
          >
            <option value="">Select a rating</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Very Good</option>
            <option value="3">⭐⭐⭐ Good</option>
            <option value="2">⭐⭐ Fair</option>
            <option value="1">⭐ Poor</option>
          </select>
        </div> */}

        <div>
          <label className="float-left text-black mb-2 text-xl" htmlFor="comments">Message</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="w-full"
            placeholder="Your Message..."
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full"
        >
          Submit 
        </motion.button>
      </form>
    </motion.div>
  );
};

export default FeedbackForm;
