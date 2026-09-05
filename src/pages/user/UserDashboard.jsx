import React, { useState } from "react";
import {
  Wallet,
  FileText,
  ShieldCheck,
  ArrowRight,
  RotateCcw,
  ChevronDown,
  Plus,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  ShieldQuestion,
  Music,
} from "lucide-react";

/* ================= DATA ================= */

const SUMMARY_CARDS = [
  {
    id: "balance",
    icon: Wallet,
    title: "My balance",
    subtitle: "Wallet Overview & Spending",
    value: "$28,520.30",
    badge: "+16%",
    ctaText: "See details",
    variant: "active",
  },
  {
    id: "savings",
    icon: FileText,
    title: "Savings account",
    subtitle: "Steady Growth Savings",
    value: "$24,800.45",
    badge: "+24%",
    ctaText: "View summary",
    variant: "dark",
  },
  {
    id: "investment",
    icon: ShieldCheck,
    title: "Investment portfolio",
    subtitle: "Track Your Wealth Growth",
    value: "$70,120.78",
    badge: "+21%",
    ctaText: "Analyze performance",
    variant: "dark",
  },
];

const CURRENCIES = [
  { code: "USD", flag: "🇺🇸", value: "$24,678.00", delta: "+1.2% today", status: "Active" },
  { code: "EUR", flag: "🇩🇪", value: "€28,345.00", delta: "+0.8% today", status: "Active" },
  { code: "AUD", flag: "🇦🇺", value: "$20,517.52", delta: "-0.4% today", status: "Active" },
  { code: "GBP", flag: "🇬🇧", value: "£25,000.00", delta: "+2.1% today", status: "Inactive" },
];

const CASH_FLOW_MONTHS = [
  { month: "Jan", value: 26 },
  { month: "Feb", value: 22 },
  { month: "Mar", value: 46, highlighted: true },
  { month: "Apr", value: 25 },
  { month: "May", value: 32 },
  { month: "Jun", value: 15 },
  { month: "Jul", value: 20 },
];

const TOOLTIP_DATA = {
  date: "Mar 22, 2026",
  income: "$45,847.00",
  expense: "-$1,846.00",
};

const ACTIVITIES = [
  {
    id: 1,
    icon: ShieldQuestion,
    title: "Software License",
    orderId: "MX-000076",
    date: "17 Apr 2026",
    time: "03:45 PM",
    price: "$25,500",
    status: "Completed",
  },
  {
    id: 2,
    icon: Music,
    title: "Music Festival",
    orderId: "MX-000081",
    date: "12 Apr 2026",
    time: "07:10 PM",
    price: "$1,200",
    status: "Pending",
  },
];

/* ================= MAIN ================= */

