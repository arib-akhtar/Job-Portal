import React from 'react';

const Categories = ({ 
  categoriesRef, 
  categories = [
    { name: "Graphics & Design", jobs: 4, icon: "🎨" },
    { name: "Digital Marketing", jobs: 4, icon: "📈" },
    { name: "Writing & Translation", jobs: 0, icon: "✍️" },
    { name: "Music & Audio", jobs: 1, icon: "🎵" },
    { name: "Programming & Tech", jobs: 8, icon: "💻" },
    { name: "Video & Animation", jobs: 3, icon: "🎬" }
  ], 
  sectionStyle = {} 
}) => {
  const scrollingCategories = [...categories, ...categories, ...categories];

  return (
    <div 
      ref={categoriesRef} 
      style={sectionStyle}
      className="optimized-section pt-6 sm:pt-8 overflow-hidden bg-white rounded-3xl mt-6 sm:mt-8 pb-8 sm:pb-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-slate-200/80 shadow-md"
    >
      <div className="flex justify-between items-end mb-6 sm:mb-8 flex-wrap gap-4 px-1">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0f172a] m-0 tracking-tight">
            Browse Jobs By Category
          </h2>
          <p className="text-sm sm:text-base text-[#64748b] mt-1.5 mb-0">Find Jobs from 100+ Categories</p>
        </div>
        <a 
          href="#categories" 
          className="text-[#2563eb] text-sm sm:text-base font-semibold no-underline flex items-center gap-1.5 transition-colors duration-200 hover:text-[#1d4ed8]"
        >
          Explore All Categories &rarr;
        </a>
      </div>

      <div
        className="flex gap-4 sm:gap-6 w-max pl-1 will-change-transform"
        style={{
          animation: "scrollRightToLeft 28s linear infinite",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = "paused"; }}
        onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = "running"; }}
      >
        {scrollingCategories.map((cat, index) => (
          <div
            key={`${cat.name}-${index}`}
            className="bg-[#edf3ff] p-5 sm:p-7 rounded-2xl shadow-xs border border-[#d2e3fc] transition-all duration-300 ease-out cursor-pointer text-center min-w-[180px] sm:min-w-[210px] shrink-0 hover:shadow-md hover:-translate-y-1 hover:border-[#2563eb]/40"
          >
            <div className="text-4xl sm:text-5xl drop-shadow-xs">
              {cat.icon}
            </div>
            <h3 className="text-base sm:text-lg font-bold mt-3 text-[#0f172a]">
              {cat.name}
            </h3>
            <p className="text-[#2563eb] text-xs sm:text-sm font-semibold mt-1">
              {cat.jobs} Jobs Available
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;