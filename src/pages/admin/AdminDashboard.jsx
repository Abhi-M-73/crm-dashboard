import React, { useState } from "react";
import {
  Wallet,
  Clock,
  Users,
  CalendarCheck,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const AdminDashboard = () => {
  // Theme Palette Controls
  const theme = {
    primary: "var(--primary)",        // Vibrant Orange
    primaryLight: "#FFF4ED",   // Soft Orange Tint
    secondary: "var(--secondary)",      // Theme Secondary Color
    secondaryLight: "#E8F1EC", // Soft Green Tint
    cardBg: "#FFFFFF",
    appBg: "#F7F5F0",
    textDark: "#1C1917",
    textMuted: "var(--secondary-300)",
    border: "#ECE8E1"
  };

  const [activeTooltipMonth, setActiveTooltipMonth] = useState("Apr");

  // Working Hours Bar Graph Data (Target vs Actual)
  const barChartData = [
    { month: "Jan", targetH: "h-20", actualH: "h-16" },
    { month: "Feb", targetH: "h-28", actualH: "h-24" },
    { month: "Mar", targetH: "h-24", actualH: "h-22" },
    { month: "Apr", targetH: "h-36", actualH: "h-32", targetVal: "40.0h", actualVal: "38.5h" },
    { month: "May", targetH: "h-24", actualH: "h-20" },
    { month: "Jun", targetH: "h-28", actualH: "h-26" },
    { month: "Jul", targetH: "h-28", actualH: "h-25" },
  ];

  const topEmployees = [
    { name: "Claire Horington", role: "Sr. Frontend Lead", punctuality: "99.4%", tasks: "18/18 Done", avatarBg: "bg-[var(--secondary-600)] text-white" },
    { name: "Marcus Vance", role: "Product Designer", punctuality: "98.2%", tasks: "14/14 Done", avatarBg: "bg-amber-600 text-white" },
    { name: "Sophia Chen", role: "DevOps Lead", punctuality: "98.8%", tasks: "22/22 Done", avatarBg: "bg-blue-600 text-white" },
  ];

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 font-sans antialiased text-stone-900">
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* ================= LEFT 8 COLUMNS ================= */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          
          {/* Top 4 Metric Cards 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* 1. Monthly Payroll (Primary Highlight Card) */}
            <div 
              className="relative overflow-hidden rounded-[28px] p-6 text-white shadow-sm flex flex-col justify-between min-h-[160px]"
              style={{ backgroundColor: theme.primary }}
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Wallet size={20} className="text-white" />
                </div>
                <span className="rounded-full bg-white/25 px-2.5 py-0.5 text-xs font-bold flex items-center gap-0.5">
                  <TrendingUp size={12} />
                  +2.08%
                </span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-white/80 block">Monthly Payroll Budget</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black tracking-tight leading-none">$148,200</span>
                  <span className="text-[11px] text-white/70">March 2026 Cycle</span>
                </div>
              </div>
            </div>

            {/* 2. Today's Attendance Rate */}
            <div 
              className="rounded-[28px] p-6 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[160px]"
              style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
            >
              <div className="flex items-center justify-between">
                <div 
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{ backgroundColor: theme.appBg, borderColor: theme.border }}
                >
                  <Clock size={20} style={{ color: theme.secondary }} />
                </div>
                <span className="rounded-full bg-[var(--secondary-50)] text-[var(--secondary-600)] px-2.5 py-0.5 text-xs font-bold flex items-center gap-0.5">
                  <TrendingUp size={12} />
                  98.4%
                </span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-stone-400 block">Today's Attendance</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black tracking-tight leading-none">248 / 252</span>
                  <span className="text-[11px] text-[var(--secondary-600)] font-semibold">Staff Checked In</span>
                </div>
              </div>
            </div>

            {/* 3. Total Headcount */}
            <div 
              className="rounded-[28px] p-6 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[160px]"
              style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
            >
              <div className="flex items-center justify-between">
                <div 
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{ backgroundColor: theme.appBg, borderColor: theme.border }}
                >
                  <Users size={20} style={{ color: theme.secondary }} />
                </div>
                <span className="rounded-full bg-[var(--secondary-50)] text-[var(--secondary-600)] px-2.5 py-0.5 text-xs font-bold flex items-center gap-0.5">
                  <TrendingUp size={12} />
                  +14 Staff
                </span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-stone-400 block">Total Headcount</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black tracking-tight leading-none">252</span>
                  <span className="text-[11px] text-stone-400">Full-time employees</span>
                </div>
              </div>
            </div>

            {/* 4. Pending Approvals Queue */}
            <div 
              className="rounded-[28px] p-6 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[160px]"
              style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
            >
              <div className="flex items-center justify-between">
                <div 
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{ backgroundColor: theme.appBg, borderColor: theme.border }}
                >
                  <CalendarCheck size={20} style={{ color: theme.primary }} />
                </div>
                <span className="rounded-full bg-amber-50 text-amber-700 px-2.5 py-0.5 text-xs font-bold flex items-center gap-0.5">
                  Action Req
                </span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-stone-400 block">Pending Approvals</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black tracking-tight leading-none">5</span>
                  <span className="text-[11px] text-stone-400">3 Leaves • 2 Missed Punches</span>
                </div>
              </div>
            </div>

          </div>

          {/* Working Hours Bar Graph Card */}
          <div 
            className="rounded-[32px] p-6 sm:p-7 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-between"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
          >
            {/* Header with Year Switcher */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black tracking-tight">Workforce Working Hours</h3>
                <p className="text-xs text-stone-400 mt-0.5">Track Target vs Actual hours logged across departments</p>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-stone-500 cursor-pointer hover:text-stone-800">
                <span>2026</span>
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Chart Legend */}
            <div className="flex items-center gap-4 text-xs font-bold mt-4">
              <span className="flex items-center gap-1.5 text-stone-400">
                <span className="h-2 w-2 rounded-full bg-stone-300" /> Target Hours (40h)
              </span>
              <span className="flex items-center gap-1.5" style={{ color: theme.primary }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.primary }} /> Actual Logged
              </span>
            </div>

            {/* Bar Chart Area */}
            <div className="relative mt-8 pt-4">
              {/* Y Axis Grid lines */}
              <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none text-[10px] text-stone-300 font-bold">
                <div className="border-b border-dashed border-stone-100 flex items-center pb-1">50h</div>
                <div className="border-b border-dashed border-stone-100 flex items-center pb-1">40h</div>
                <div className="border-b border-dashed border-stone-100 flex items-center pb-1">30h</div>
                <div className="border-b border-dashed border-stone-100 flex items-center pb-1">20h</div>
                <div className="flex items-center pb-1">0h</div>
              </div>

              {/* Bars Row */}
              <div className="relative z-10 pl-8 pr-2 flex items-end justify-between h-44">
                {barChartData.map((col) => {
                  const isHighlighted = col.month === activeTooltipMonth;
                  return (
                    <div 
                      key={col.month}
                      onClick={() => setActiveTooltipMonth(col.month)}
                      className="flex flex-col items-center gap-2 group cursor-pointer relative"
                    >
                      {/* Floating Dark Tooltip on active */}
                      {isHighlighted && (
                        <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-stone-900 text-white rounded-2xl px-3 py-1.5 shadow-xl text-[10px] font-bold z-20 whitespace-nowrap flex flex-col gap-0.5">
                          <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Target: {col.targetVal}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: theme.primary }} /> Actual: {col.actualVal}
                          </span>
                        </div>
                      )}

                      {/* Dual Bars */}
                      <div className="flex items-end gap-1.5">
                        {/* Target (Muted) */}
                        <div 
                          className={`w-4 sm:w-5 rounded-t-full bg-stone-200 transition-all ${col.targetH} ${isHighlighted ? "bg-stone-300" : ""}`}
                        />
                        {/* Actual (Primary Orange) */}
                        <div 
                          className={`w-4 sm:w-5 rounded-t-full transition-all ${col.actualH}`}
                          style={{ backgroundColor: isHighlighted ? theme.primary : `${theme.primary}CC` }}
                        />
                      </div>

                      {/* X Label */}
                      <span className={`text-[11px] font-bold mt-1 ${isHighlighted ? "text-stone-900" : "text-stone-400"}`}>
                        {col.month}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

        {/* ================= RIGHT 4 COLUMNS ================= */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          
          {/* Department Headcount Split Donut */}
          <div 
            className="rounded-[32px] p-6 sm:p-7 border shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-stone-900">Department Headcount</h3>
              <span className="text-xs font-bold text-[var(--secondary-700)] bg-[var(--secondary-50)] px-2 py-0.5 rounded-full">
                4 Units
              </span>
            </div>

            <div className="my-6 flex justify-center">
              <div
                className="h-36 w-36 rounded-full flex items-center justify-center shadow-inner"
                style={{
                  background:
                    "conic-gradient(var(--primary) 0% 42%, var(--secondary) 42% 67%, var(--primary-500) 67% 85%, var(--secondary-300) 85% 100%)",
                }}
              >
                <div className="h-20 w-20 rounded-full bg-white flex flex-col items-center justify-center shadow-xs">
                  <span className="text-lg font-black text-stone-900 leading-none">252</span>
                  <span className="text-[9px] text-stone-400 font-bold uppercase mt-0.5">Staff</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary)]" /> Engineering
                </span>
                <span className="font-bold text-stone-900">106 (42%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary)]" /> Design & Product
                </span>
                <span className="font-bold text-stone-900">63 (25%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--primary-500)]" /> Sales & Marketing
                </span>
                <span className="font-bold text-stone-900">45 (18%)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-stone-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-[var(--secondary-300)]" /> HR & Operations
                </span>
                <span className="font-bold text-stone-900">38 (15%)</span>
              </div>
            </div>
          </div>

          {/* Top Performer Spotlights */}
          <div 
            className="rounded-[32px] p-6 sm:p-7 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-between"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
          >
            <div>
              <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                <h3 className="text-base font-bold text-stone-900">Squad Leaders</h3>
                <span className="text-xs text-stone-400">Punctuality</span>
              </div>

              <div className="mt-4 space-y-3">
                {topEmployees.map((emp) => (
                  <div key={emp.name} className="flex items-center justify-between p-2 rounded-xl hover:bg-stone-50 transition">
                    <div className="flex items-center gap-2.5">
                      <div className={`h-8 w-8 rounded-lg flex items-center justify-center text-xs font-bold ${emp.avatarBg}`}>
                        {emp.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-stone-900 leading-tight">{emp.name}</p>
                        <p className="text-[10px] text-stone-400">{emp.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-[var(--secondary-700)]">{emp.punctuality}</span>
                      <p className="text-[9px] text-stone-400">{emp.tasks}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Next Attendance Sync</span>
              <span className="font-mono font-bold text-stone-900">12:00 PM</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;