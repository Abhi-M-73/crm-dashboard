import React, { useState } from "react";
import {
  Users,
  Search,
  Clock,
  CheckCircle2,
  AlertCircle,
  Coffee,
  Download,
  Calendar,
  ChevronDown,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  UserX
} from "lucide-react";

const UserTeamAttendance = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState("Today, Sep 09, 2026");

  const teamAttendance = [
    {
      id: "EMP-101",
      name: "Jordan Lee",
      role: "Lead UI / UX Designer",
      pod: "Frontend Pod",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      punchIn: "08:52 AM",
      punchOut: "--:--",
      loggedHours: "5h 28m",
      breakTime: "45m",
      status: "present",
      compliance: "On Time"
    },
    {
      id: "EMP-102",
      name: "Marcus Vance",
      role: "Backend Architect",
      pod: "Core Services",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      punchIn: "09:05 AM",
      punchOut: "--:--",
      loggedHours: "5h 15m",
      breakTime: "30m",
      status: "present",
      compliance: "On Time"
    },
    {
      id: "EMP-103",
      name: "Sophia Patel",
      role: "QA Automation",
      pod: "Quality Pod",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      punchIn: "--:--",
      punchOut: "--:--",
      loggedHours: "0h 00m",
      breakTime: "--",
      status: "leave",
      compliance: "Approved PTO"
    },
    {
      id: "EMP-104",
      name: "David Chen",
      role: "Frontend Engineer",
      pod: "Frontend Pod",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      punchIn: "09:28 AM",
      punchOut: "--:--",
      loggedHours: "4h 52m",
      breakTime: "20m",
      status: "late",
      compliance: "Late (Grace 15m+)"
    },
    {
      id: "EMP-105",
      name: "Elena Rostova",
      role: "DevOps Engineer",
      pod: "Core Services",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
      punchIn: "08:45 AM",
      punchOut: "--:--",
      loggedHours: "5h 35m",
      breakTime: "50m",
      status: "break",
      compliance: "Lunch Break"
    },
    {
      id: "EMP-106",
      name: "Liam O'Connor",
      role: "Full Stack Engineer",
      pod: "Frontend Pod",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
      punchIn: "09:02 AM",
      punchOut: "--:--",
      loggedHours: "5h 18m",
      breakTime: "30m",
      status: "present",
      compliance: "On Time"
    }
  ];

  const filteredTeam = teamAttendance.filter((member) => {
    const matchesStatus = statusFilter === "all" ? true : member.status === statusFilter;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.pod.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & EXPORT ACTIONS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Pod Team Attendance
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Real-time daily presence, biometric clock-in logs, and leave status across your pod
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Date Selector */}
          <div className="flex items-center gap-2 rounded-full border border-stone-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm">
            <Calendar size={14} className="text-stone-500" />
            <span>{selectedDate}</span>
            <ChevronDown size={13} className="text-stone-400" />
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[#EA580C] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#d94e07] transition active:scale-[0.98]"
          >
            <Download size={14} />
            <span>Export Roster</span>
          </button>
        </div>
      </div>

      {/* 2. STATS PILL ROW */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Active On Duty</span>
            <span className="text-lg font-black text-stone-900 leading-tight">04 Members</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <Coffee size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">On Break</span>
            <span className="text-lg font-black text-stone-900 leading-tight">01 Member</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
            <UserX size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Approved Leaves</span>
            <span className="text-lg font-black text-stone-900 leading-tight">01 Member</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-100">
            <AlertCircle size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Late Check-ins</span>
            <span className="text-lg font-black text-stone-900 leading-tight">01 Member</span>
          </div>
        </div>
      </div>

      {/* 3. CONCENTRIC GAUGE & SPRINT ATTENDANCE HEALTH */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 sm:p-7 shadow-sm">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="text-base font-extrabold text-stone-900">Today's Pod Presence Index</h3>
            <p className="text-[11px] text-stone-400">Total 06 pod resources assigned for current sprint cycle</p>
          </div>
          <span className="rounded-full bg-[#1E5642]/10 text-[#1E5642] px-3 py-1 text-xs font-bold">
            91% Punctuality Rate
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 pt-2">
          {/* Concentric Gauge SVG */}
          <div className="md:col-span-4 relative w-40 h-40 mx-auto flex items-center justify-center">
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
                strokeDashoffset="75"
                strokeLinecap="round"
              />

              <circle cx="60" cy="60" r="38" fill="none" stroke="#E1EBE6" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="38"
                fill="none"
                stroke="#1E5642"
                strokeWidth="8"
                strokeDasharray="238"
                strokeDashoffset="25"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-stone-900">83%</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                Active Staff
              </span>
            </div>
          </div>

          {/* Metric Details Breakdown */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <span className="text-[11px] text-stone-400 font-semibold block">Shift Timing</span>
              <span className="text-stone-800 font-extrabold text-sm mt-0.5 block">09:00 AM – 06:00 PM</span>
              <span className="text-[10px] text-stone-400 mt-1 block">Standard 9 hrs window</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <span className="text-[11px] text-stone-400 font-semibold block">Average First In</span>
              <span className="text-[#1E5642] font-extrabold text-sm mt-0.5 block">08:58 AM</span>
              <span className="text-[10px] text-emerald-600 font-semibold mt-1 block">2 mins before cutoff</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <span className="text-[11px] text-stone-400 font-semibold block">Cumulative Logged</span>
              <span className="text-[#EA580C] font-extrabold text-sm mt-0.5 block">26h 28m</span>
              <span className="text-[10px] text-stone-400 mt-1 block">Live calculated hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SEARCH & STATUS FILTER CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/70 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
          {[
            { id: "all", label: "All Members" },
            { id: "present", label: "On Duty" },
            { id: "break", label: "On Break" },
            { id: "late", label: "Late Check-in" },
            { id: "leave", label: "On Leave" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setStatusFilter(tab.id)}
              className={`rounded-full px-4 py-1.5 transition-all whitespace-nowrap ${
                statusFilter === tab.id
                  ? "bg-[#1E5642] text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900 hover:bg-stone-200/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative flex items-center">
          <Search size={14} className="absolute left-3.5 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search member..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full border border-stone-200/80 bg-white py-1.5 pl-9 pr-4 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition shadow-sm w-full sm:w-56"
          />
        </div>
      </div>

      {/* 5. LIVE TEAM ATTENDANCE TABLE */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-normal border-b border-stone-100 pb-2">
                <th className="pb-3 font-normal">Team Member</th>
                <th className="pb-3 font-normal">Pod</th>
                <th className="pb-3 font-normal">Clock In</th>
                <th className="pb-3 font-normal">Clock Out</th>
                <th className="pb-3 font-normal">Logged Work</th>
                <th className="pb-3 font-normal">Break</th>
                <th className="pb-3 font-normal">Live Status</th>
                <th className="pb-3 font-normal text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filteredTeam.map((emp) => {
                let badgeStyle = {
                  label: "On Duty",
                  pill: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
                  dot: "bg-emerald-500"
                };

                if (emp.status === "break") {
                  badgeStyle = {
                    label: "On Break",
                    pill: "bg-amber-50 text-amber-700 border-amber-200/60",
                    dot: "bg-amber-500"
                  };
                } else if (emp.status === "late") {
                  badgeStyle = {
                    label: "Late Arrival",
                    pill: "bg-orange-50 text-[#EA580C] border-orange-200/60",
                    dot: "bg-[#EA580C]"
                  };
                } else if (emp.status === "leave") {
                  badgeStyle = {
                    label: "On Leave",
                    pill: "bg-rose-50 text-rose-600 border-rose-200/60",
                    dot: "bg-rose-400"
                  };
                }

                return (
                  <tr key={emp.id} className="hover:bg-stone-50/60 transition-colors">
                    {/* Member Name + Avatar */}
                    <td className="py-3.5 font-semibold text-stone-800 flex items-center gap-3">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-8 h-8 rounded-full object-cover border border-stone-100 shadow-2xs"
                      />
                      <div>
                        <span className="font-bold text-stone-900 block leading-tight">{emp.name}</span>
                        <span className="text-[10px] text-stone-400 font-normal">{emp.role}</span>
                      </div>
                    </td>

                    {/* Pod */}
                    <td className="py-3.5 text-stone-500 font-medium">{emp.pod}</td>

                    {/* Punch In */}
                    <td className="py-3.5 font-bold text-stone-800">{emp.punchIn}</td>

                    {/* Punch Out */}
                    <td className="py-3.5 font-medium text-stone-400">{emp.punchOut}</td>

                    {/* Work Hours (Live badge if running) */}
                    <td className="py-3.5">
                      <span className={`font-bold ${emp.status !== "leave" ? "text-[#1E5642]" : "text-stone-400"}`}>
                        {emp.loggedHours}
                      </span>
                    </td>

                    {/* Break */}
                    <td className="py-3.5 text-stone-500 font-medium">{emp.breakTime}</td>

                    {/* Status Badge */}
                    <td className="py-3.5">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${badgeStyle.pill}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${badgeStyle.dot}`} />
                        {badgeStyle.label}
                      </span>
                    </td>

                    {/* Details Action */}
                    <td className="py-3.5 text-right">
                      <button
                        type="button"
                        className="text-stone-400 hover:text-stone-800 p-1.5 rounded-lg hover:bg-stone-100 transition"
                        title="View Biometric Audit Log"
                      >
                        <ArrowUpRight size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default UserTeamAttendance;