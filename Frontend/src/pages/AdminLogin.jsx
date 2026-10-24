import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ShieldAlert } from 'lucide-react';
import API from '../utils/api'; // Same API instance

function AdminLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        email: formData.email,
        password: formData.password,
      };

      const response = await API.post("/admin/login", payload);

      if (response.data.success) {
        // 🔑 Token save karo
        localStorage.setItem('token', response.data.token);
        
        // 🔑 User object bhi save karo taaki App.jsx ka ProtectedRoute allow kare
        const adminUser = {
          _id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          role: response.data.role // 'admin'
        };
        localStorage.setItem('user', JSON.stringify(adminUser));

        alert("Admin Login Successful!");
        
        // Seedha admin dashboard par redirect
        navigate('/admin/dashboard'); 
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Access Denied: Invalid admin credentials.');
    }
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center py-6 sm:py-8">
      <div className="grid w-full max-w-6xl gap-6 lg:gap-8 lg:grid-cols-[1.05fr_0.95fr] px-4 sm:px-6">
        
        {/* Left Card - Admin Specific Copy */}
        <div className="rounded-[28px] bg-gradient-to-r from-[#d3c4f5] via-[#9795f3] to-[#3c47c8] p-6 sm:p-10 text-black shadow-[0_20px_50px_rgba(15,23,42,0.15)] border border-white/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2.5">
               <ShieldAlert className="h-5 w-5 sm:h-6 sm:w-6 text-black" />
               <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-black">System Command</p>
            </div>
            <h1 className="mt-3 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-black tracking-tight leading-tight">Admin Control Center.</h1>
            <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-black/90">
              Authorized personnel only. Monitor live revenue, global traffic, enterprise partners, and isolate network threats in real-time.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 rounded-2xl border border-black/15 bg-white/20 p-4 backdrop-blur">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-black">
              <span className="h-2 w-2 rounded-full bg-slate-900 animate-pulse" />
              Secure Connection Status
            </div>
            <div className="mt-3 grid gap-2 text-xs sm:text-sm text-black sm:grid-cols-2">
              <div className="rounded-xl bg-white/20 px-3 py-2">Entity Matrix Access</div>
              <div className="rounded-xl bg-white/20 px-3 py-2">Global Broadcasts</div>
            </div>
          </div>
        </div>

        {/* Right Card - Login Form */}
        <div className="glass-card p-6 sm:p-8 rounded-[28px] bg-white shadow-lg border border-slate-100 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-slate-800">System Login</h2>
            <p className="mt-2 text-sm text-slate-500">Enter your master credentials to access the nexus.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-2 space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Admin Email</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@example.com"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 text-slate-800"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">Master Password</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 text-slate-800"
                />
              </div>
            </div>

            <button
              type="submit"
              className="relative mt-6 isolate overflow-hidden flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#d3c4f5] via-[#9795f3] to-[#3c47c8] px-4 py-3 font-semibold text-white transition-all duration-300 shadow-md before:absolute before:inset-0 before:bg-[#0a2540] before:opacity-0 before:transition-opacity before:duration-400 before:ease-in-out hover:before:opacity-100 before:-z-10 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <LogIn className="h-5 w-5" />
                Authenticate Request
              </span>
            </button>
            
            <div className="mt-8 text-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
              Restricted Area • JobPortal Core Network
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;