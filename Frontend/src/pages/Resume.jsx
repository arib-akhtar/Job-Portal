import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

const Resume = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // 🛡️ Recruiter check logic
    const userString = localStorage.getItem('user');
    const currentUser = userString ? JSON.parse(userString) : null;

    if (!currentUser) {
      alert("Please login first to upload your resume.");
      navigate('/login');
      return;
    }

    if (currentUser.role?.trim().toLowerCase() === 'recruiter') {
      alert("Access Denied: You are logged in as a Recruiter. Please login as a Seeker to upload your resume.");
      e.target.value = null; // Clear file input
      return;
    }

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await API.post("/seeker/resume", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert(response.data.message || "Resume uploaded successfully and linked to your profile!");
    } catch (error) {
      console.error("Upload error:", error);
      if (error.response && error.response.status === 401) {
        alert("Please login first to upload your resume.");
        navigate('/login');
      } else {
        alert(error.response?.data?.message || "Failed to upload resume. Please try again.");
      }
    } finally {
      e.target.value = null;
    }
  };

  const handleButtonClick = () => {
    // Click hone se pehle bhi role check kar sakte hain taaki file dialog open hi na ho agar recruiter ho
    const userString = localStorage.getItem('user');
    const currentUser = userString ? JSON.parse(userString) : null;

    if (!currentUser) {
      alert("Please login first to upload your resume.");
      navigate('/login');
      return;
    }

    if (currentUser.role?.trim().toLowerCase() === 'recruiter') {
      alert("Access Denied: You are logged in as a Recruiter. Please login as a Seeker to upload your resume.");
      return;
    }

    fileInputRef.current.click();
  };

  return (
    <div className="optimized-section w-full max-w-[1480px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16">
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center bg-white rounded-3xl sm:rounded-[32px] p-6 sm:p-10 md:p-12 lg:p-14 xl:px-16 xl:py-14 shadow-sm border border-slate-200/90 overflow-hidden">
        
        {/* Model Image - Hidden on mobile, cleanly anchored to bottom on desktop & tablet */}
        <div className="hidden md:flex w-full h-full justify-center items-end self-end md:order-first relative md:-mb-12 lg:-mb-14 xl:-mb-14">
          <img
            src="/sir4.png"
            alt="Resume Review"
            loading="lazy"
            width="480"
            height="430"
            className="w-full max-w-[380px] lg:max-w-[440px] xl:max-w-[480px] h-auto object-contain object-bottom self-end transition-transform duration-300 hover:scale-[1.01] block"
          />
        </div>

        <div className="text-left space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold text-[#0A2540] leading-tight tracking-tight">
            Get a free professional<br className="hidden sm:inline" /> resume review
          </h2>
          <p className="text-[#5E6D77] text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
            Upload your resume to see how it performs with recruiters and applicant tracking systems.
            Get a personalized score and expert feedback that's fast, free, and actionable.
          </p>
          <button
            onClick={handleButtonClick}
            className="relative isolate overflow-hidden bg-gradient-to-r from-[#d3c4f5] via-[#9795f3] to-[#3c47c8] text-slate-900 font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base shadow-md transition-transform duration-200 hover:scale-[1.02] cursor-pointer flex items-center gap-2"
          >
            <span>Upload Your CV &rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Resume;