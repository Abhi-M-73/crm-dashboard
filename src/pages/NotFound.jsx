import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  ArrowLeft,
  Compass,
  FolderGit2,
  CalendarCheck,
  Users,
  Search
} from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#F4EFEA] flex items-center justify-center p-4 sm:p-6 lg:p-10 font-sans antialiased text-stone-800">
      
      {/* Outer Floating Layered Card */}
      <div className="relative w-full max-w-2xl">
        
        {/* Decorative Background Depth Layers */}
        <div className="absolute -bottom-3 left-6 right-6 top-6 rounded-[40px] bg-[#D8CEC2]/70 shadow-sm z-0" />
        <div className="absolute -bottom-1.5 left-3 right-3 top-3 rounded-[40px] bg-[#E7DFD5]/90 border border-stone-200/50 shadow-sm z-[1]" />

        {/* Main Card */}
        <div className="relative z-10 overflow-hidden rounded-[40px] bg-white border border-stone-200/80 p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] text-center">
          
          {/* Brand Badge */}
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl bg-[#1E5642] text-white shadow-sm mb-6">
            <span className="text-lg font-bold leading-none">✤</span>
          </div>

          {/* Big Stylized 404 */}
          <div className="relative inline-block mb-3">
            <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-stone-900 select-none">
              4<span className="text-[#EA580C]">0</span>4
            </h1>
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 tracking-tight mt-2">
            Lost in the Workspace?
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-md mx-auto mt-2 leading-relaxed">
            The page or feature route you are trying to access doesn't exist, has been moved, or sprint permissions have changed.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 rounded-2xl border border-stone-200 bg-[#FAF8F5] px-5 py-3 text-xs font-bold text-stone-700 hover:bg-stone-100 transition active:scale-[0.98]"
            >
              <ArrowLeft size={15} />
              <span>Go Back</span>
            </button>

            <Link
              to="/user/dashboard"
              className="flex items-center gap-2 rounded-2xl bg-[#EA580C] px-6 py-3 text-xs font-bold text-white shadow-sm hover:bg-[#d94e07] transition active:scale-[0.98]"
            >
              <Home size={15} />
              <span>Go to Dashboard</span>
            </Link>
          </div>

          {/* Quick Helpful Destinations */}
          <div className="mt-10 pt-6 border-t border-stone-100">
            <p className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-3">
              Popular Destinations
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-md mx-auto text-left">
              <Link
                to="/projects"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-stone-100/80 border border-stone-100 text-xs font-semibold text-stone-700 transition"
              >
                <div className="w-6 h-6 rounded-lg bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0">
                  <FolderGit2 size={13} />
                </div>
                <span>Projects</span>
              </Link>

              <Link
                to="/attendance"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-stone-100/80 border border-stone-100 text-xs font-semibold text-stone-700 transition"
              >
                <div className="w-6 h-6 rounded-lg bg-[#E1EBE6] text-[#1E5642] flex items-center justify-center shrink-0">
                  <CalendarCheck size={13} />
                </div>
                <span>Attendance</span>
              </Link>

              <Link
                to="/team"
                className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FAF8F5] hover:bg-stone-100/80 border border-stone-100 text-xs font-semibold text-stone-700 transition"
              >
                <div className="w-6 h-6 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
                  <Users size={13} />
                </div>
                <span>Team Pod</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NotFound;