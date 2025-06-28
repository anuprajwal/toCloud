/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import teamData from '../data/teamdetails.json'

const TeamListCard = () => {
  return (
    <section className=" max-w-6xl mx-auto ">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Meet Our Team Members
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
  {teamData.map((member, index) => (
    <motion.div
      key={index}
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="teamcard" style={{
                boxShadow:
                  '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(147,51,234,0.7), 0 0 30px rgba(99,102,241,0.6)'
              }}
    >
      <img
        src={member.image}
        alt={member.name}
        className="mx-auto w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-500"
      />
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>

      <div className="flex justify-center gap-4 mt-2">
        {member.linkedin && (
          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
        )}
        {/* {member.twitter && (
          <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
        )} */}
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline">Email</a>
        )}
      </div>
    </motion.div>
  ))}
</div>

    </section>
  )
}

export default TeamListCard;