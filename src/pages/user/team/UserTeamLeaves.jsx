import React, { useState } from "react";
import {
  Calendar,
  Clock,
  CalendarDays,
  UserCheck,
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Search,
  Download,
  Plus,
  ArrowUpRight,
  Plane,
  HeartPulse,
  Coffee,
  ShieldAlert
} from "lucide-react";

const UserTeamLeaves = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const leavesData = [
    {
      id: "LV-101",
      name: "Sophia Patel",
      role: "QA Automation",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      type: "Annual PTO",
      startDate: "Sep 09, 2026",
      endDate: "Sep 11, 2026",
      duration: "3 Days",
      backup: "David Chen",
      status: "active",
      reason: "Family vacation trip",
    },
    {
      id: "LV-102",
      name: "Marcus Vance",
      role: "Backend Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      type: "Medical Leave",
      startDate: "Sep 14, 2026",
      endDate: "Sep 15, 2026",
      duration: "2 Days",
      backup: "Elena Rostova",
      status: "approved",
      reason: "Dental surgery & rest",
    },
    {
      id: "LV-103",
      name: "Jordan Lee",
      role: "Lead UI / UX",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      type: "Casual Leave",
      startDate: "Sep 18, 2026",
      endDate: "Sep 18, 2026",
      duration: "1 Day",
      backup: "Claire Horington",
      status: "pending",
      reason: "Personal commitment",
    },
    {
      id: "LV-104",
      name: "Liam O'Connor",
      role: "Full Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
      type: "Floating Holiday",
      startDate: "Sep 22, 2026",
      endDate: "Sep 22, 2026",
      duration: "1 Day",
      backup: "David Chen",
      status: "approved",
      reason: "Festival celebration",
    },
    {
      id: "LV-105",
      name: "Elena Rostova",
      role: "DevOps Engineer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
      type: "Comp-off",
      startDate: "Sep 28, 2026",
      endDate: "Sep 28, 2026",
      duration: "1 Day",
      backup: "Marcus Vance",
      status: "approved",
      reason: "Weekend deployment compensation",
    },
  ];

  const filteredLeaves = leavesData.filter((item) => {
    const matchesTab = activeTab === "all" ? true : item.status === activeTab;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & ACTION BAR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Pod Team Leaves & Time Off
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Monitor team availability, planned vacation leaves, and pod coverage planning
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-stone-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm">
            <Calendar size={14} className="text-stone-500" />
            <span>September 2026</span>
            <ChevronDown size={13} className="text-stone-400" />
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--primary-700)] transition active:scale-[0.98]"
          >
            <Plus size={15} />
            <span>Apply Leave</span>
          </button>
        </div>
      </div>

      {/* 2. STATS PILL COUNTERS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0 border border-[var(--primary-100)]">
            <Plane size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">On Leave Today</span>
            <span className="text-lg font-black text-stone-900 leading-tight">01 Member</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--secondary-100)] text-[var(--secondary)] flex items-center justify-center shrink-0 border border-[var(--secondary-100)]">
            <UserCheck size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Active Pod Capacity</span>
            <span className="text-lg font-black text-stone-900 leading-tight">83.3% Available</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <CalendarDays size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Scheduled This Month</span>
            <span className="text-lg font-black text-stone-900 leading-tight">08 Total Days</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 border border-stone-200">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Pending Approvals</span>
            <span className="text-lg font-black text-stone-900 leading-tight">01 Request</span>
          </div>
        </div>
      </div>

      {/* 3. CONCENTRIC CAPACITY METER & CATEGORY BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* CONCENTRIC GAUGE CARD (5 Columns) */}
        <div className="lg:col-span-5 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Sprint Pod Bandwidth</h3>
              <p className="text-[11px] text-stone-400">Total capacity impacted by time-off</p>
            </div>
            <span className="rounded-full bg-[var(--secondary-50)] px-2.5 py-0.5 text-[11px] font-bold text-[var(--secondary-700)] border border-[var(--secondary-100)]">
              Sufficient
            </span>
          </div>

          {/* Concentric Gauge SVG */}
          <div className="relative w-44 h-44 mx-auto my-4 flex items-center justify-center">
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
                strokeDashoffset="35"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-stone-900">83%</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                Staff In Office
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" /> 5 Available Members
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" /> 1 On Leave
            </span>
          </div>
        </div>

        {/* LEAVE TYPE ALLOCATION (7 Columns) */}
        <div className="lg:col-span-7 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Monthly Time-Off Distribution</h3>
              <p className="text-[11px] text-stone-400">Categorized by approval types this month</p>
            </div>
            <button className="flex items-center gap-1 text-xs font-bold text-[var(--primary)] hover:underline">
              <Download size={13} />
              <span>Export Summary</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0">
                <Plane size={18} />
              </div>
              <div>
                <span className="text-[11px] text-stone-400 font-semibold block">Paid Vacation (PTO)</span>
                <span className="text-base font-black text-stone-900">03 Days Total</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <HeartPulse size={18} />
              </div>
              <div>
                <span className="text-[11px] text-stone-400 font-semibold block">Medical & Sick</span>
                <span className="text-base font-black text-stone-900">02 Days Total</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <Coffee size={18} />
              </div>
              <div>
                <span className="text-[11px] text-stone-400 font-semibold block">Casual & Personal</span>
                <span className="text-base font-black text-stone-900">02 Days Total</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[var(--secondary-100)] text-[var(--secondary)] flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} />
              </div>
              <div>
                <span className="text-[11px] text-stone-400 font-semibold block">Comp-Off Credited</span>
                <span className="text-base font-black text-stone-900">01 Day Total</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-amber-50/60 border border-amber-200/60 p-3 text-xs text-amber-800 flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0 text-amber-600" />
            <span>Sprint 18 delivery date is <strong>Sep 24</strong>. Backups must be assigned for any leave on Sep 23-24.</span>
          </div>
        </div>

      </div>

      {/* 4. LEAVE SCHEDULE FILTER & SEARCH */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/70 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
          {[
            { id: "all", label: "All Requests" },
            { id: "active", label: "Currently On Leave" },
            { id: "approved", label: "Upcoming Approved" },
            { id: "pending", label: "Pending Approvals" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-1.5 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[var(--secondary)] text-white shadow-sm"
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
            placeholder="Search colleague or leave..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full border border-stone-200/80 bg-white py-1.5 pl-9 pr-4 text-xs font-medium text-stone-800 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition shadow-sm w-full sm:w-60"
          />
        </div>
      </div>

      {/* 5. TEAM LEAVES ROSTER TABLE */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-normal border-b border-stone-100 pb-2">
                <th className="pb-3 font-normal">Team Member</th>
                <th className="pb-3 font-normal">Leave Type</th>
                <th className="pb-3 font-normal">Dates</th>
                <th className="pb-3 font-normal">Duration</th>
                <th className="pb-3 font-normal">Assigned Backup</th>
                <th className="pb-3 font-normal">Reason</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filteredLeaves.map((item) => {
                let badgeStyle = {
                  label: "Approved",
                  pill: "bg-[var(--secondary-50)] text-[var(--secondary-700)] border-[color-mix(in_srgb,var(--secondary-200)_60%,transparent)]",
                };

                if (item.status === "active") {
                  badgeStyle = {
                    label: "On Leave Today",
                    pill: "bg-[var(--primary-50)] text-[var(--primary)] border-[color-mix(in_srgb,var(--primary-200)_60%,transparent)] font-black",
                  };
                } else if (item.status === "pending") {
                  badgeStyle = {
                    label: "Pending Review",
                    pill: "bg-amber-50 text-amber-700 border-amber-200/60",
                  };
                }

                return (
                  <tr key={item.id} className="hover:bg-stone-50/60 transition-colors">
                    {/* Member Profile */}
                    <td className="py-3.5 font-semibold text-stone-800 flex items-center gap-3">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-8 h-8 rounded-full object-cover border border-stone-100 shadow-2xs"
                      />
                      <div>
                        <span className="font-bold text-stone-900 block leading-tight">{item.name}</span>
                        <span className="text-[10px] text-stone-400 font-normal">{item.role}</span>
                      </div>
                    </td>

                    {/* Type */}
                    <td className="py-3.5 font-bold text-stone-800">{item.type}</td>

                    {/* Dates */}
                    <td className="py-3.5 font-medium text-stone-700">
                      {item.startDate} &rarr; {item.endDate}
                    </td>

                    {/* Duration */}
                    <td className="py-3.5 font-black text-stone-900">
                      <span className="rounded-lg bg-[#FAF8F5] border border-stone-200/60 px-2 py-0.5">
                        {item.duration}
                      </span>
                    </td>

                    {/* Assigned Backup */}
                    <td className="py-3.5 font-semibold text-[var(--secondary)]">{item.backup}</td>

                    {/* Reason */}
                    <td className="py-3.5 text-stone-500 font-medium max-w-xs truncate">
                      {item.reason}
                    </td>

                    {/* Status Badge */}
                    <td className="py-3.5">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${badgeStyle.pill}`}>
                        {badgeStyle.label}
                      </span>
                    </td>

                    {/* Details Action */}
                    <td className="py-3.5 text-right">
                      <button
                        type="button"
                        className="text-stone-400 hover:text-stone-800 p-1.5 rounded-lg hover:bg-stone-100 transition"
                        title="View Leave Handover Document"
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

export default UserTeamLeaves;