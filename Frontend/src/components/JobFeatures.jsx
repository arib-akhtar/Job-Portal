import React from 'react';
import { FiUsers, FiSearch, FiFileText, FiDollarSign } from 'react-icons/fi';

const JobFeatures = () => {
  const features = [
    {
      icon: <FiUsers className="w-6 h-6 sm:w-7 sm:h-7 text-[#9795f3]" />,
      title: "Join your work community",
      description: "Browse curated listings tailored all in one smart platform."
    },
    {
      icon: <FiSearch className="w-6 h-6 sm:w-7 sm:h-7 text-[#9795f3]" />,
      title: "Find and apply to jobs",
      description: "Browse curated listings tailored all in one smart platform."
    },
    {
      icon: <FiFileText className="w-6 h-6 sm:w-7 sm:h-7 text-[#9795f3]" />,
      title: "Search company reviews",
      description: "Browse curated listings tailored all in one smart platform."
    },
    {
      icon: <FiDollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-[#9795f3]" />,
      title: "Compare salaries",
      description: "Browse curated listings tailored all in one smart platform."
    }
  ];

  return (
    <section className="relative z-20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-3 p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-xs sm:bg-transparent border border-slate-100 sm:border-transparent shadow-xs sm:shadow-none hover:bg-white/80 sm:hover:bg-white/60 transition-colors duration-200"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-r from-[#d3c4f5]/30 via-[#9795f3]/30 to-[#3c47c8]/30 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">{item.title}</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs sm:max-w-none">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobFeatures;