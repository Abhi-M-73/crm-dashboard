import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Briefcase,
  Award,
  Clock,
  CheckCircle2,
  Edit3,
  Download,
  Share2,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  Camera
} from "lucide-react";

const UserProfileSettings = () => {
  const { user } = useSelector((state) => state.auth || {});

  const [activeTab, setActiveTab] = useState("overview");

  const employee = {
    name: user?.username || "Claire Horington",
    role: user?.designation || "Senior Frontend Architect",
    department: "Product Experience Pod",
    empId: "EMP-2026-894",
    email: user?.email || "claire.horington@relationx.com",
    phone: "+1 (555) 234-8901",
    location: "San Francisco, CA (Hybrid)",
    joinedDate: "March 14, 2023",
    manager: "Devon Lane (VP of Engineering)",
    status: "Active",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Next.js", "Design Systems", "REST & GraphQL"],
    experienceYears: "4.8 yrs",
    attendanceRate: "96%",
    taskVelocity: "94.2%",
  };

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      <div className="relative overflow-hidden rounded-[32px] border border-stone-200/70 bg-white shadow-sm">
        <div className="h-44 w-full bg-gradient-to-r from-[var(--secondary-900)] via-[var(--secondary)] to-[var(--secondary-700)] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_50%)]" />
          <div className="absolute right-8 top-6 flex gap-2 z-10">
            <button className="flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white/25">
              <Share2 size={13} />
              <span>Share Profile</span>
            </button>
            <button className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-1.5 text-xs font-bold text-white shadow transition hover:bg-[var(--primary-700)]">
              <Edit3 size={13} />
              <span>Edit Details</span>
            </button>
          </div>
        </div>

        {/* Profile Avatar & Primary Info Bar */}
        <div className="relative px-6 pb-6 pt-0 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-16 sm:-mt-14 mb-4">
            
            {/* Avatar with Status Ring */}
            <div className="relative inline-block">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
                alt="Profile Avatar"
                className="h-28 w-28 rounded-[28px] border-4 border-white object-cover shadow-md bg-stone-100"
              />
              <button
                type="button"
                className="absolute bottom-1 right-1 rounded-full bg-[var(--primary)] p-1.5 text-white shadow hover:bg-[var(--primary-700)] transition"
                title="Change Avatar"
              >
                <Camera size={13} />
              </button>
            </div>

            {/* Quick Metrics Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="flex items-center gap-2 rounded-2xl bg-[#F8F6F2] border border-stone-100 px-4 py-2">
                <Briefcase size={16} className="text-[var(--secondary)]" />
                <div>
                  <span className="block text-[10px] text-stone-400 font-medium">Tenure</span>
                  <span className="font-bold text-stone-800">{employee.experienceYears}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-[#F8F6F2] border border-stone-100 px-4 py-2">
                <Clock size={16} className="text-[var(--primary)]" />
                <div>
                  <span className="block text-[10px] text-stone-400 font-medium">Attendance</span>
                  <span className="font-bold text-stone-800">{employee.attendanceRate}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-2xl bg-[#F8F6F2] border border-stone-100 px-4 py-2">
                <Award size={16} className="text-[var(--secondary)]" />
                <div>
                  <span className="block text-[10px] text-stone-400 font-medium">Efficiency</span>
                  <span className="font-bold text-stone-800">{employee.taskVelocity}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Name & Contact Grid */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-black tracking-tight text-stone-900 sm:text-3xl">
                {employee.name}
              </h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--secondary-50)] px-3 py-1 text-xs font-bold text-[var(--secondary-700)] border border-[color-mix(in_srgb,var(--secondary-200)_60%,transparent)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--secondary-500)]" />
                {employee.status}
              </span>
              <span className="rounded-full bg-[var(--primary-50)] px-2.5 py-0.5 text-[11px] font-bold text-[var(--primary)]">
                {employee.empId}
              </span>
            </div>

            <p className="text-sm font-semibold text-stone-500">
              {employee.role} &bull; <span className="text-[var(--secondary)]">{employee.department}</span>
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500 pt-1 border-t border-stone-100">
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-stone-400" />
                {employee.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="text-stone-400" />
                {employee.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-stone-400" />
                {employee.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-stone-400" />
                Joined {employee.joinedDate}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-6 px-6 border-t border-stone-100 bg-[#FAF8F5]/60 text-xs font-bold">
          {["overview", "projects & tasks", "documents", "timeline"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3.5 capitalize transition-all border-b-2 ${
                activeTab === tab
                  ? "border-[var(--primary)] text-[var(--primary)]"
                  : "border-transparent text-stone-400 hover:text-stone-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 2. BODY GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* LEFT COLUMN: 8 COLS */}
        <div className="lg:col-span-8 space-y-6">

          {/* PERFORMANCE & SPRINT GAUGE CARD */}
          <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-stone-900">Quarterly Sprint Scorecard</h3>
                <p className="text-[11px] text-stone-400">Q3 Performance evaluation based on JIRA velocity</p>
              </div>
              <span className="rounded-full bg-[color-mix(in_srgb,var(--secondary)_10%,transparent)] text-[var(--secondary)] px-3 py-1 text-xs font-bold">
                Tier: Top 5%
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 pt-2">
              
              {/* Circular Metric Meter */}
              <div className="md:col-span-5 relative w-44 h-44 mx-auto flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#FEE8D8" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="#F97316"
                    strokeWidth="8"
                    strokeDasharray="314"
                    strokeDashoffset="45"
                    strokeLinecap="round"
                  />
                  <circle cx="60" cy="60" r="38" fill="none" stroke="var(--secondary-100)" strokeWidth="8" />
                  <circle
                    cx="60"
                    cy="60"
                    r="38"
                    fill="none"
                    stroke="#1A533E"
                    strokeWidth="8"
                    strokeDasharray="238"
                    strokeDashoffset="30"
                    strokeLinecap="round"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-stone-900 leading-tight">96%</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                    Sprint Rating
                  </span>
                </div>
              </div>

              {/* Progress Detail Bars */}
              <div className="md:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-stone-700">
                    <span>Task Completion on Time</span>
                    <span className="text-stone-900">48 / 50</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{ width: "96%" }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-stone-700">
                    <span>Code Review Velocity</span>
                    <span className="text-stone-900">92%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
                    <div className="h-full bg-[var(--primary)] rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold text-stone-700">
                    <span>Pod Collaboration Score</span>
                    <span className="text-stone-900">4.9 / 5.0</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
                    <div className="h-full bg-[var(--secondary)] rounded-full" style={{ width: "98%" }} />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* EMPLOYMENT DETAILS CARD */}
          <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-stone-900 mb-4">Official Details</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="rounded-2xl bg-[#FAF8F5] p-3.5 border border-stone-100">
                <span className="text-[11px] text-stone-400 font-medium block">Reporting Manager</span>
                <span className="text-stone-800 font-bold text-sm mt-0.5 block">{employee.manager}</span>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-3.5 border border-stone-100">
                <span className="text-[11px] text-stone-400 font-medium block">Employment Type</span>
                <span className="text-stone-800 font-bold text-sm mt-0.5 block">Full-time Regular (Exempt)</span>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-3.5 border border-stone-100">
                <span className="text-[11px] text-stone-400 font-medium block">Work Shift</span>
                <span className="text-stone-800 font-bold text-sm mt-0.5 block">General (09:00 AM - 06:00 PM PST)</span>
              </div>

              <div className="rounded-2xl bg-[#FAF8F5] p-3.5 border border-stone-100">
                <span className="text-[11px] text-stone-400 font-medium block">Official Work Email</span>
                <span className="text-stone-800 font-bold text-sm mt-0.5 block">{employee.email}</span>
              </div>
            </div>
          </div>

          {/* MILESTONES / TIMELINE */}
          <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-stone-900 mb-4">Recent Milestones</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--secondary-50)] text-[var(--secondary)]">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Promoted to Senior Frontend Architect</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Recognized for architecture leadership on RelationX Cloud Workspace v2.</p>
                  <span className="text-[10px] font-semibold text-stone-400 block mt-1">August 15, 2026</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-50)] text-[var(--primary)]">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Spotlight Innovator Award (Q2)</h4>
                  <p className="text-[11px] text-stone-400 mt-0.5">Built internal canvas chart generator decreasing design handoff by 40%.</p>
                  <span className="text-[10px] font-semibold text-stone-400 block mt-1">May 28, 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: 4 COLS */}
        <div className="lg:col-span-4 space-y-6">

          {/* SKILLS & CORE COMPETENCIES */}
          <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-stone-900">Skills & Tech Stack</h3>
              <span className="text-[10px] font-bold text-[var(--primary)] bg-[var(--primary-50)] px-2 py-0.5 rounded-full">
                Verified
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {employee.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl bg-[#FAF8F5] border border-stone-200/60 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:border-[var(--primary)] transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* LEAVE BALANCE WIDGET */}
          <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-stone-900">Leave Balance</h3>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="rounded-2xl bg-[#FAF8F5] p-3 border border-stone-100">
                <span className="text-xl font-black text-stone-900">14</span>
                <span className="block text-[10px] font-semibold text-stone-400 mt-0.5">Paid Time Off (PTO)</span>
              </div>
              <div className="rounded-2xl bg-[#FAF8F5] p-3 border border-stone-100">
                <span className="text-xl font-black text-stone-900">06</span>
                <span className="block text-[10px] font-semibold text-stone-400 mt-0.5">Sick & Emergency</span>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-2xl bg-[#FAF8F5] hover:bg-stone-200/60 text-stone-800 text-xs font-bold border border-stone-200 transition flex items-center justify-center gap-1.5">
              <span>Apply for Time Off</span>
              <ChevronRight size={14} />
            </button>
          </div>

          {/* DOWNLOADABLE DOCUMENTS */}
          <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-stone-900">Company Documents</h3>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100 text-xs">
                <div>
                  <span className="font-bold text-stone-800 block">Employment Contract</span>
                  <span className="text-[10px] text-stone-400">PDF &bull; 1.2 MB</span>
                </div>
                <button className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-white transition">
                  <Download size={15} />
                </button>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100 text-xs">
                <div>
                  <span className="font-bold text-stone-800 block">Offer Letter & NDA</span>
                  <span className="text-[10px] text-stone-400">PDF &bull; 850 KB</span>
                </div>
                <button className="p-2 text-stone-500 hover:text-stone-900 rounded-full hover:bg-white transition">
                  <Download size={15} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UserProfileSettings;