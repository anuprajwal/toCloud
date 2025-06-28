import React from 'react';
import features from '../data/fordocandpatients.json';
import WhyDifferentSection from './WhyDifferentSection';

const ForPatients = () => {
  return (
    <section className="text-center py-16 px-4 bg-[#0d0f23] text-white">
      <h2 className="text-4xl font-bold text-blue-400 mb-4">
        What Can Patients Do on DocApp.com?
      </h2>
      <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
        A comprehensive healthcare ecosystem designed to solve real problems patients face daily
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="patientbenefitcard">
            {/* Only icon glows */}
            <div className="text-5xl mb-4 mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
             style={{
                boxShadow:
                  '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(147,51,234,0.7), 0 0 30px rgba(99,102,241,0.6)'
              }}>
              <div className="inline-block text-blue-400 group-hover:drop-shadow-[0_0_12px_#3b82f6]">
                {feature.icon}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-blue-300 mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
      <WhyDifferentSection/>
    </section>
    
  );
};

export default ForPatients;
