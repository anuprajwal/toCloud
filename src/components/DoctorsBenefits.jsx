import React from 'react';
import benefitsData from '../data/doctorsBenefits.json'; 
import CompanyStats from './CompanyStats';

const DoctorsBenefits = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        How Doctors Benefit
      </h2>
      <p className="text-lg mb-8 text-[#ccc]">
        Join 200+ doctors who are already preparing for India's most innovative healthcare platform
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefitsData.map((item, index) => (
          <div
            key={index}
            className="doctorbenfit"
          >
            <div
              className="text-5xl mb-4 mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg"
              style={{
                boxShadow:
                  '0 0 10px rgba(99,102,241,0.8), 0 0 20px rgba(147,51,234,0.7), 0 0 30px rgba(99,102,241,0.6)'
              }}
            >
              {item.icon}
            </div>

            <div className="flex items-center justify-center mb-2 mt-4">
              <span className="text-lg font-semibold">{item.title}</span>
              <span className="ml-2 text-xs bg-green-600 text-white rounded-full px-3 py-1">
                {item.badge}
              </span>
            </div>
            <p className="text-sm text-[#aaa]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DoctorsBenefits;
