/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import InfoBanner from './infobanner';

const Hero = () => {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 sm:py-32 bg-white dark:bg-gray-900">

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
        >
          Healthcare
          Without
          Barriers<br />

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-10"
        >
          Quality, multilingual, and affordable healthcare accessible to every Indian through our <span className='text-amber-300'>AI-powered digital platform</span>. Breaking language barriers, connecting communities
        </motion.p>

        <InfoBanner/>
         
        <div className="flex flex-wrap justify-center gap-8 py-6">
          <div className="herocards " >
            <h1 className="text-3xl font-bold text-blue-500">24/7</h1>
            <p className="text-gray-700 mt-2">Doctor Support</p>
          </div>

          <div className="herocards" >
            <h1 className="text-3xl font-bold text-blue-500">15+</h1>
            <p className="text-gray-700 mt-2">Languages</p>
          </div>

          <div className="herocards" >
            <h1 className="text-3xl font-bold text-blue-500">7+</h1>
            <p className="text-gray-700 mt-2">Cities Covered</p>
          </div>
        </div>


      </section>
      {/* <section className=''>
         <h1>image</h1>
      </section> */}
    </div>
  )
}

export default Hero;