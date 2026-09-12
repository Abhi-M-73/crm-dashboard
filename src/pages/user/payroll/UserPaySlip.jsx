import React, { useState } from "react";
import {
  Download,
  Printer,
  Calendar,
  ChevronDown,
  Building2,
  BadgeDollarSign,
  ShieldCheck,
  FileCheck,
  Share2,
  Clock,
  CreditCard
} from "lucide-react";

const UserPaySlip = () => {
  const [selectedMonth, setSelectedMonth] = useState("august-2026");

  const payslipArchive = {
    "august-2026": {
      monthName: "August 2026",
      payslipNo: "RX-PS-202608-894",
      payDate: "August 31, 2026",
      payPeriod: "01 Aug 2026 – 31 Aug 2026",
      workingDays: 22,
      presentDays: 21,
      paidLeaves: 1,
      lossOfPayDays: 0,
      earnings: [
        { label: "Basic Salary", amount: 4200.0 },
        { label: "House Rent Allowance (HRA)", amount: 1800.0 },
        { label: "Special Allowance", amount: 1000.0 },
        { label: "Internet & Learning Subsidy", amount: 500.0 },
      ],
      deductions: [
        { label: "Provident Fund (401k / EPF)", amount: 504.0 },
        { label: "Income Tax (TDS / Federal)", amount: 480.0 },
        { label: "Group Health Insurance", amount: 146.0 },
        { label: "Professional Tax", amount: 20.0 },
      ],
      grossEarnings: 7500.0,
      totalDeductions: 1150.0,
      netPayable: 6350.0,
      amountInWords: "Six Thousand Three Hundred Fifty US Dollars Only",
    },
    "july-2026": {
      monthName: "July 2026",
      payslipNo: "RX-PS-202607-894",
      payDate: "July 31, 2026",
      payPeriod: "01 Jul 2026 – 31 Jul 2026",
      workingDays: 23,
      presentDays: 23,
      paidLeaves: 0,
      lossOfPayDays: 0,
      earnings: [
        { label: "Basic Salary", amount: 4200.0 },
        { label: "House Rent Allowance (HRA)", amount: 1800.0 },
        { label: "Special Allowance", amount: 1000.0 },
        { label: "Internet & Learning Subsidy", amount: 500.0 },
      ],
      deductions: [
        { label: "Provident Fund (401k / EPF)", amount: 504.0 },
        { label: "Income Tax (TDS / Federal)", amount: 480.0 },
        { label: "Group Health Insurance", amount: 146.0 },
        { label: "Professional Tax", amount: 20.0 },
      ],
      grossEarnings: 7500.0,
      totalDeductions: 1150.0,
      netPayable: 6350.0,
      amountInWords: "Six Thousand Three Hundred Fifty US Dollars Only",
    },
  };

  const currentSlip = payslipArchive[selectedMonth] || payslipArchive["august-2026"];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & CONTROLS (Hidden during print) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Official Payslip Statement
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Download or print your authenticated payroll summary and salary voucher
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Month Selector */}
          <div className="relative">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="appearance-none rounded-full border border-stone-200/80 bg-white py-2 pl-4 pr-9 text-xs font-bold text-stone-700 shadow-sm outline-none focus:border-[var(--primary)] cursor-pointer"
            >
              <option value="august-2026">August 2026</option>
              <option value="july-2026">July 2026</option>
            </select>
            <ChevronDown size={14} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400" />
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-bold text-stone-700 shadow-sm hover:bg-stone-50 transition active:scale-[0.98]"
          >
            <Printer size={14} />
            <span>Print Voucher</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--primary-700)] transition active:scale-[0.98]"
          >
            <Download size={14} />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* 2. OFFICIAL PAYSLIP VOUCHER CARD */}
      <div className="mx-auto max-w-4xl rounded-[36px] border border-stone-200/80 bg-white p-6 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] print:border-none print:shadow-none print:p-0">
        
        {/* Header Section: Brand & Payslip Title */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b-2 border-stone-100 pb-6 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--secondary)] text-white shadow-sm">
                <span className="text-base font-bold leading-none">✤</span>
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tight text-stone-900 leading-none">
                  RelationX Technologies Inc.
                </h2>
                <span className="text-[10px] text-stone-400 font-medium">
                  500 Howard St, Suite 400, San Francisco, CA 94105
                </span>
              </div>
            </div>
          </div>

          <div className="sm:text-right space-y-0.5">
            <span className="inline-block rounded-full bg-[var(--primary-50)] px-3 py-1 text-[11px] font-black text-[var(--primary)] uppercase tracking-wider">
              Salary Payslip
            </span>
            <p className="text-xs font-extrabold text-stone-800 pt-1">
              {currentSlip.monthName}
            </p>
            <p className="text-[10px] text-stone-400 font-mono">
              Slip No: {currentSlip.payslipNo}
            </p>
          </div>
        </div>

        {/* Employee & Bank Summary Grid */}
        <div className="my-6 rounded-2xl bg-[#FAF8F5] p-5 border border-stone-100">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">Employee Name</span>
              <span className="font-extrabold text-stone-900 mt-0.5 block">Claire Horington</span>
              <span className="text-[10px] text-stone-500 font-mono">EMP-2026-894</span>
            </div>

            <div>
              <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">Designation / Pod</span>
              <span className="font-extrabold text-stone-900 mt-0.5 block">Sr. Frontend Architect</span>
              <span className="text-[10px] text-stone-500">Product Experience</span>
            </div>

            <div>
              <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">Bank & Account</span>
              <span className="font-extrabold text-stone-900 mt-0.5 block">Silicon Valley Bank</span>
              <span className="text-[10px] text-stone-500 font-mono">A/C •••• 8842</span>
            </div>

            <div>
              <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wider block">Disbursement Date</span>
              <span className="font-extrabold text-[var(--secondary)] mt-0.5 block">{currentSlip.payDate}</span>
              <span className="text-[10px] text-stone-500">ACH Direct Deposit</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-4 mt-4 border-t border-stone-200/60">
            <div>
              <span className="text-[10px] text-stone-400 block">Total Working Days</span>
              <span className="font-bold text-stone-800">{currentSlip.workingDays} Days</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 block">Days Present</span>
              <span className="font-bold text-[var(--secondary)]">{currentSlip.presentDays} Days</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 block">Paid Leaves Taken</span>
              <span className="font-bold text-[var(--primary)]">{currentSlip.paidLeaves} Day</span>
            </div>
            <div>
              <span className="text-[10px] text-stone-400 block">Loss of Pay (LOP)</span>
              <span className="font-bold text-stone-800">{currentSlip.lossOfPayDays} Days</span>
            </div>
          </div>
        </div>

        {/* Ledger: Earnings vs Deductions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-xs">
          
          {/* Left Table: Earnings */}
          <div className="rounded-2xl border border-stone-100 overflow-hidden">
            <div className="bg-[var(--secondary-100)] px-4 py-2.5 flex items-center justify-between font-bold text-[var(--secondary)]">
              <span>Earnings Component</span>
              <span>Amount (USD)</span>
            </div>
            <div className="divide-y divide-stone-50 p-2 space-y-1">
              {currentSlip.earnings.map((item, idx) => (
                <div key={idx} className="flex justify-between px-2 py-2 text-stone-700">
                  <span className="font-medium">{item.label}</span>
                  <span className="font-extrabold text-stone-900">${item.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#FAF8F5] px-4 py-3 flex items-center justify-between font-black text-stone-900 border-t border-stone-200/70">
              <span>Gross Earnings</span>
              <span className="text-sm text-[var(--secondary)]">${currentSlip.grossEarnings.toFixed(2)}</span>
            </div>
          </div>

          {/* Right Table: Deductions */}
          <div className="rounded-2xl border border-stone-100 overflow-hidden">
            <div className="bg-[var(--primary-50)] px-4 py-2.5 flex items-center justify-between font-bold text-[var(--primary)]">
              <span>Deductions Component</span>
              <span>Amount (USD)</span>
            </div>
            <div className="divide-y divide-stone-50 p-2 space-y-1">
              {currentSlip.deductions.map((item, idx) => (
                <div key={idx} className="flex justify-between px-2 py-2 text-stone-700">
                  <span className="font-medium">{item.label}</span>
                  <span className="font-extrabold text-rose-600">-${item.amount.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#FAF8F5] px-4 py-3 flex items-center justify-between font-black text-stone-900 border-t border-stone-200/70">
              <span>Total Deductions</span>
              <span className="text-sm text-rose-600">-${currentSlip.totalDeductions.toFixed(2)}</span>
            </div>
          </div>

        </div>

        {/* Net Salary Payable Box */}
        <div className="rounded-3xl bg-gradient-to-r from-[var(--secondary-900)] to-[var(--secondary)] text-white p-6 sm:p-7 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-stone-300 block">
              Net Payable Take-Home Amount
            </span>
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1 block">
              ${currentSlip.netPayable.toFixed(2)}
            </span>
            <p className="text-xs text-stone-300 mt-1 font-medium">
              In Words: <span className="italic">{currentSlip.amountInWords}</span>
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-2.5 backdrop-blur-md border border-white/20">
            <ShieldCheck size={20} className="text-[var(--secondary-400)]" />
            <div className="text-left">
              <span className="text-[10px] uppercase font-bold text-stone-300 block">Verified Status</span>
              <span className="text-xs font-black text-white">Directly Disbursed</span>
            </div>
          </div>
        </div>

        {/* Verification & Signoff Footer */}
        <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 text-xs text-stone-400">
          <div className="space-y-1">
            <p className="text-[11px] font-bold text-stone-700">Confidential & System-Generated Notice</p>
            <p className="max-w-md text-[10px] leading-relaxed text-stone-400">
              This salary voucher is an electronically verified payslip generated by the RelationX automated payroll system. No physical signature is required. For inquiries, email payroll@relationx.com.
            </p>
          </div>

          <div className="text-right self-end sm:self-auto space-y-1">
            <div className="h-10 border-b border-stone-300 w-36 ml-auto flex items-end justify-center pb-1">
              <span className="font-serif italic text-stone-600 text-sm">Devon Lane</span>
            </div>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">
              Authorized Payroll Officer
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default UserPaySlip;