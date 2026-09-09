import React, { useState } from "react";
import {
  TrendingUp,
  Zap,
  GitPullRequest,
  CheckCircle2,
  AlertTriangle,
  Award,
  ChevronDown,
  Calendar,
  Download,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  Star
} from "lucide-react";

const UserTeamPerformance = () => {
  const [selectedSprint, setSelectedSprint] = useState("Sprint 18 (Current)");

  const leaderboard = [
    {
      id: "EMP-01",
      name: "Jordan Lee",
      role: "Lead UI / UX Designer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      pointsDelivered: 42,
      prsMerged: 16,
      reviewsDone: 24,
      onTimeDelivery: "98%",
      score: 9.6,
      rank: 1,
    },
    {
      id: "EMP-02",
      name: "Marcus Vance",
      role: "Backend Architect",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      pointsDelivered: 38,
      prsMerged: 21,
      reviewsDone: 35,
      onTimeDelivery: "94%",
      score: 9.4,
      rank: 2,
    },
    {
      id: "EMP-03",
      name: "David Chen",
      role: "Staff Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      pointsDelivered: 35,
      prsMerged: 18,
      reviewsDone: 19,
      onTimeDelivery: "92%",
      score: 9.1,
      rank: 3,
    },
    {
      id: "EMP-04",
      name: "Sophia Patel",
      role: "QA Automation Engineer",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      pointsDelivered: 29,
      prsMerged: 12,
      reviewsDone: 42,
      onTimeDelivery: "96%",
      score: 8.9,
      rank: 4,
    },
    {
      id: "EMP-05",
      name: "Liam O'Connor",
      role: "Full Stack Engineer",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80",
      pointsDelivered: 26,
      prsMerged: 14,
      reviewsDone: 17,
      onTimeDelivery: "89%",
      score: 8.6,
      rank: 5,
    },
  ];

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & SPRINT CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Team Pod Performance
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Sprint velocity metrics, code delivery health, and peer review distribution
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Sprint Selector */}
          <div className="flex items-center gap-2 rounded-full border border-stone-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm cursor-pointer hover:bg-stone-50 transition">
            <Calendar size={14} className="text-stone-500" />
            <span>{selectedSprint}</span>
            <ChevronDown size={13} className="text-stone-400" />
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[#EA580C] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#d94e07] transition active:scale-[0.98]"
          >
            <Download size={14} />
            <span>Sprint Report</span>
          </button>
        </div>
      </div>

      {/* 2. STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#E1EBE6] text-[#1E5642] flex items-center justify-center shrink-0 border border-emerald-100">
            <Zap size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Story Points Done</span>
            <span className="text-lg font-black text-stone-900 leading-tight">170 / 185 pts</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-100">
            <TrendingUp size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Sprint Velocity</span>
            <span className="text-lg font-black text-stone-900 leading-tight">92% Target</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <GitPullRequest size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">PR Turnaround</span>
            <span className="text-lg font-black text-stone-900 leading-tight">3.8 Hours Avg</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#FAF8F5] text-stone-700 flex items-center justify-center shrink-0 border border-stone-100">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Test Coverage</span>
            <span className="text-lg font-black text-stone-900 leading-tight">88.4% Passed</span>
          </div>
        </div>
      </div>

      {/* 3. SPRINT GRAPH & CONCENTRIC HEALTH ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* SPRINT BURN-UP VELOCITY CHART (7 Columns) */}
        <div className="lg:col-span-7 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Sprint 18 Burn-up Trajectory</h3>
              <p className="text-[11px] text-stone-400">Cumulative story points delivered daily</p>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-stone-700">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1E5642]" /> Delivered
              </span>
              <span className="flex items-center gap-1.5 text-stone-700">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" /> Planned Scope
              </span>
            </div>
          </div>

          {/* SVG Trajectory Graph */}
          <div className="relative pt-2">
            <div className="flex gap-3">
              <div className="flex flex-col justify-between text-[11px] font-semibold text-stone-400 h-40 pr-2 pb-5">
                <span>180p</span>
                <span>140p</span>
                <span>100p</span>
                <span>60p</span>
                <span>20p</span>
              </div>

              <div className="relative flex-1 h-40 border-b border-stone-100 pb-5">
                <svg viewBox="0 0 500 140" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="teamVelocityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EA580C" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#EA580C" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Planned Scope Line */}
                  <path
                    d="M 10 120 L 100 95 L 200 70 L 300 45 L 400 25 L 490 15"
                    fill="none"
                    stroke="#EA580C"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />

                  {/* Actual Delivered Area & Curve */}
                  <path
                    d="M 10 130 Q 70 120 120 100 T 240 75 T 350 40 T 450 22 L 450 135 L 10 135 Z"
                    fill="url(#teamVelocityGrad)"
                  />
                  <path
                    d="M 10 130 Q 70 120 120 100 T 240 75 T 350 40 T 450 22"
                    fill="none"
                    stroke="#1E5642"
                    strokeWidth="3"
                  />

                  {/* Marker Pin */}
                  <circle cx="350" cy="40" r="4.5" fill="#1E5642" stroke="#fff" strokeWidth="2" />
                  <line x1="350" y1="40" x2="350" y2="135" stroke="#1E5642" strokeDasharray="3 3" strokeWidth="1.5" />
                </svg>

                <div className="absolute top-[20%] left-[70%] -translate-x-1/2 -translate-y-full bg-white border border-stone-200 px-2 py-0.5 rounded-lg shadow-sm text-[11px] font-bold text-stone-800">
                  Day 8: 142 pts
                </div>
              </div>
            </div>

            {/* Sprint Days Axis */}
            <div className="flex justify-between text-[11px] text-stone-400 pl-12 pr-2 mt-2 font-medium">
              <span>Day 1</span>
              <span>Day 3</span>
              <span>Day 5</span>
              <span>Day 7</span>
              <span className="text-stone-900 font-bold">Day 8 (Today)</span>
              <span>Day 10</span>
            </div>
          </div>
        </div>

        {/* QUALITY & SPEED CONCENTRIC GAUGE (5 Columns) */}
        <div className="lg:col-span-5 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Sprint Quality Index</h3>
              <p className="text-[11px] text-stone-400">PRs, test coverage & bug reopen rates</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-100">
              Optimal
            </span>
          </div>

          {/* Concentric Gauge SVG */}
          <div className="relative w-40 h-40 mx-auto my-3 flex items-center justify-center">
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
                strokeDashoffset="55"
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
                strokeDashoffset="28"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-stone-900">94.8</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                Quality Index
              </span>
            </div>
          </div>

          {/* Summary Legend Breakdown */}
          <div className="grid grid-cols-2 gap-2 text-center pt-2 border-t border-stone-100">
            <div className="p-2 rounded-xl bg-[#FAF8F5] border border-stone-100">
              <span className="text-[10px] text-stone-400 font-semibold block">PR Reopen Rate</span>
              <span className="text-xs font-black text-[#1E5642]">2.1% (Low)</span>
            </div>
            <div className="p-2 rounded-xl bg-[#FAF8F5] border border-stone-100">
              <span className="text-[10px] text-stone-400 font-semibold block">Zero-Bug Release</span>
              <span className="text-xs font-black text-[#EA580C]">3 Consecutive</span>
            </div>
          </div>
        </div>

      </div>

      {/* 4. MEMBER CONTRIBUTION LEADERBOARD TABLE */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-stone-900">Pod Member Sprint Contributions</h3>
            <p className="text-[11px] text-stone-400">Story points, pull request activity, and peer reviews</p>
          </div>
          <span className="text-xs font-semibold text-stone-500">Sorted by Impact Score</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-normal border-b border-stone-100 pb-2">
                <th className="pb-3 font-normal">Rank & Colleague</th>
                <th className="pb-3 font-normal">Points Delivered</th>
                <th className="pb-3 font-normal">PRs Merged</th>
                <th className="pb-3 font-normal">Code Reviews</th>
                <th className="pb-3 font-normal">On-Time Rate</th>
                <th className="pb-3 font-normal">Impact Rating</th>
                <th className="pb-3 font-normal text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {leaderboard.map((member) => (
                <tr key={member.id} className="hover:bg-stone-50/60 transition-colors">
                  {/* Rank & Profile */}
                  <td className="py-3.5 font-semibold text-stone-800 flex items-center gap-3">
                    <span className={`w-5 text-center font-bold text-xs ${
                      member.rank === 1 ? "text-amber-500 font-black" : "text-stone-400"
                    }`}>
                      #{member.rank}
                    </span>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full object-cover border border-stone-100 shadow-2xs"
                    />
                    <div>
                      <span className="font-bold text-stone-900 block leading-tight">{member.name}</span>
                      <span className="text-[10px] text-stone-400 font-normal">{member.role}</span>
                    </div>
                  </td>

                  {/* Points */}
                  <td className="py-3.5 font-bold text-stone-900">
                    <span className="rounded-lg bg-[#FAF8F5] border border-stone-200/60 px-2 py-0.5 text-stone-800">
                      {member.pointsDelivered} pts
                    </span>
                  </td>

                  {/* PRs */}
                  <td className="py-3.5 font-semibold text-stone-700">{member.prsMerged} PRs</td>

                  {/* Reviews */}
                  <td className="py-3.5 font-semibold text-stone-700">{member.reviewsDone} Reviews</td>

                  {/* On-Time Rate */}
                  <td className="py-3.5 font-bold text-[#1E5642]">{member.onTimeDelivery}</td>

                  {/* Impact Rating */}
                  <td className="py-3.5">
                    <div className="flex items-center gap-1.5 font-black text-xs text-stone-800">
                      <Star size={13} className="text-amber-400 fill-amber-400" />
                      <span>{member.score}</span>
                    </div>
                  </td>

                  {/* Detail Action */}
                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      className="text-stone-400 hover:text-stone-800 p-1.5 rounded-lg hover:bg-stone-100 transition"
                      title="View Colleague Sprint Detail"
                    >
                      <ArrowUpRight size={14} />
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

export default UserTeamPerformance;