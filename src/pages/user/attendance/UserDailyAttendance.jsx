import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Fingerprint,
  Coffee,
  ArrowUpRight,
  Download,
  CalendarCheck
} from "lucide-react";

const UserDailyAttendance = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isPunchedIn, setIsPunchedIn] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("September 2026");

  // Live Timer
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const attendanceRecords = [
    {
      date: "Sep 09, 2026",
      day: "Wednesday",
      checkIn: "08:58 AM",
      checkOut: "--:--",
      workHours: "5h 18m (Running)",
      overtime: "--",
      status: "Present",
    },
    {
      date: "Sep 08, 2026",
      day: "Tuesday",
      checkIn: "09:02 AM",
      checkOut: "06:14 PM",
      workHours: "8h 42m",
      overtime: "+0.7h",
      status: "Present",
    },
    {
      date: "Sep 07, 2026",
      day: "Monday",
      checkIn: "09:22 AM",
      checkOut: "06:30 PM",
      workHours: "8h 08m",
      overtime: "--",
      status: "Late",
    },
    {
      date: "Sep 04, 2026",
      day: "Friday",
      checkIn: "08:55 AM",
      checkOut: "06:05 PM",
      workHours: "8h 10m",
      overtime: "--",
      status: "Present",
    },
    {
      date: "Sep 03, 2026",
      day: "Thursday",
      checkIn: "--:--",
      checkOut: "--:--",
      workHours: "0h 00m",
      overtime: "--",
      status: "Leave",
    },
    {
      date: "Sep 02, 2026",
      day: "Wednesday",
      checkIn: "08:50 AM",
      checkOut: "07:15 PM",
      workHours: "9h 25m",
      overtime: "+1.2h",
      status: "Present",
    },
  ];

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & EXPORT */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Attendance & Work Logs
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Track daily clock-in timestamps, monthly shifts, and leave records
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-stone-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm">
            <Calendar size={14} className="text-stone-500" />
            <span>{selectedMonth}</span>
            <ChevronDown size={13} className="text-stone-400" />
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-white border border-stone-200 px-4 py-2 text-xs font-bold text-stone-700 shadow-sm hover:bg-stone-50 transition"
          >
            <Download size={14} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* 2. TOP HERO ROW: PUNCH CARD & CONCENTRIC SUMMARY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LIVE CLOCK-IN / OUT CARD (5 Columns) */}
        <div className="lg:col-span-5 rounded-[32px] border border-stone-200/70 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--primary-50)] text-[var(--primary)]">
                <Clock size={18} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-stone-900">Live Work Desk</h3>
                <span className="text-[10px] text-stone-400 font-medium">Shift: 09:00 AM – 06:00 PM</span>
              </div>
            </div>

            <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
              isPunchedIn
                ? "bg-[var(--secondary-50)] text-[var(--secondary-600)] border border-[var(--secondary-100)]"
                : "bg-stone-100 text-stone-500"
            }`}>
              <span className={`h-1.5 w-1.5 rounded-full ${isPunchedIn ? "bg-[var(--secondary-500)] animate-pulse" : "bg-stone-400"}`} />
              {isPunchedIn ? "On Duty" : "Off Duty"}
            </span>
          </div>

          {/* Clock Display */}
          <div className="text-center py-2">
            <h2 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight font-mono">
              {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </h2>
            <p className="text-xs font-semibold text-stone-400 mt-1">
              {currentTime.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric", year: "numeric" })}
            </p>
          </div>

          {/* Check-in timestamp stats */}
          <div className="grid grid-cols-2 gap-3 text-xs bg-[#FAF8F5] p-3.5 rounded-2xl border border-stone-100 text-center">
            <div>
              <span className="text-[10px] text-stone-400 font-semibold block uppercase">First Punch In</span>
              <span className="font-extrabold text-stone-800 text-sm mt-0.5 block">08:58 AM</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 font-semibold block uppercase">Logged Duration</span>
              <span className="font-extrabold text-[var(--secondary)] text-sm mt-0.5 block">5h 18m</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setIsPunchedIn(!isPunchedIn)}
              className={`flex-1 py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition active:scale-[0.98] ${
                isPunchedIn
                  ? "bg-[var(--primary)] hover:bg-[var(--primary-700)] text-white"
                  : "bg-[var(--secondary)] hover:bg-[#164132] text-white"
              }`}
            >
              <Fingerprint size={16} />
              <span>{isPunchedIn ? "Punch Out" : "Punch In"}</span>
            </button>

            <button
              type="button"
              className="px-4 py-3 rounded-2xl text-xs font-bold border border-stone-200 bg-[#FAF8F5] text-stone-700 hover:bg-stone-100 transition flex items-center gap-1.5"
            >
              <Coffee size={15} />
              <span>Take Break</span>
            </button>
          </div>
        </div>

        {/* MONTHLY CONCENTRIC GAUGE SUMMARY (7 Columns) */}
        <div className="lg:col-span-7 rounded-[32px] border border-stone-200/70 bg-white p-6 sm:p-7 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-sm font-extrabold text-stone-900">Attendance Meter</h3>
              <p className="text-[11px] text-stone-400">Total 22 Working days scheduled</p>
            </div>
            <span className="rounded-full bg-[var(--secondary-50)] px-3 py-1 text-xs font-bold text-[var(--secondary-700)] border border-[var(--secondary-100)]">
              Good Standing
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 my-auto py-2">
            {/* Concentric Gauge SVG */}
            <div className="md:col-span-5 relative w-44 h-44 mx-auto flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                {/* Outer Track (Orange) */}
                <circle cx="60" cy="60" r="50" fill="none" stroke="#FEE8D8" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="8"
                  strokeDasharray="314"
                  strokeDashoffset="60"
                  strokeLinecap="round"
                />

                {/* Inner Track (Green) */}
                <circle cx="60" cy="60" r="38" fill="none" stroke="var(--secondary-100)" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="38"
                  fill="none"
                  stroke="var(--secondary)"
                  strokeWidth="8"
                  strokeDasharray="238"
                  strokeDashoffset="22"
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-stone-900">94%</span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-stone-400">
                  Compliance
                </span>
              </div>
            </div>

            {/* Metric Pills Grid */}
            <div className="md:col-span-7 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" />
                  <span className="text-[11px] font-semibold text-stone-500">Present (On-Time)</span>
                </div>
                <span className="text-xl font-black text-stone-900 block">20 Days</span>
                <span className="text-[10px] text-stone-400">91% On Schedule</span>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  <span className="text-[11px] font-semibold text-stone-500">Late Arrivals</span>
                </div>
                <span className="text-xl font-black text-stone-900 block">01 Day</span>
                <span className="text-[10px] text-stone-400">Within grace window</span>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-stone-400" />
                  <span className="text-[11px] font-semibold text-stone-500">Approved Leaves</span>
                </div>
                <span className="text-xl font-black text-stone-900 block">01 Day</span>
                <span className="text-[10px] text-stone-400">Paid Time Off (PTO)</span>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="h-2 w-2 rounded-full bg-[var(--secondary-500)]" />
                  <span className="text-[11px] font-semibold text-stone-500">Overtime Logged</span>
                </div>
                <span className="text-xl font-black text-stone-900 block">+4.8 hrs</span>
                <span className="text-[10px] text-stone-400">Sprint 18 deliverable</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-stone-100 font-medium">
            <span>Grace period: 15 mins allowance</span>
            <span className="text-[var(--primary)] font-semibold cursor-pointer hover:underline">
              View Leave Policies &rarr;
            </span>
          </div>
        </div>

      </div>

      {/* 3. DETAILED LOG TABLE */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 sm:p-7 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-stone-900">Recent Attendance History</h3>
            <p className="text-[11px] text-stone-400">Verified biometric & network timestamps</p>
          </div>
          <span className="text-xs font-semibold text-stone-500">Showing last 7 entries</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-normal border-b border-stone-100 pb-2">
                <th className="pb-3 font-normal">Date & Day</th>
                <th className="pb-3 font-normal">Check In</th>
                <th className="pb-3 font-normal">Check Out</th>
                <th className="pb-3 font-normal">Effective Hours</th>
                <th className="pb-3 font-normal">Overtime</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {attendanceRecords.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50/60 transition-colors">
                  <td className="py-3.5 font-bold text-stone-800">
                    {row.date}
                    <span className="text-[11px] font-normal text-stone-400 block">{row.day}</span>
                  </td>

                  <td className="py-3.5 font-semibold text-stone-700">{row.checkIn}</td>
                  <td className="py-3.5 font-semibold text-stone-700">{row.checkOut}</td>
                  
                  <td className="py-3.5 font-semibold text-stone-800">
                    <span className={row.workHours.includes("Running") ? "text-[var(--secondary)]" : ""}>
                      {row.workHours}
                    </span>
                  </td>

                  <td className="py-3.5 font-semibold text-[var(--secondary-600)]">{row.overtime}</td>

                  <td className="py-3.5">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                        row.status === "Present"
                          ? "bg-[var(--secondary-50)] text-[var(--secondary-700)] border border-[color-mix(in_srgb,var(--secondary-200)_60%,transparent)]"
                          : row.status === "Late"
                          ? "bg-amber-50 text-amber-700 border border-amber-200/60"
                          : "bg-[var(--primary-50)] text-[var(--primary)] border border-[color-mix(in_srgb,var(--primary-200)_60%,transparent)]"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      className="text-stone-400 hover:text-stone-700 p-1 rounded-lg hover:bg-stone-100 transition"
                      title="Request Attendance Regularization"
                    >
                      <ArrowUpRight size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default UserDailyAttendance;