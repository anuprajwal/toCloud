/* eslint-disable no-unused-vars */
import React from 'react'
import FeatureCards from '../components/FeatureCards'
import { motion } from 'framer-motion'

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="text-center px-6 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Everything You Need in One Platform</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          From patient registration to discharge planning, our comprehensive suite of tools covers every aspect of hospital management.
        </p>
        <FeatureCards />
      </section>
    </motion.div>
  )
}

export default Features;
