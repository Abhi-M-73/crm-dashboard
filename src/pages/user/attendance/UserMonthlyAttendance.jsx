import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  AlertCircle,
  Coffee,
  Download,
  CalendarCheck,
  FileText,
  Filter
} from "lucide-react";

const UserMonthlyAttendance = () => {
  // Current view month/year state
  const [currentDate, setCurrentDate] = useState(new Date(2026, 8, 1)); // September 2026
  const [selectedDay, setSelectedDay] = useState(9); // Default to 9th (Today)

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Helper functions for month navigation
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  // Days calculations
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Mock attendance record by date
  const monthlyData = {
    1: { status: "present", hours: "8.4h", in: "09:00 AM", out: "06:24 PM", note: "On time" },
    2: { status: "present", hours: "9.2h", in: "08:50 AM", out: "07:15 PM", note: "Overtime +1.2h" },
    3: { status: "leave", hours: "0.0h", in: "--", out: "--", note: "Approved PTO" },
    4: { status: "present", hours: "8.1h", in: "08:55 AM", out: "06:05 PM", note: "On time" },
    5: { status: "weekend", hours: "--", in: "--", out: "--", note: "Saturday Off" },
    6: { status: "weekend", hours: "--", in: "--", out: "--", note: "Sunday Off" },
    7: { status: "late", hours: "8.1h", in: "09:22 AM", out: "06:30 PM", note: "Late by 22m" },
    8: { status: "present", hours: "8.7h", in: "09:02 AM", out: "06:14 PM", note: "On time" },
    9: { status: "present", hours: "5.3h", in: "08:58 AM", out: "--", note: "Currently Running" },
    10: { status: "scheduled", hours: "--", in: "--", out: "--", note: "Scheduled" },
    11: { status: "scheduled", hours: "--", in: "--", out: "--", note: "Scheduled" },
    12: { status: "weekend", hours: "--", in: "--", out: "--", note: "Saturday Off" },
    13: { status: "weekend", hours: "--", in: "--", out: "--", note: "Sunday Off" },
  };

  const selectedRecord = monthlyData[selectedDay] || {
    status: "scheduled",
    hours: "--",
    in: "--",
    out: "--",
    note: "Upcoming working day"
  };

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">

      {/* TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Monthly Attendance Calendar
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Full view of daily clock-in compliance, leaves, and cumulative working hours
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Month Stepper Pill */}
          <div className="flex items-center gap-2 bg-white border border-stone-200/80 px-3 py-1.5 rounded-full shadow-sm text-xs font-bold text-stone-800">
            <button
              type="button"
              onClick={prevMonth}
              className="p-1 hover:bg-stone-100 rounded-full transition text-stone-500 hover:text-stone-900"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="w-32 text-center tracking-tight">
              {monthNames[month]} {year}
            </span>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1 hover:bg-stone-100 rounded-full transition text-stone-500 hover:text-stone-900"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--primary-700)] transition"
          >
            <Download size={14} />
            <span>Monthly Sheet</span>
          </button>
        </div>
      </div>

      {/* STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--secondary-100)] text-[var(--secondary)] flex items-center justify-center shrink-0">
            <CalendarCheck size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Present Days</span>
            <span className="text-lg font-black text-stone-900 leading-tight">06 / 07 Days</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Total Hours Logged</span>
            <span className="text-lg font-black text-stone-900 leading-tight">48.7 hrs</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
            <AlertCircle size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Leaves Approved</span>
            <span className="text-lg font-black text-stone-900 leading-tight">01 Day (PTO)</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Coffee size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Average Daily Work</span>
            <span className="text-lg font-black text-stone-900 leading-tight">8.3 hrs/day</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT: 8 COLS CALENDAR + 4 COLS DAY INSPECTOR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* 8 COLUMNS: CALENDAR CONTAINER */}
        <div className="lg:col-span-8 rounded-[32px] border border-stone-200/70 bg-white p-5 sm:p-7 shadow-sm space-y-4">
          
          {/* Legend row */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100 text-xs">
            <span className="font-bold text-stone-900">Calendar View</span>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-stone-500">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" /> Present
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-500" /> Late
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" /> Leave
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-stone-300" /> Weekend
              </span>
            </div>
          </div>

          {/* Day Names Grid */}
          <div className="grid grid-cols-7 text-center text-xs font-bold text-stone-400 uppercase tracking-wider py-1">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span className="text-stone-300">Sat</span>
            <span className="text-stone-300">Sun</span>
          </div>

          {/* Calendar Day Tiles Grid */}
          <div className="grid grid-cols-7 gap-2 sm:gap-2.5">
            {/* Empty slots for previous month offset */}
            {[...Array(firstDayIndex)].map((_, i) => (
              <div key={`empty-${i}`} className="min-h-[78px] rounded-2xl bg-[#FAF8F5]/40 border border-transparent" />
            ))}

            {/* Days of Current Month */}
            {[...Array(daysInMonth)].map((_, index) => {
              const dayNum = index + 1;
              const record = monthlyData[dayNum];
              const isSelected = selectedDay === dayNum;
              const isToday = dayNum === 9; // Today in context

              let bgStyle = "bg-white border-stone-200/70 hover:border-[var(--primary)]/40";
              let badgeStyle = "text-stone-700";

              if (record?.status === "present") {
                bgStyle = "bg-[color-mix(in_srgb,var(--secondary-50)_40%,transparent)] border-[color-mix(in_srgb,var(--secondary-100)_80%,transparent)] hover:bg-[color-mix(in_srgb,var(--secondary-50)_80%,transparent)]";
                badgeStyle = "text-[var(--secondary)]";
              } else if (record?.status === "late") {
                bgStyle = "bg-amber-50/40 border-amber-200/80 hover:bg-amber-50/80";
                badgeStyle = "text-amber-700";
              } else if (record?.status === "leave") {
                bgStyle = "bg-[var(--primary-50)]/40 border-[color-mix(in_srgb,var(--primary-200)_80%,transparent)] hover:bg-[var(--primary-50)]/80";
                badgeStyle = "text-[var(--primary)]";
              } else if (record?.status === "weekend") {
                bgStyle = "bg-[#FAF8F5] border-stone-100 opacity-60";
                badgeStyle = "text-stone-400";
              }

              return (
                <button
                  key={dayNum}
                  type="button"
                  onClick={() => setSelectedDay(dayNum)}
                  className={`min-h-[78px] rounded-2xl p-2 flex flex-col justify-between text-left transition-all border shadow-2xs relative ${bgStyle} ${
                    isSelected ? "ring-2 ring-[var(--primary)] shadow-sm" : ""
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-xs font-black ${isToday ? "h-5 w-5 rounded-full bg-[var(--primary)] text-white flex items-center justify-center -ml-0.5 -mt-0.5 text-[10px]" : "text-stone-800"}`}>
                      {dayNum}
                    </span>

                    {/* Status Pill indicator */}
                    {record?.status === "present" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--secondary)]" />
                    )}
                    {record?.status === "late" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    )}
                    {record?.status === "leave" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                    )}
                  </div>

                  {/* Hours Subtext */}
                  <div className="mt-1">
                    <span className={`text-[11px] font-bold block ${badgeStyle}`}>
                      {record?.hours || "--"}
                    </span>
                    <span className="text-[9px] text-stone-400 capitalize truncate block">
                      {record?.status || "Scheduled"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* 4 COLUMNS: SELECTED DAY INSPECTOR & DETAILS */}
        <div className="lg:col-span-4 space-y-6">

          {/* INSPECTOR CARD */}
          <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                  Day Inspector
                </span>
                <h3 className="text-base font-extrabold text-stone-900">
                  {monthNames[month]} {selectedDay}, {year}
                </h3>
              </div>

              <span
                className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold capitalize ${
                  selectedRecord.status === "present"
                    ? "bg-[var(--secondary-50)] text-[var(--secondary-700)] border border-[var(--secondary-100)]"
                    : selectedRecord.status === "late"
                    ? "bg-amber-50 text-amber-700 border border-amber-100"
                    : selectedRecord.status === "leave"
                    ? "bg-[var(--primary-50)] text-[var(--primary)] border border-[var(--primary-100)]"
                    : "bg-stone-100 text-stone-500"
                }`}
              >
                {selectedRecord.status}
              </span>
            </div>

            {/* Timestamps */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100">
                <span className="text-[10px] text-stone-400 font-semibold block">Clock In</span>
                <span className="text-stone-800 font-black text-sm mt-0.5 block">
                  {selectedRecord.in}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100">
                <span className="text-[10px] text-stone-400 font-semibold block">Clock Out</span>
                <span className="text-stone-800 font-black text-sm mt-0.5 block">
                  {selectedRecord.out}
                </span>
              </div>
            </div>

            {/* Effective Duration */}
            <div className="p-4 rounded-2xl bg-[var(--primary-50)]/50 border border-[var(--primary-100)]/80 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-500 font-semibold block">Total Active Shift</span>
                <span className="text-xl font-black text-[var(--primary)] block">{selectedRecord.hours}</span>
              </div>
              <Clock className="text-[var(--primary)]" size={22} />
            </div>

            {/* Shift Note & Regularization */}
            <div className="space-y-2 text-xs">
              <span className="text-[11px] text-stone-400 font-semibold block">Notes & Status</span>
              <p className="text-xs text-stone-700 font-medium bg-[#FAF8F5] p-3 rounded-xl border border-stone-100">
                {selectedRecord.note}
              </p>
            </div>

            {/* Regularization Action */}
            <button
              type="button"
              className="w-full py-2.5 rounded-2xl bg-[#FAF8F5] hover:bg-stone-100 text-stone-800 text-xs font-bold border border-stone-200 transition"
            >
              Request Attendance Correction
            </button>
          </div>

          {/* QUICK POLICY HELPER */}
          <div className="rounded-[32px] border border-stone-200/70 bg-white p-5 shadow-sm space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
              <FileText size={15} className="text-[var(--secondary)]" />
              <span>Shift Attendance Policy</span>
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Standard shift is 9 hours with 1 hour lunch break. Check-in after 09:15 AM counts as grace-period late arrival.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UserMonthlyAttendance;