import React, { useState } from "react";
import {
  Wallet,
  ShoppingBag,
  Users,
  PackageCheck,
  ChevronDown,
  Tv,
  Gamepad2,
  Armchair,
  TrendingUp,
  TrendingDown
} from "lucide-react";

const AdminDashboard = () => {
  // Dynamic Theme Palette Controls
  const theme = {
    primary: "#EA580C",       // Vibrant Orange
    primaryLight: "#FFF4ED",  // Soft Orange Tint
    secondary: "#1E5642",     // Deep Emerald Green
    secondaryLight: "#E8F1EC",// Soft Green Tint
    cardBg: "#FFFFFF",
    appBg: "#F7F5F0",
    textDark: "#1C1917",
    textMuted: "#A8A29E",
    border: "#ECE8E1"
  };

  const [activeTooltipMonth, setActiveTooltipMonth] = useState("Apr");

  // Bar Graph data matching image structure
  const barChartData = [
    { month: "Jan", seenH: "h-20", salesH: "h-14" },
    { month: "Feb", seenH: "h-28", salesH: "h-24" },
    { month: "Mar", seenH: "h-24", salesH: "h-16" },
    { month: "Apr", seenH: "h-36", salesH: "h-28", seenVal: "43.787", salesVal: "39.784" },
    { month: "May", seenH: "h-24", salesH: "h-14" },
    { month: "Jun", seenH: "h-28", salesH: "h-20" },
    { month: "Jul", seenH: "h-28", salesH: "h-24" },
  ];

  return (
    <div 
      className="w-full min-h-screen p-4 p-6 font-sans antialiased"
    >
      <div className="max-w-[1380px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* ================= LEFT 8 COLUMNS ================= */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          
          {/* Top 4 Metric Cards 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* 1. Primary Highlight Card (Filled Primary Orange) */}
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
                <span className="text-xs font-medium text-white/80 block">Total Sales</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black tracking-tight leading-none">$612.917</span>
                  <span className="text-[11px] text-white/70">Products vs last month</span>
                </div>
              </div>
            </div>

            {/* 2. Total Orders (Clean White Card) */}
            <div 
              className="rounded-[28px] p-6 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[160px]"
              style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
            >
              <div className="flex items-center justify-between">
                <div 
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{ backgroundColor: theme.appBg, borderColor: theme.border }}
                >
                  <ShoppingBag size={20} style={{ color: theme.secondary }} />
                </div>
                <span className="rounded-full bg-emerald-50 text-emerald-600 px-2.5 py-0.5 text-xs font-bold flex items-center gap-0.5">
                  <TrendingUp size={12} />
                  +12.4%
                </span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-stone-400 block">Total Orders</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black tracking-tight leading-none">34.760</span>
                  <span className="text-[11px] text-stone-400">Orders vs last month</span>
                </div>
              </div>
            </div>

            {/* 3. Visitor */}
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
                <span className="rounded-full bg-rose-50 text-rose-600 px-2.5 py-0.5 text-xs font-bold flex items-center gap-0.5">
                  <TrendingDown size={12} />
                  -2.08%
                </span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-stone-400 block">Visitor</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black tracking-tight leading-none">14.987</span>
                  <span className="text-[11px] text-stone-400">Users vs last month</span>
                </div>
              </div>
            </div>

            {/* 4. Total Sold Products */}
            <div 
              className="rounded-[28px] p-6 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col justify-between min-h-[160px]"
              style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
            >
              <div className="flex items-center justify-between">
                <div 
                  className="h-11 w-11 rounded-2xl flex items-center justify-center border"
                  style={{ backgroundColor: theme.appBg, borderColor: theme.border }}
                >
                  <PackageCheck size={20} style={{ color: theme.primary }} />
                </div>
                <span className="rounded-full bg-emerald-50 text-emerald-600 px-2.5 py-0.5 text-xs font-bold flex items-center gap-0.5">
                  <TrendingUp size={12} />
                  +12.1%
                </span>
              </div>
              <div className="mt-4">
                <span className="text-xs font-medium text-stone-400 block">Total Sold Products</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black tracking-tight leading-none">12.987</span>
                  <span className="text-[11px] text-stone-400">Products vs last month</span>
                </div>
              </div>
            </div>

          </div>

          {/* Customer Habbits Bar Graph Card */}
          <div 
            className="rounded-[32px] p-6 sm:p-7 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-between"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
          >
            {/* Header with Year Switcher */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black tracking-tight">Customer Habbits</h3>
                <p className="text-xs text-stone-400 mt-0.5">Track your customer habbits</p>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-stone-500 cursor-pointer hover:text-stone-800">
                <span>This year</span>
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Chart Legend */}
            <div className="flex items-center gap-4 text-xs font-bold mt-4">
              <span className="flex items-center gap-1.5 text-stone-400">
                <span className="h-2 w-2 rounded-full bg-stone-300" /> Seen product
              </span>
              <span className="flex items-center gap-1.5" style={{ color: theme.primary }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.primary }} /> Sales
              </span>
            </div>

            {/* Bar Chart Area */}
            <div className="relative mt-8 pt-4">
              {/* Y Axis Grid lines */}
              <div className="absolute inset-x-0 inset-y-0 flex flex-col justify-between pointer-events-none text-[10px] text-stone-300 font-bold">
                <div className="border-b border-dashed border-stone-100 flex items-center pb-1">60K</div>
                <div className="border-b border-dashed border-stone-100 flex items-center pb-1">40K</div>
                <div className="border-b border-dashed border-stone-100 flex items-center pb-1">20K</div>
                <div className="border-b border-dashed border-stone-100 flex items-center pb-1">10K</div>
                <div className="flex items-center pb-1">0K</div>
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
                            <span className="h-1.5 w-1.5 rounded-full bg-white" /> 43.787 Products
                          </span>
                          <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: theme.primary }} /> 39.784 Products
                          </span>
                        </div>
                      )}

                      {/* Dual Bars */}
                      <div className="flex items-end gap-1.5">
                        {/* Seen Product (Muted) */}
                        <div 
                          className={`w-4 sm:w-5 rounded-t-full bg-stone-200 transition-all ${col.seenH} ${isHighlighted ? "bg-stone-300" : ""}`}
                        />
                        {/* Sales (Primary Orange) */}
                        <div 
                          className={`w-4 sm:w-5 rounded-t-full transition-all ${col.salesH}`}
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
          
          {/* Top Card: Product Statistic with 3 Concentric Rings */}
          <div 
            className="rounded-[32px] p-6 sm:p-7 border shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black tracking-tight">Product Statistic</h3>
                <p className="text-xs text-stone-400 mt-0.5">Track your product sales</p>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-stone-500 cursor-pointer hover:text-stone-800">
                <span>Today</span>
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Concentric Gauge SVG + Metric */}
            <div className="relative flex items-center justify-center my-6">
              <svg className="w-48 h-48 -rotate-90" viewBox="0 0 160 160">
                {/* Outer Ring 1: Primary (Orange) */}
                <circle cx="80" cy="80" r="68" fill="none" stroke="#F5F3EF" strokeWidth="9" />
                <circle
                  cx="80" cy="80" r="68"
                  fill="none"
                  stroke={theme.primary}
                  strokeWidth="9"
                  strokeDasharray="427"
                  strokeDashoffset="130"
                  strokeLinecap="round"
                />

                {/* Middle Ring 2: Secondary (Green) */}
                <circle cx="80" cy="80" r="54" fill="none" stroke="#F5F3EF" strokeWidth="9" />
                <circle
                  cx="80" cy="80" r="54"
                  fill="none"
                  stroke={theme.secondary}
                  strokeWidth="9"
                  strokeDasharray="339"
                  strokeDashoffset="190"
                  strokeLinecap="round"
                />

                {/* Inner Ring 3: Rose/Accent */}
                <circle cx="80" cy="80" r="40" fill="none" stroke="#F5F3EF" strokeWidth="9" />
                <circle
                  cx="80" cy="80" r="40"
                  fill="none"
                  stroke="#F43F5E"
                  strokeWidth="9"
                  strokeDasharray="251"
                  strokeDashoffset="195"
                  strokeLinecap="round"
                />
              </svg>

              {/* Center Counter */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black tracking-tight leading-tight">9.829</span>
                <span className="text-[11px] text-stone-400 font-medium">Products Sales</span>
                <span className="mt-1 rounded-full bg-emerald-50 text-emerald-600 px-2 py-0.5 text-[10px] font-bold flex items-center gap-0.5">
                  +5.34%
                </span>
              </div>
            </div>

            {/* Category Breakdown list */}
            <div className="space-y-3 pt-2 border-t border-stone-100 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tv size={15} style={{ color: theme.primary }} />
                  <span className="font-semibold text-stone-700">Electronic</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-stone-900">2.487</span>
                  <span className="rounded-md bg-emerald-50 text-emerald-600 px-1.5 py-0.5 text-[10px] font-bold">+1.8%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gamepad2 size={15} style={{ color: theme.secondary }} />
                  <span className="font-semibold text-stone-700">Games</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-stone-900">1.828</span>
                  <span className="rounded-md bg-emerald-50 text-emerald-600 px-1.5 py-0.5 text-[10px] font-bold">+2.3%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Armchair size={15} className="text-rose-500" />
                  <span className="font-semibold text-stone-700">Furniture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-stone-900">1.463</span>
                  <span className="rounded-md bg-rose-50 text-rose-500 px-1.5 py-0.5 text-[10px] font-bold">-1.04%</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Card: Customer Growth with Overlapping Bubble Clusters */}
          <div 
            className="rounded-[32px] p-6 sm:p-7 border shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex-1 flex flex-col justify-between"
            style={{ backgroundColor: theme.cardBg, borderColor: theme.border }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black tracking-tight">Customer Growth</h3>
                <p className="text-xs text-stone-400 mt-0.5">Track customer by locations</p>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-stone-500 cursor-pointer hover:text-stone-800">
                <span>Today</span>
                <ChevronDown size={14} />
              </div>
            </div>

            {/* Bubble Graphic + Location Progress Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 my-auto py-4">
              
              {/* Overlapping Circles Cluster styled with primary orange shades */}
              <div className="sm:col-span-6 relative w-36 h-36 mx-auto">
                {/* Bubble 1: Large Base */}
                <div 
                  className="absolute bottom-2 left-1 w-20 h-20 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md z-10"
                  style={{ backgroundColor: theme.primary }}
                >
                  2.281
                </div>

                {/* Bubble 2: Top Right Medium */}
                <div 
                  className="absolute top-2 right-1 w-18 h-18 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm z-20"
                  style={{ backgroundColor: `${theme.primary}DD` }}
                >
                  2.417
                </div>

                {/* Bubble 3: Top Left Small */}
                <div 
                  className="absolute top-4 left-3 w-11 h-11 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-xs z-0"
                  style={{ backgroundColor: `${theme.primary}99` }}
                >
                  287
                </div>

                {/* Bubble 4: Bottom Right Small */}
                <div 
                  className="absolute bottom-3 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white text-[10px] font-bold shadow-xs z-30"
                  style={{ backgroundColor: `${theme.primary}BB` }}
                >
                  812
                </div>
              </div>

              {/* Country Bars List */}
              <div className="sm:col-span-6 space-y-3 text-xs">
                {/* United States */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="flex items-center gap-1.5 text-stone-800">
                      <span className="text-sm leading-none">🇺🇸</span> United States
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "82%", backgroundColor: theme.primary }} />
                  </div>
                </div>

                {/* Germany */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="flex items-center gap-1.5 text-stone-800">
                      <span className="text-sm leading-none">🇩🇪</span> Germany
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "54%", backgroundColor: theme.secondary }} />
                  </div>
                </div>

                {/* Australia */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="flex items-center gap-1.5 text-stone-800">
                      <span className="text-sm leading-none">🇦🇺</span> Australia
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "38%", backgroundColor: theme.primary }} />
                  </div>
                </div>

                {/* France */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between font-bold">
                    <span className="flex items-center gap-1.5 text-stone-800">
                      <span className="text-sm leading-none">🇫🇷</span> France
                    </span>
                  </div>
                  <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: "24%", backgroundColor: theme.secondary }} />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;