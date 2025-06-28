/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'

const ServiceSection = ({ icon: Icon, title, subtitle, services, borderColor, iconColor, delayIcon, delayCards }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: delayIcon }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
          style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }} // blue-900/30 fallback
        >
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </motion.div>
        <h3 className="text-3xl font-semibold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-400">{subtitle}</p>
      </div>
      <div className="space-y-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            borderColor={borderColor}
            iconColor={iconColor}
            delay={delayCards + index * 0.1}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default ServiceSection;