import React, { useEffect } from 'react';

const FreelancerSection = ({ 
  sectionStyle = {}, 
  freelancerFeatures = [
    { title: "Create a Standout Profile", desc: "Add your best work, skills, and certifications to attract premium clients." },
    { title: "Get Personalized Job Matches", desc: "Receive project suggestions that fit your expertise and preferences." },
    { title: "Apply Instantly", desc: "Send tailored proposals with a single click save time, win more work." },
    { title: "Grow & Get Paid Securely", desc: "Deliver quality work, receive reviews, and enjoy fast, secure payments." }
  ] 
}) => {
  return (
    <div style={sectionStyle} className="optimized-section pt-8 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-transparent rounded-3xl p-4 sm:p-8 md:p-10 relative overflow-hidden">
        
        {/* Left Side: Text, Features Grid & Buttons */}
        <div>
          {/* Animated Company Image placed cleanly above the heading */}
          <div className="mb-4 w-12 h-12 sm:w-14 sm:h-14">
            <img 
              src="/animated image.png" 
              alt="Decoration" 
              width="56"
              height="56"
              loading="lazy"
              className="w-full h-full object-contain drop-shadow-xs"
            />
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2540] leading-tight tracking-tight">
            Your Next Opportunity, <br className="hidden sm:inline" />One Click Away
          </h2>
          <p className="text-[#5E6D77] my-3 sm:my-4 text-sm sm:text-base leading-relaxed">
            Showcase Your Skills, Get Matched With Projects You Love, And Build A Successful Freelance Career.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 my-6">
            {freelancerFeatures.map((item, i) => (
              <div
                key={i}
                className="p-3.5 sm:p-4 rounded-xl bg-slate-50/60 sm:bg-transparent border border-slate-100 sm:border-transparent transition-colors duration-200 cursor-default hover:bg-white hover:shadow-xs"
              >
                <div className="bg-gradient-to-r from-[#d3c4f5] via-[#9795f3] to-[#3c47c8] bg-clip-text text-transparent text-xl sm:text-2xl mb-1.5 font-bold">&#x2713;</div>
                <h4 className="font-semibold text-[#0A2540] m-0 text-sm sm:text-base">{item.title}</h4>
                <p className="text-xs sm:text-sm text-[#5E6D77] mt-1 m-0 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-3 sm:gap-4 mt-6 sm:mt-8 flex-wrap">
            <button
              className="py-3 px-6 sm:px-8 bg-gradient-to-r from-[#d3c4f5] via-[#9795f3] to-[#3c47c8] text-slate-900 border-none rounded-xl font-semibold text-sm sm:text-base cursor-pointer transition-transform duration-200 shadow-md hover:scale-[1.02]"
            >
              Start Earning Today &rarr;
            </button>
            <button
              className="py-3 px-6 sm:px-8 bg-transparent text-[#635BFF] border-2 border-[#635BFF] rounded-xl font-semibold text-sm sm:text-base cursor-pointer transition-all duration-200 hover:bg-[#f1f5f9] hover:scale-[1.02]"
            >
              Get Job Alerts
            </button>
          </div>
        </div>

        {/* Right Side: Image matching reference layout */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-[500px]">
            <img
              src="https://demoapus1.com/jobnetic/wp-content/uploads/2025/10/h67.jpg"
              alt="Freelancer"
              loading="lazy"
              width="500"
              height="380"
              className="w-full h-auto rounded-2xl sm:rounded-3xl shadow-lg object-cover transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FreelancerSection;