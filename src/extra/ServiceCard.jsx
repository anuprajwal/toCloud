/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

const ServiceCard = ({ icon: Icon, title, description, borderColor, iconColor, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`border-l-4 ${borderColor} bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="flex items-center mb-4">
        <Icon className={`h-8 w-8 ${iconColor} mr-3`} />
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

export default ServiceCard; 