import React from 'react';
import { useSelector } from 'react-redux';
import {
  Calendar,
  ChevronDown,
  Bell,
  Settings,
  Edit3,
  Briefcase,
  Clock,
  Award,
  MoreHorizontal,
  CheckCircle2,
  AlertCircle,
  Timer,
  ChevronLeft,
  ChevronRight,
  FolderGit2,
  Users
} from 'lucide-react';

const UserDashboard = () => {
  const { user } = useSelector((state) => state.auth || {});

  const employeeName = user?.username || 'Claire Horington';
  const employeeRole = user?.designation || 'Senior Frontend Engineer';

  return (
    <div className="min-h-screen rounded-2xl p-6 font-sans text-stone-800 antialiased">
      <div className="max-w-[1500px] mx-auto space-y-6">

        {/* MAIN CONTENT GRID */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 space-y-6">
            <div className="pt-2 pb-1">
              <p className="text-xs font-semibold text-stone-500 tracking-wide uppercase">
                Here is your daily activity and sprint overview
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#194E3A] tracking-tight mt-1">
                Welcome back, {employeeName.split(' ')[0]}!
              </h1>
            </div>

            {/* WEEKLY WORKING HOURS GRAPH */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-800">Working Hours Tracker</h3>
                  <p className="text-[11px] text-stone-400">Total logged: 38.5 hrs this week</p>
                </div>
                
                <div className="flex items-center gap-5 text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-stone-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--secondary)]" /> Actual Hours
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" /> Target Hours
                  </span>
                  
                  <div className="flex items-center gap-1 border border-stone-200 px-2.5 py-1 rounded-full text-[11px] text-stone-500 bg-stone-50 cursor-pointer">
                    <span>This Week</span>
                    <ChevronDown size={12} />
                  </div>
                </div>
              </div>

              {/* Working Hours SVG Graph */}
              <div className="relative pt-2">
                <div className="flex gap-4">
                  <div className="flex flex-col justify-between text-[11px] font-semibold text-stone-400 h-44 pr-2 pb-5">
                    <span>10h</span>
                    <span>8h</span>
                    <span>6h</span>
                    <span>4h</span>
                    <span>2h</span>
                  </div>

                  <div className="relative flex-1 h-44 border-b border-stone-200 pb-5">
                    <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="employeeHoursGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#F97316" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#F97316" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Area Fill Target */}
                      <path
                        d="M 10 90 Q 60 75 110 80 T 210 70 T 310 85 T 410 75 T 490 70 L 490 145 L 10 145 Z"
                        fill="url(#employeeHoursGrad)"
                      />

                      {/* Orange Target Line */}
                      <path
                        d="M 10 90 Q 60 75 110 80 T 210 70 T 310 85 T 410 75 T 490 70"
                        fill="none"
                        stroke="#F97316"
                        strokeWidth="2.5"
                      />

                      {/* Green Actual Logged Line */}
                      <path
                        d="M 10 110 Q 70 80 140 60 T 255 45 T 350 85 T 450 40 T 490 60"
                        fill="none"
                        stroke="var(--secondary)"
                        strokeWidth="2.5"
                      />

                      {/* Highlight Marker */}
                      <line x1="255" y1="45" x2="255" y2="145" stroke="var(--secondary)" strokeDasharray="3 3" strokeWidth="1.5" />
                      <circle cx="255" cy="45" r="4.5" fill="var(--secondary)" stroke="#fff" strokeWidth="2" />
                    </svg>

                    {/* Metric Tooltip badge */}
                    <div className="absolute top-[22%] left-[51%] -translate-x-1/2 -translate-y-full bg-white/95 backdrop-blur-sm border border-stone-200 px-2.5 py-1 rounded-lg shadow text-[11px] font-bold text-stone-800">
                      Wed: 8.8 hrs
                    </div>
                  </div>
                </div>

                {/* Day Axis */}
                <div className="flex justify-between items-center text-[11px] text-stone-400 pl-14 pr-2 mt-2 font-medium">
                  <ChevronLeft size={14} className="cursor-pointer hover:text-stone-700" />
                  <span>Mon</span>
                  <span>Tue</span>
                  <span className="text-stone-900 font-bold">Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                  <ChevronRight size={14} className="cursor-pointer hover:text-stone-700" />
                </div>
              </div>
            </div>

            {/* ATTENDANCE & ACTIVE TASKS */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

              {/* ATTENDANCE CARD */}
              <div className="md:col-span-6 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-bold text-stone-800">Attendance</h3>
                    <span className="text-[11px] text-stone-400">September 2026</span>
                  </div>
                  <div className="flex items-center gap-1 border border-stone-200 px-2.5 py-1 rounded-full text-[11px] text-stone-500 bg-stone-50 cursor-pointer">
                    <span>Monthly</span>
                    <ChevronDown size={12} />
                  </div>
                </div>

                {/* Concentric Gauge */}
                <div className="relative w-40 h-40 mx-auto my-3 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#FEE8D8" strokeWidth="8" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="8"
                      strokeDasharray="314"
                      strokeDashoffset="65"
                      strokeLinecap="round"
                    />

                    <circle cx="60" cy="60" r="38" fill="none" stroke="var(--secondary-100)" strokeWidth="8" />
                    <circle
                      cx="60"
                      cy="60"
                      r="38"
                      fill="none"
                      stroke="var(--secondary)"
                      strokeWidth="8"
                      strokeDasharray="238"
                      strokeDashoffset="25"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-black text-stone-800">94%</span>
                    <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wider">Present</span>
                  </div>
                </div>

                {/* Footer Legend */}
                <div className="flex items-center justify-around text-center pt-2">
                  <div>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-stone-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--secondary)]" /> 21 Days
                    </div>
                    <span className="text-[10px] text-stone-400">Present (On Time)</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-stone-800">
                      <span className="w-2.5 h-2.5 rounded-full bg-[var(--primary)]" /> 01 Day
                    </div>
                    <span className="text-[10px] text-stone-400">Approved Leave</span>
                  </div>
                </div>
              </div>

              {/* ACTIVE TASKS CARD */}
              <div className="md:col-span-6 bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-stone-800">Assigned Tasks</h3>
                  <button className="text-stone-400 hover:text-stone-700">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[var(--primary-50)] flex items-center justify-center text-[var(--primary)]">
                        <CheckCircle2 size={19} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-800 leading-tight">API Auth Refactoring</h4>
                        <span className="text-[10px] text-stone-400">Due: Tomorrow, 5 PM</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[var(--secondary-50)] text-[var(--secondary-600)] border border-[var(--secondary-100)]">
                      In Review
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[var(--primary-50)] flex items-center justify-center text-[var(--primary)]">
                        <Timer size={19} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-800 leading-tight">Payment Webhooks</h4>
                        <span className="text-[10px] text-stone-400">Due: Sep 12, 2026</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200">
                      In Progress
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[var(--primary-50)] flex items-center justify-center text-[var(--primary)]">
                        <AlertCircle size={19} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-stone-800 leading-tight">Unit Testing Pipeline</h4>
                        <span className="text-[10px] text-stone-400">Due: Sep 15, 2026</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-500 border border-stone-200">
                      Queued
                    </span>
                  </div>
                </div>

                <div className="h-1" />
              </div>
            </div>

            {/* RUNNING PROJECTS TABLE */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-stone-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-stone-800">Running Projects</h3>
                  <span className="text-[11px] text-stone-400">Sprint 18 Deliverables</span>
                </div>
                <div className="flex items-center gap-1 border border-stone-200 px-2.5 py-1 rounded-full text-[11px] text-stone-500 bg-stone-50 cursor-pointer">
                  <span>Current Sprint</span>
                  <ChevronDown size={12} />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="text-stone-400 font-normal border-b border-stone-200 pb-2">
                      <th className="pb-3 font-normal">Project</th>
                      <th className="pb-3 font-normal">Team Lead</th>
                      <th className="pb-3 font-normal">Deadline</th>
                      <th className="pb-3 font-normal">Priority</th>
                      <th className="pb-3 font-normal">Progress</th>
                      <th className="pb-3 font-normal text-right"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-50">
                    <tr className="hover:bg-stone-50/50">
                      <td className="py-3 font-semibold text-stone-800 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[var(--secondary-100)] text-[var(--secondary)] flex items-center justify-center">
                          <FolderGit2 size={13} />
                        </div>
                        Fintech Mobile App
                      </td>
                      <td className="py-3 text-stone-500">Alex Morgan</td>
                      <td className="py-3 text-stone-500">Sep 24, 2026</td>
                      <td className="py-3">
                        <span className="text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full">High</span>
                      </td>
                      <td className="py-3">
                        <div className="w-24 bg-stone-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-[var(--secondary)] h-full rounded-full" style={{ width: '75%' }} />
                        </div>
                      </td>
                      <td className="py-3 text-right text-stone-400">
                        <button className="hover:text-stone-700 font-bold">⋮</button>
                      </td>
                    </tr>

                    <tr className="hover:bg-stone-50/50">
                      <td className="py-3 font-semibold text-stone-800 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center">
                          <FolderGit2 size={13} />
                        </div>
                        CRM Cloud Redesign
                      </td>
                      <td className="py-3 text-stone-500">Devon Lane</td>
                      <td className="py-3 text-stone-500">Oct 02, 2026</td>
                      <td className="py-3">
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Medium</span>
                      </td>
                      <td className="py-3">
                        <div className="w-24 bg-stone-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-[var(--primary)] h-full rounded-full" style={{ width: '45%' }} />
                        </div>
                      </td>
                      <td className="py-3 text-right text-stone-400">
                        <button className="hover:text-stone-700 font-bold">⋮</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLUMNS (PROFILE & TEAM DIRECTORY) */}
          <div className="lg:col-span-4 space-y-6">

            {/* EMPLOYEE PROFILE CARD */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-stone-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-stone-800 text-base">Employee Profile</h3>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-full bg-[var(--primary)] text-white flex items-center justify-center hover:bg-[var(--primary)]/80 transition">
                    <Settings size={15} />
                  </button>
                </div>
              </div>

              {/* Bio */}
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80"
                  alt="Employee"
                  className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-white"
                />
                <div>
                  <h4 className="font-bold text-stone-800 text-base">{employeeName}</h4>
                  <p className="text-xs text-stone-400 flex items-center gap-1.5 mt-0.5">
                    {employeeRole}
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--secondary-500)] ml-1" />
                    <span className="text-[var(--secondary-600)] font-semibold text-[11px]">Active</span>
                  </p>
                </div>
              </div>

              {/* Tasks Completed Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-stone-700">Sprint Tasks Finished</span>
                  <span className="text-stone-400 font-medium">8/10</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  <div className="h-2 rounded-full bg-[var(--primary)]" />
                  <div className="h-2 rounded-full bg-[var(--primary)]" />
                  <div className="h-2 rounded-full bg-[var(--primary)]" />
                  <div className="h-2 rounded-full bg-[var(--primary)]" />
                  <div className="h-2 rounded-full bg-stone-200" />
                </div>
              </div>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-2.5 rounded-2xl bg-[#F8F6F2] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center mb-1.5">
                    <Briefcase size={14} />
                  </div>
                  <span className="text-sm font-extrabold text-stone-800">4</span>
                  <span className="text-[10px] text-stone-400">Projects</span>
                </div>

                <div className="p-2.5 rounded-2xl bg-[#F8F6F2] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center mb-1.5">
                    <Clock size={14} />
                  </div>
                  <span className="text-sm font-extrabold text-stone-800">14d</span>
                  <span className="text-[10px] text-stone-400">Leaves Left</span>
                </div>

                <div className="p-2.5 rounded-2xl bg-[#F8F6F2] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center mb-1.5">
                    <Award size={14} />
                  </div>
                  <span className="text-sm font-extrabold text-stone-800">9.4</span>
                  <span className="text-[10px] text-stone-400">Rating</span>
                </div>
              </div>

              {/* View / Edit Button */}
              <button className="w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white text-xs font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-sm transition">
                <Edit3 size={14} /> Request Leave / Update Status
              </button>
            </div>

            {/* TEAMS CARD */}
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-stone-800">Team Colleagues</h3>
                  <p className="text-[10px] text-stone-400">Frontend Engineering Pod</p>
                </div>
                <button className="text-stone-400 hover:text-stone-700">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=60"
                      alt="avatar"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-stone-800 leading-snug">Jordan Lee</h4>
                      <p className="text-[10px] text-stone-400">UI / Design Lead</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-[var(--secondary-600)] bg-[var(--secondary-50)] px-2 py-0.5 rounded-full">
                    Online
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=60"
                      alt="avatar"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-stone-800 leading-snug">Marcus Vance</h4>
                      <p className="text-[10px] text-stone-400">Backend Architect</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
                    In Meeting
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&auto=format&fit=crop&q=60"
                      alt="avatar"
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-stone-800 leading-snug">Sophia Patel</h4>
                      <p className="text-[10px] text-stone-400">QA Engineer</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                    Offline
                  </span>
                </div>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
};

export default UserDashboard;