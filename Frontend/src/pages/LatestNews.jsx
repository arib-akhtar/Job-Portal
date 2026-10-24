import React from 'react';

const LatestNews = ({ 
  newsRef, 
  newsVisible = true, 
  news = [
    {
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      date: "Dec 24, 2025",
      author: "Ali Tufan",
      title: "12 Walkable Cities Where You Can Live Affordably"
    },
    {
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
      date: "Dec 24, 2025",
      author: "Ali Tufan",
      title: "Unveils The Best Canadian Cities For Biking"
    },
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      date: "Dec 24, 2025",
      author: "Ali Tufan",
      title: "Start An Online Business And Work From Home"
    },
    {
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
      date: "Dec 24, 2025",
      author: "Ali Tufan",
      title: "Front Becomes An Official Instagram Marketing Partner"
    }
  ], 
  sectionStyle = {} 
}) => (
  <div 
    ref={newsRef} 
    style={sectionStyle}
    className="optimized-section pt-8 sm:pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
  >
    <div className="flex justify-between items-end mb-4 sm:mb-6 flex-wrap gap-4 px-1">
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A2540] m-0 tracking-tight">Latest News</h2>
        <p className="text-sm sm:text-base text-[#5E6D77] mt-1.5 mb-0">People love working with Jobnetic</p>
      </div>
      <a 
        href="#news" 
        className="text-[#635BFF] text-sm sm:text-base font-semibold no-underline transition-colors duration-200 hover:text-[#3228ff]"
      >
        Explore More &rarr;
      </a>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mt-6 sm:mt-8">
      {news.map((item, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200 cursor-pointer border border-slate-100 flex flex-col justify-between"
        >
          <div className="overflow-hidden aspect-[16/10] bg-slate-100">
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              width="600"
              height="375"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
            <div>
              <p className="text-xs text-[#94a3b8] m-0">
                {item.date} · By {item.author}
              </p>
              <h4 className="font-semibold text-[#0A2540] mt-1.5 text-sm sm:text-base leading-snug">
                {item.title}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default LatestNews;