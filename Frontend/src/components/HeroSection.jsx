import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiZap } from 'react-icons/fi';
import { FaFigma, FaWordpress, FaMedium, FaSketch } from 'react-icons/fa';

const HeroSection = ({ user: propUser }) => {
  const imageRef = useRef(null);
  const rafRef = useRef(null);

  // Agar prop se user na mile, toh direct localStorage se read kar lega
  const user = propUser || (() => {
    try {
      const saved = localStorage.getItem('user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  })();

  const userRole = user?.role?.toLowerCase();

  // High-performance RAF mouse move to prevent React re-renders and main thread lag
  const handleMouseMove = (e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const { clientX, clientY, currentTarget } = e;
    rafRef.current = requestAnimationFrame(() => {
      if (!imageRef.current) return;
      const rect = currentTarget.getBoundingClientRect();
      const x = (clientX - (rect.left + rect.width / 2)) / 25;
      const y = (clientY - (rect.top + rect.height / 2)) / 25;
      imageRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (imageRef.current) {
      imageRef.current.style.transform = 'translate3d(0, 0, 0)';
    }
  };

  return (
    <div className="bg-transparent font-sans overflow-hidden relative pt-4 pb-10 sm:pb-16 lg:pb-20">
      
      {/* Lightweight Hardware-Accelerated Ambient Glow without heavy CPU blur rasterization */}
      <div 
        aria-hidden="true"
        className="absolute top-0 right-1/4 w-80 sm:w-96 h-80 sm:h-96 rounded-full pointer-events-none -z-10 opacity-70"
        style={{
          background: 'radial-gradient(circle, rgba(211,196,245,0.45) 0%, rgba(211,196,245,0) 70%)'
        }}
      />
      <div 
        aria-hidden="true"
        className="absolute top-10 left-10 w-80 sm:w-96 h-80 sm:h-96 rounded-full pointer-events-none -z-10 opacity-60"
        style={{
          background: 'radial-gradient(circle, rgba(234,240,254,0.6) 0%, rgba(234,240,254,0) 70%)'
        }}
      />
      <div 
        aria-hidden="true"
        className="absolute top-1/4 right-10 w-72 sm:w-80 h-72 sm:h-80 rounded-full pointer-events-none -z-10 opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(151,149,243,0.35) 0%, rgba(151,149,243,0) 70%)'
        }}
      />

      <section id="hero" className="relative pt-6 sm:pt-10 lg:pt-12 px-4 sm:px-6 lg:px-12 bg-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Instant Paint for optimal FCP & LCP */}
          <div className="md:col-span-7 space-y-5 sm:space-y-6 z-10 text-left pr-0 md:pr-6">
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] font-bold text-[#0f172a] tracking-tight leading-[1.15]">
              Your Next Role, Just <br className="hidden sm:inline" />
              One Click <span className="inline-flex items-center justify-center bg-white text-[#1e293b] p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl mx-1 align-middle shadow-md border border-slate-100"><FiZap className="w-4 h-4 sm:w-6 sm:h-6 text-[#2563eb]" /></span> Away
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#475569] max-w-xl font-normal leading-relaxed">
              {userRole === 'recruiter' 
                ? 'Post new job listings and manage applicant submissions smoothly.' 
                : userRole === 'seeker' 
                ? 'Discover jobs that fit your goals and track your applications easily.' 
                : 'Discover Jobs That Fit Your Goals'}
            </p>

            {/* Role-Based Conditioned Action Buttons */}
            <div className="flex flex-row items-center justify-start gap-3 sm:gap-4 pt-1 sm:pt-2 flex-wrap">
              
              {userRole === 'recruiter' ? (
                <Link 
                  to="/post-job" 
                  className="relative isolate overflow-hidden bg-gradient-to-r from-[#d3c4f5] via-[#9795f3] to-[#3c47c8] text-white font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-md shadow-indigo-500/20 transition-transform duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Post a Job &gt;</span>
                </Link>
              ) : userRole === 'seeker' ? (
                <Link 
                  to="/seeker" 
                  className="relative isolate overflow-hidden bg-gradient-to-r from-[#d3c4f5] via-[#9795f3] to-[#3c47c8] text-white font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-md shadow-indigo-500/20 transition-transform duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span className="relative z-10">Find Your Dream Job &gt;</span>
                </Link>
              ) : (
                <>
                  <Link 
                    to="/seeker" 
                    className="relative isolate overflow-hidden bg-gradient-to-r from-[#d3c4f5] via-[#9795f3] to-[#3c47c8] text-white font-semibold px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-md shadow-indigo-500/20 transition-transform duration-200 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Find Your Dream Job &gt;</span>
                  </Link>
                  <Link 
                    to="/post-job" 
                    className="relative isolate overflow-hidden bg-white hover:bg-slate-50 text-[#1e293b] border border-[#e2e8f0] font-medium px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base transition-transform duration-200 hover:scale-[1.02] shadow-sm flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">Post a Job &gt;</span>
                  </Link>
                </>
              )}

            </div>

            {/* Trusted Companies */}
            <div className="pt-6 sm:pt-8 space-y-3">
              <p className="text-[11px] sm:text-[12px] font-medium text-[#64748b] tracking-wider uppercase">
                Trusted by 10,000+ companies worldwide
              </p>
              <div className="flex flex-wrap items-center justify-start gap-4 sm:gap-6 text-[#94a3b8] text-xl sm:text-2xl">
                <FaFigma className="hover:text-[#1e293b] transition-colors cursor-pointer" />
                <FaWordpress className="hover:text-[#1e293b] transition-colors cursor-pointer" />
                <FaMedium className="hover:text-[#1e293b] transition-colors cursor-pointer" />
                <FaSketch className="hover:text-[#1e293b] transition-colors cursor-pointer" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0f172a] text-white flex items-center justify-center text-xs font-bold">in</div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#fbbf24] text-[#0f172a] flex items-center justify-center text-xs font-bold">✨</div>
              </div>
            </div>

          </div>

          {/* Right Side 3D Image Banner */}
          <div 
            className="md:col-span-5 relative hidden md:flex justify-center items-center py-6 lg:py-8"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Soft, Diffused Purple Glow / Halo Effect Directly Behind the 3D Symbol */}
            <div 
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[460px] lg:w-[560px] xl:w-[620px] aspect-square rounded-full pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(151,149,243,0.75) 0%, rgba(134,59,255,0.45) 40%, rgba(60,71,200,0.18) 62%, transparent 72%)',
                filter: 'blur(50px)',
              }}
            />
            {/* Luminous Inner Core for Depth and Pop */}
            <div 
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[300px] lg:w-[380px] aspect-square rounded-full pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(211,196,245,0.9) 0%, rgba(151,149,243,0.6) 45%, transparent 70%)',
                filter: 'blur(35px)',
              }}
            />
            
            {/* Significantly Enlarged 3D Geometric Structure Container */}
            <div 
              ref={imageRef}
              className="relative w-full max-w-[460px] sm:max-w-[520px] lg:max-w-[600px] xl:max-w-[660px] aspect-square flex items-center justify-center transition-transform duration-200 ease-out will-change-transform"
            >
              <img 
                src="/animated image.png" 
                alt="3D Job Portal Banner" 
                width="640"
                height="640"
                fetchPriority="high"
                className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(60,71,200,0.3)] drop-shadow-[0_6px_16px_rgba(151,149,243,0.4)] scale-125 lg:scale-125 xl:scale-125 origin-center"
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection;
