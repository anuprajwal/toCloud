/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import featuresData from '../data/featuresCard.json';

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 " >
      {Object.entries(featuresData).map(([category, items]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card" style={{
                boxShadow:
                  '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(147,51,234,0.7), 0 0 30px rgba(99,102,241,0.6)'
              }}
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-6">{category}</h3>
          <ul className="space-y-4 text-base text-gray-300 mx-auto max-w-xl">
  {items.map((item, index) => (
    <li
      key={index}
      className="flex items-start gap-3 text-justify"
    >
      <span className="text-green-400 mt-1">✔️</span>
      <span>{item}</span>
    </li>
  ))}
</ul>


        </motion.div>
      ))}
    </div>
  )
}

export default FeatureCards;