const UserDashboard = () => {
  const [range, setRange] = useState("yearly");
  const [activeBar, setActiveBar] = useState(
    CASH_FLOW_MONTHS.findIndex((m) => m.highlighted)
  );

  return (
    <div className="min-h-screen w-full">
      <div className="mx-auto w-full space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-white">Overview</h1>
            <p className="mt-0.5 text-[11px] text-white/40">
              Here is the summary of overall data
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-medium text-white/70 transition-colors hover:bg-white/[0.08]">
              This Month
              <ChevronDown size={13} />
            </button>
            <button className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-medium text-white/70 transition-colors hover:bg-white/[0.08]">
              <RotateCcw size={12} />
              Reset Data
            </button>
          </div>
        </div>

        {/* ================= SUMMARY CARDS ================= */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {SUMMARY_CARDS.map((card) => (
            <SummaryCard key={card.id} {...card} />
          ))}
        </div>

        {/* ================= WALLET + CASH FLOW ================= */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.85fr_1.3fr]">
          {/* My Wallet */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#131313] p-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-semibold text-white">My Wallet</h2>
                <p className="mt-0.5 text-[10px] text-white/35">
                  Today: 1 USD = 83.20 INR
                </p>
              </div>
              <button className="flex items-center gap-1 rounded-full bg-olive-500 px-3 py-1.5 text-[10px] font-semibold text-white transition-colors hover:bg-olive-600">
                <Plus size={12} />
                Add New
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {CURRENCIES.map((c) => (
                <CurrencyCard key={c.code} {...c} />
              ))}
            </div>
          </div>

          {/* Cash Flow */}
          <div className="rounded-2xl border border-white/[0.06] bg-[#131313] p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] text-white/40">Cash Flow</p>
                <h2 className="mt-1 text-2xl font-semibold text-white">
                  $540,323.45
                </h2>
              </div>

              <div className="flex items-center gap-1.5 rounded-full bg-white/[0.05] p-1">
                <button
                  onClick={() => setRange("monthly")}
                  className={`rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                    range === "monthly"
                      ? "bg-white text-black"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setRange("yearly")}
                  className={`rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors ${
                    range === "yearly"
                      ? "bg-olive-500 text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            <CashFlowChart
              activeBar={activeBar}
              setActiveBar={setActiveBar}
            />
          </div>
        </div>

        {/* ================= RECENT ACTIVITIES ================= */}
        <div className="rounded-2xl border border-white/[0.06] bg-[#131313] p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-white">
              Recent Activities
            </h2>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-white/40">
                <Search size={12} />
                Search
              </div>
              <button className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1.5 text-[10px] text-white/50 hover:bg-white/[0.06]">
                Filter
                <SlidersHorizontal size={11} />
              </button>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[720px] border-separate border-spacing-y-1">
              <thead>
                <tr className="rounded-lg bg-white/[0.03] text-left">
                  <th className="rounded-l-lg py-2.5 pl-3 text-[9px] font-medium uppercase tracking-wide text-white/35">
                    <input type="checkbox" className="accent-olive-500" />
                  </th>
                  {["Activity", "Order ID", "Date", "Time", "Price", "Status"].map(
                    (head) => (
                      <th
                        key={head}
                        className="py-2.5 text-[9px] font-medium uppercase tracking-wide text-white/35"
                      >
                        {head}
                      </th>
                    )
                  )}
                  <th className="rounded-r-lg" />
                </tr>
              </thead>

              <tbody>
                {ACTIVITIES.map((activity) => (
                  <ActivityRow key={activity.id} {...activity} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= SUB-COMPONENTS ================= */

const SummaryCard = ({ icon: Icon, title, subtitle, value, badge, ctaText, variant }) => {
  const isActive = variant === "active";

  return (
    <div
      className={`
        relative overflow-hidden rounded-2xl
        ${isActive ? "bg-gradient-to-br from-olive-600 to-olive-900" : "border border-white/[0.06] bg-gradient-to-br from-[#1c1c1c] to-[#111111]"}
      `}
    >
      <div className="p-4 pb-14">
        <div className="flex items-start justify-between">
          <div
            className={`flex h-9 w-9 items-center justify-center rounded-xl ${
              isActive ? "bg-white text-olive-500" : "bg-white text-black"
            }`}
          >
            <Icon size={16} />
          </div>
          <button
            className={isActive ? "text-white/70" : "text-white/30 hover:text-white/60"}
            aria-label={`${title} options`}
          >
            <MoreHorizontal size={16} />
          </button>
        </div>

        <p className={`mt-3 text-[13px] font-semibold ${isActive ? "text-white" : "text-white"}`}>
          {title}
        </p>
        <p className={`text-[10px] ${isActive ? "text-white/70" : "text-white/35"}`}>
          {subtitle}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <h2 className="text-xl font-bold text-white">{value}</h2>
          <span
            className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
              isActive ? "bg-black/20 text-white" : "bg-olive-500/10 text-olive-400"
            }`}
          >
            {badge}
          </span>
        </div>
      </div>

      {/* footer CTA strip */}
      <button
        className={`
          absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-2.5 text-[10px] font-medium transition-opacity hover:opacity-90
          ${isActive
            ? "bg-gradient-to-r from-olive-500/0 via-white/40 to-white text-olive-700"
            : "bg-gradient-to-r from-white/0 to-white/15 text-white/70"}
        `}
      >
        {ctaText}
        <ArrowRight size={12} />
      </button>
    </div>
  );
};

const CurrencyCard = ({ flag, code, value, delta, status }) => {
  const isUp = delta.startsWith("+");
  const isActive = status === "Active";

  return (
    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-base leading-none">{flag}</span>
          <span className="text-[10px] font-medium text-white/60">{code}</span>
        </div>
        <MoreHorizontal size={13} className="text-white/25" />
      </div>

      <h3 className="mt-2.5 text-sm font-bold text-white">{value}</h3>
      <p className={`mt-0.5 text-[9px] ${isUp ? "text-emerald-400" : "text-red-400"}`}>
        {delta}
      </p>
      <p
        className={`mt-1.5 text-[9px] font-medium ${
          isActive ? "text-olive-400" : "text-white/25"
        }`}
      >
        {status}
      </p>
    </div>
  );
};

const CashFlowChart = ({ activeBar, setActiveBar }) => {
  const maxValue = Math.max(...CASH_FLOW_MONTHS.map((m) => m.value));

  return (
    <div className="relative mt-6 flex h-[220px] gap-3">
      {/* y-axis */}
      <div className="flex flex-col justify-between pb-6 text-[9px] text-white/25">
        {["50k", "40k", "30k", "20k", "10k", "0k"].map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      {/* bars */}
      <div className="relative flex flex-1 items-end justify-around">
        {/* grid lines */}
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-6 flex flex-col justify-between">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border-t border-dashed border-white/[0.06]" />
          ))}
        </div>

        {CASH_FLOW_MONTHS.map((bar, index) => {
          const isActive = index === activeBar;
          const heightPct = (bar.value / maxValue) * 100;

          return (
            <div
              key={bar.month}
              className="relative z-10 flex h-full w-[11%] flex-col items-center justify-end pb-6"
              onMouseEnter={() => setActiveBar(index)}
            >
              {isActive && (
                <div className="absolute -top-2 left-1/2 z-20 w-40 -translate-x-1/2 -translate-y-full rounded-xl border border-white/10 bg-[#1c1c1c] p-2.5 shadow-xl">
                  <p className="text-[9px] text-white/40">{TOOLTIP_DATA.date}</p>
                  <div className="mt-1 flex items-center justify-between gap-2">
                    <span className="text-[9px] text-white/40">Income</span>
                    <span className="text-[10px] font-semibold text-white">
                      {TOOLTIP_DATA.income}
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] text-white/40">Expense</span>
                    <span className="text-[10px] font-semibold text-red-400">
                      {TOOLTIP_DATA.expense}
                    </span>
                  </div>
                </div>
              )}

              <div
                style={{ height: `${heightPct}%` }}
                className={`w-full rounded-t-lg transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-b from-olive-500 to-white"
                    : "bg-gradient-to-b from-white/[0.12] to-white/[0.03]"
                }`}
              >
                {isActive && (
                  <div className="relative -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-olive-500 bg-white" />
                )}
              </div>

              <span className="absolute bottom-0 text-[9px] text-white/30">
                {bar.month}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ActivityRow = ({ icon: Icon, title, orderId, date, time, price, status }) => {
  const isCompleted = status === "Completed";

  return (
    <tr className="bg-white/[0.015] transition-colors hover:bg-white/[0.03]">
      <td className="rounded-l-lg py-3 pl-3">
        <input type="checkbox" className="accent-olive-500" />
      </td>

      <td className="py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500/10 text-rose-400">
            <Icon size={13} />
          </div>
          <span className="text-[11px] font-medium text-white">{title}</span>
        </div>
      </td>

      <td className="py-3 text-[10px] text-white/40">{orderId}</td>
      <td className="py-3 text-[10px] text-white/40">{date}</td>
      <td className="py-3 text-[10px] text-white/40">{time}</td>
      <td className="py-3 text-[10px] font-medium text-white">{price}</td>

      <td className="py-3">
        <span
          className={`rounded-full px-2 py-1 text-[9px] font-medium ${
            isCompleted
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-yellow-500/10 text-yellow-400"
          }`}
        >
          {status}
        </span>
      </td>

      <td className="rounded-r-lg py-3 pr-3 text-right">
        <button className="text-white/25 hover:text-white/60" aria-label="Row options">
          <MoreHorizontal size={14} />
        </button>
      </td>
    </tr>
  );
};

export default UserDashboard;