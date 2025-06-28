/* eslint-disable no-unused-vars */
import React from 'react'
import TeamListCard from '../components/TeamlistCard'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="about"
    >
      {/* Hero Title */}
      <header className="aboutTittle">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-800 dark:text-white tracking-wide"
        >
          About <span className="text-blue-600">DOCAPP</span>
        </motion.h1>
      </header>

      {/* Mission & Features */}
      <section className="px-6 py-14 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="featurecard" style={{
                boxShadow:
                  '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(147,51,234,0.7), 0 0 30px rgba(99,102,241,0.6)'
              }}
        >
          <h2 className="text-3xl font-semibold mb-5 text-blue-600 tracking-wide">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200 mb-5">
            At DocApp, we believe that technology should enhance human connection, not replace it.
            Our mission is to create seamless digital experiences that empower healthcare providers
            to deliver exceptional care while giving patients the tools they need to take control of their health journey.
          </p>
          <ul className="space-y-5 text-lg text-gray-300">
            {[
              { title: '', desc: 'Empower patients with easy access to doctors, medicines, and diagnostics.' },
              { title: '', desc: 'Support doctors with tech, branding, and faster payouts — helping them grow.' },
              { title: '', desc: 'Leverage AI for smart, efficient, and real-time multilingual healthcare experiences.' },
              { title: '', desc: 'Partner with hospitals, labs, and insurance to create a unified ecosystem.' },
              { title: '', desc: 'Reach Bharat — the underserved cities and towns left behind by existing platforms.' },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-justify">
                <span className="text-green-400 mt-1">✔️</span>
                <span className="hover:text-blue-400 transition-colors duration-200">
                  {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Why Choose Us Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="featurecard" style={{
                boxShadow:
                  '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(147,51,234,0.7), 0 0 30px rgba(99,102,241,0.6)'
              }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-400 tracking-wide">
            Why Choose Us?
          </h2>

          <ul className="space-y-5 text-lg text-gray-300">
            {[
              { title: 'HIPAA Compliant', desc: 'Bank-level security for all patient data' },
              { title: 'Easy Integration', desc: 'Seamless setup with existing systems' },
              { title: '1 hour Medicine Delivery', desc: 'Get your medicines delivered fast and hassle-free, right to your doorstep.' },
              { title: 'Surgery Travel Assistance', desc: 'Need to travel for treatment? We handle everything, hospital booking, flights, hotels, local travel, and even a personal assistant to guide you.' },

              { title: ' 24/7 Doctor Access, Anytime, Anywhere', desc: 'Connect instantly with trusted doctors across specialties  even at midnight' },
              { title: 'Instant Lab Test Bookings', desc: 'Book blood tests, diagnostics, or health checkups from nearby certified labs in minutes.' },
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-justify">
                <span className="text-green-400 mt-1">✔️</span>
                <span className="hover:text-blue-400 transition-colors duration-200">
                  <strong>{item.title}:</strong> {item.desc}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>


      </section>
    </motion.div>
  )
}

export default About;