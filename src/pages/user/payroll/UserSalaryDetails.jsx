import React, { useState } from "react";
import {
  BadgeDollarSign,
  Calendar,
  Download,
  CreditCard,
  Building2,
  FileText,
  Clock,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
  ShieldCheck,
  Percent,
  Wallet
} from "lucide-react";

const UserSalaryDetails = () => {
  const [selectedYear, setSelectedYear] = useState("FY 2026 - 2027");

  const payslips = [
    {
      id: "PS-2026-08",
      month: "August 2026",
      disbursedOn: "Aug 31, 2026",
      gross: "$7,500.00",
      deductions: "$1,150.00",
      netPay: "$6,350.00",
      status: "Disbursed",
    },
    {
      id: "PS-2026-07",
      month: "July 2026",
      disbursedOn: "Jul 31, 2026",
      gross: "$7,500.00",
      deductions: "$1,150.00",
      netPay: "$6,350.00",
      status: "Disbursed",
    },
    {
      id: "PS-2026-06",
      month: "June 2026",
      disbursedOn: "Jun 30, 2026",
      gross: "$7,500.00",
      deductions: "$1,150.00",
      netPay: "$6,350.00",
      status: "Disbursed",
    },
    {
      id: "PS-2026-05",
      month: "May 2026",
      disbursedOn: "May 31, 2026",
      gross: "$7,500.00",
      deductions: "$1,150.00",
      netPay: "$6,350.00",
      status: "Disbursed",
    },
  ];

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & FISCAL YEAR SELECTOR */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Salary & Compensation
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            View your monthly salary breakdown, tax deductions, and download official payslips
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-stone-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm cursor-pointer hover:bg-stone-50 transition">
            <Calendar size={14} className="text-stone-500" />
            <span>{selectedYear}</span>
            <ChevronDown size={13} className="text-stone-400" />
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[#EA580C] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#d94e07] transition active:scale-[0.98]"
          >
            <Download size={14} />
            <span>Latest Payslip</span>
          </button>
        </div>
      </div>

      {/* 2. STATS PILL COUNTERS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#E1EBE6] text-[#1E5642] flex items-center justify-center shrink-0 border border-emerald-100">
            <BadgeDollarSign size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Net Take-Home</span>
            <span className="text-lg font-black text-stone-900 leading-tight">$6,350.00</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-100">
            <Wallet size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Monthly Gross CTC</span>
            <span className="text-lg font-black text-stone-900 leading-tight">$7,500.00</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
            <Percent size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Total Deductions</span>
            <span className="text-lg font-black text-stone-900 leading-tight">$1,150.00</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Next Pay Cycle</span>
            <span className="text-lg font-black text-stone-900 leading-tight">Sep 30, 2026</span>
          </div>
        </div>
      </div>

      {/* 3. CONCENTRIC TAKE-HOME GAUGE & EARNINGS BREAKDOWN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* CONCENTRIC GAUGE CARD (5 Columns) */}
        <div className="lg:col-span-5 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Take-Home Ratio</h3>
              <p className="text-[11px] text-stone-400">Net salary vs tax/benefit deductions</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-100">
              Disbursed On Time
            </span>
          </div>

          {/* Concentric Gauge SVG */}
          <div className="relative w-44 h-44 mx-auto my-3 flex items-center justify-center">
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
                strokeDashoffset="48"
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
                strokeDashoffset="35"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-stone-900">84.6%</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                Net Payout
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#1E5642]" /> $6,350 Net Pay
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" /> $1,150 Deductions
            </span>
          </div>
        </div>

        {/* SALARY SPLIT SUMMARY (7 Columns) */}
        <div className="lg:col-span-7 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Monthly Compensation Structure</h3>
              <p className="text-[11px] text-stone-400">Standard monthly CTC structure per employment agreement</p>
            </div>
            <span className="text-xs font-bold text-[#1E5642] bg-[#E1EBE6] px-2.5 py-0.5 rounded-full">
              Full-time Regular
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            {/* Earnings Column */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100 space-y-2">
              <span className="text-[11px] font-bold text-[#1E5642] uppercase tracking-wider block">
                Earnings (Gross $7,500)
              </span>
              <div className="flex justify-between text-stone-600">
                <span>Basic Salary</span>
                <span className="font-bold text-stone-800">$4,200.00</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>House Rent Allowance (HRA)</span>
                <span className="font-bold text-stone-800">$1,800.00</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Special Allowance</span>
                <span className="font-bold text-stone-800">$1,000.00</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Internet & Learning Subsidy</span>
                <span className="font-bold text-stone-800">$500.00</span>
              </div>
            </div>

            {/* Deductions Column */}
            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100 space-y-2">
              <span className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider block">
                Deductions ($1,150)
              </span>
              <div className="flex justify-between text-stone-600">
                <span>Provident Fund (401k / EPF)</span>
                <span className="font-bold text-stone-800">$504.00</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Federal & State Income Tax</span>
                <span className="font-bold text-stone-800">$480.00</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Health Insurance Premium</span>
                <span className="font-bold text-stone-800">$146.00</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>Professional Tax</span>
                <span className="font-bold text-stone-800">$20.00</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-stone-100 font-medium">
            <span>Annual Cost to Company (CTC): $90,000.00</span>
            <span className="text-[#EA580C] font-semibold cursor-pointer hover:underline">
              Tax Declaration Form 12BB &rarr;
            </span>
          </div>
        </div>

      </div>

      {/* 4. BANK ACCOUNT DETAILS CARD */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="h-12 w-12 rounded-2xl bg-[#FAF8F5] border border-stone-200/60 text-[#1E5642] flex items-center justify-center shrink-0">
            <Building2 size={22} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-extrabold text-stone-900">Silicon Valley Bank & Trust</h3>
              <span className="rounded-full bg-emerald-50 text-emerald-700 px-2.5 py-0.5 text-[10px] font-bold border border-emerald-100">
                Primary Salary Account
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Account No: <span className="font-mono font-bold text-stone-700">•••• •••• 8842</span> &bull; Routing: <span className="font-mono text-stone-700">121000358</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FAF8F5] border border-stone-200/80 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition"
        >
          <CreditCard size={14} />
          <span>Update Bank Info</span>
        </button>
      </div>

      {/* 5. PAYSLIP HISTORY TABLE */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-extrabold text-stone-900">Payslip Archive & Statements</h3>
            <p className="text-[11px] text-stone-400">Past salary disbarments and verifiable payroll statements</p>
          </div>
          <span className="text-xs font-semibold text-stone-500">Showing last 4 months</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-normal border-b border-stone-100 pb-2">
                <th className="pb-3 font-normal">Payslip ID</th>
                <th className="pb-3 font-normal">Pay Period</th>
                <th className="pb-3 font-normal">Disbursed Date</th>
                <th className="pb-3 font-normal">Gross Pay</th>
                <th className="pb-3 font-normal">Deductions</th>
                <th className="pb-3 font-normal">Net Amount</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal text-right">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {payslips.map((row) => (
                <tr key={row.id} className="hover:bg-stone-50/60 transition-colors">
                  {/* ID */}
                  <td className="py-3.5 font-bold text-[#EA580C]">{row.id}</td>

                  {/* Period */}
                  <td className="py-3.5 font-bold text-stone-800">{row.month}</td>

                  {/* Disbursed Date */}
                  <td className="py-3.5 font-medium text-stone-500">{row.disbursedOn}</td>

                  {/* Gross */}
                  <td className="py-3.5 font-semibold text-stone-700">{row.gross}</td>

                  {/* Deductions */}
                  <td className="py-3.5 font-semibold text-rose-600">-{row.deductions}</td>

                  {/* Net */}
                  <td className="py-3.5 font-black text-stone-900">
                    <span className="rounded-lg bg-[#FAF8F5] border border-stone-200/60 px-2 py-0.5 text-[#1E5642]">
                      {row.netPay}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="py-3.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-100">
                      <CheckCircle2 size={11} />
                      {row.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      className="p-1.5 text-stone-500 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition"
                      title="Download PDF Payslip"
                    >
                      <Download size={15} />
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

export default UserSalaryDetails;