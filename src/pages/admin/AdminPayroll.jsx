import React, { useState } from "react";
import {
  Wallet,
  DownloadCloud,
  CheckCircle2,
  Clock,
  Sparkles,
  FileText,
  DollarSign,
  Send,
  Building2,
} from "lucide-react";
import toast from "react-hot-toast";

const initialPayroll = [
  {
    id: 1,
    name: "Claire Horington",
    department: "Engineering",
    role: "Senior Frontend Engineer",
    base: "$5,400.00",
    bonus: "+$400.00",
    deductions: "-$580.00",
    netPay: "$5,220.00",
    status: "Disbursed",
  },
  {
    id: 2,
    name: "Marcus Vance",
    department: "Design",
    role: "Lead Product Designer",
    base: "$4,800.00",
    bonus: "+$250.00",
    deductions: "-$490.00",
    netPay: "$4,560.00",
    status: "Disbursed",
  },
  {
    id: 3,
    name: "Sophia Chen",
    department: "Engineering",
    role: "DevOps Specialist",
    base: "$5,800.00",
    bonus: "+$600.00",
    deductions: "-$640.00",
    netPay: "$5,760.00",
    status: "Disbursed",
  },
  {
    id: 4,
    name: "David Kim",
    department: "Sales",
    role: "Enterprise Account Exec",
    base: "$4,200.00",
    bonus: "+$850.00",
    deductions: "-$480.00",
    netPay: "$4,570.00",
    status: "Pending",
  },
  {
    id: 5,
    name: "Priya Sharma",
    department: "HR & Admin",
    role: "Talent Acquisition Lead",
    base: "$4,500.00",
    bonus: "+$300.00",
    deductions: "-$470.00",
    netPay: "$4,330.00",
    status: "Disbursed",
  },
];

const AdminPayroll = () => {
  const [payrollList, setPayrollList] = useState(initialPayroll);
  const [cycleRunning, setCycleRunning] = useState(false);

  const handleRunPayroll = () => {
    setCycleRunning(true);
    setTimeout(() => {
      setPayrollList(
        payrollList.map((item) => ({ ...item, status: "Disbursed" }))
      );
      setCycleRunning(false);
      toast.success("Payroll cycle executed successfully! All salaries marked as Disbursed.");
    }, 1000);
  };

  const handleDownloadSlip = (name) => {
    toast.success(`Payslip for ${name} generated & downloaded.`);
  };

  const handleBulkExport = () => {
    toast.success("ACH / Bank transfer payment batch exported.");
  };

  return (
    <div className="p-5 sm:p-7 space-y-6 max-w-[1400px] mx-auto text-stone-900 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            Payroll & Compensation Engine
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Execute monthly salary cycles, compute statutory tax withholdings, and disburse digital payslips.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleBulkExport}
            className="rounded-2xl border border-stone-300 bg-white hover:bg-stone-50 px-4 py-2.5 text-xs sm:text-sm font-bold text-stone-700 shadow-2xs transition"
          >
            Export Bank Batch
          </button>
          <button
            onClick={handleRunPayroll}
            disabled={cycleRunning}
            className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-500/20 transition-all hover:-translate-y-0.5"
          >
            <Sparkles size={16} />
            <span>{cycleRunning ? "Computing Cycle..." : "Run Monthly Payroll"}</span>
          </button>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Total Monthly Run</p>
          <p className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">$148,200</p>
          <span className="text-[11px] text-emerald-600 font-semibold">March 2026 Cycle</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Gross Salaries</p>
          <p className="text-2xl sm:text-3xl font-black text-[#1E5642] mt-1">$164,500</p>
          <span className="text-[11px] text-stone-500 font-medium">Base + Overtime</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Statutory Deductions</p>
          <p className="text-2xl sm:text-3xl font-black text-red-600 mt-1">-$16,300</p>
          <span className="text-[11px] text-stone-500 font-medium">Tax, PF & Insurances</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Disbursed Ratio</p>
          <p className="text-2xl sm:text-3xl font-black text-indigo-700 mt-1">
            {payrollList.filter((p) => p.status === "Disbursed").length} / {payrollList.length}
          </p>
          <span className="text-[11px] text-emerald-600 font-semibold">Direct Deposit Active</span>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-stone-200 bg-stone-50/70 text-[11px] font-bold uppercase tracking-wider text-stone-500">
              <tr>
                <th className="px-5 py-3.5">Employee</th>
                <th className="px-5 py-3.5">Base Salary</th>
                <th className="px-5 py-3.5">Bonus / Overtime</th>
                <th className="px-5 py-3.5">Tax & Deductions</th>
                <th className="px-5 py-3.5">Net Take-Home</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Payslip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {payrollList.map((emp) => (
                <tr key={emp.id} className="hover:bg-stone-50/60 transition">
                  <td className="px-5 py-3.5">
                    <p className="font-bold text-stone-900">{emp.name}</p>
                    <p className="text-[11px] text-stone-400">{emp.role} • {emp.department}</p>
                  </td>

                  <td className="px-5 py-3.5 font-mono font-bold text-stone-800">{emp.base}</td>
                  <td className="px-5 py-3.5 font-mono font-semibold text-emerald-700">{emp.bonus}</td>
                  <td className="px-5 py-3.5 font-mono font-semibold text-red-600">{emp.deductions}</td>

                  <td className="px-5 py-3.5 font-mono font-black text-stone-900 text-sm">
                    {emp.netPay}
                  </td>

                  <td className="px-5 py-3.5">
                    <span
                      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                        emp.status === "Disbursed"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                          : "bg-amber-50 text-amber-700 border-amber-200"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>

                  <td className="px-5 py-3.5 text-right">
                    <button
                      onClick={() => handleDownloadSlip(emp.name)}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition"
                      title="Download generated payslip"
                    >
                      <DownloadCloud size={13} className="text-[#EA580C]" />
                      <span>PDF</span>
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

export default AdminPayroll;
