import React, { useState } from "react";
import {
  CalendarDays,
  CheckCircle2,
  XCircle,
  Clock,
  Filter,
  Check,
  X,
  AlertCircle,
  Calendar,
} from "lucide-react";
import toast from "react-hot-toast";

const initialLeaves = [
  {
    id: 1,
    name: "Marcus Vance",
    department: "Design",
    type: "Casual Leave",
    dates: "18 Mar – 20 Mar 2026",
    days: "3 Days",
    reason: "Family wedding ceremony & travel",
    handover: "Claire Horington",
    status: "Pending",
  },
  {
    id: 2,
    name: "David Kim",
    department: "Sales",
    type: "Medical Leave",
    dates: "12 Mar – 14 Mar 2026",
    days: "2 Days",
    reason: "Severe flu & medical checkup",
    handover: "Priya Sharma",
    status: "Pending",
  },
  {
    id: 3,
    name: "Sophia Chen",
    department: "Engineering",
    type: "Vacation Leave",
    dates: "24 Mar – 28 Mar 2026",
    days: "5 Days",
    reason: "Annual vacation trip",
    handover: "Alex Morgan",
    status: "Pending",
  },
  {
    id: 4,
    name: "Claire Horington",
    department: "Engineering",
    type: "Casual Leave",
    dates: "02 Mar – 03 Mar 2026",
    days: "2 Days",
    reason: "Personal home relocation",
    handover: "Sophia Chen",
    status: "Approved",
  },
];

const AdminLeaves = () => {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [filter, setFilter] = useState("Pending");

  const handleAction = (id, newStatus) => {
    setLeaves(
      leaves.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
    );
    toast.success(`Leave application marked as ${newStatus}!`);
  };

  const filteredLeaves = leaves.filter((l) => {
    if (filter === "All") return true;
    return l.status === filter;
  });

  const pendingCount = leaves.filter((l) => l.status === "Pending").length;
  const approvedCount = leaves.filter((l) => l.status === "Approved").length;

  return (
    <div className="p-5 sm:p-7 space-y-6 max-w-[1400px] mx-auto text-stone-900 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            Leave & Absence Management
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Review company-wide time-off requests, track employee leave balances, and manage public holidays.
          </p>
        </div>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Pending Approvals</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--primary)] mt-1">{pendingCount}</p>
          <span className="text-[11px] text-[var(--primary)] font-semibold">Requires HR decision</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Approved This Month</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--secondary-700)] mt-1">{approvedCount}</p>
          <span className="text-[11px] text-stone-500 font-medium">Calendar synchronized</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">On Leave Today</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--secondary)] mt-1">4</p>
          <span className="text-[11px] text-[var(--secondary-600)] font-semibold">Capacity: 98.4%</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Total Leave Bank</p>
          <p className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">12 Days</p>
          <span className="text-[11px] text-stone-500 font-medium">Standard annual quota</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
        {["Pending", "Approved", "All"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
              filter === tab
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            {tab === "Pending" ? `Pending Review (${pendingCount})` : tab}
          </button>
        ))}
      </div>

      {/* Leave Applications Table */}
      <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-stone-200 bg-stone-50/70 text-[11px] font-bold uppercase tracking-wider text-stone-500">
              <tr>
                <th className="px-5 py-3.5">Employee</th>
                <th className="px-5 py-3.5">Leave Type</th>
                <th className="px-5 py-3.5">Dates & Duration</th>
                <th className="px-5 py-3.5">Reason & Handover</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5 text-right">Decision</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredLeaves.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-stone-400">
                    No leave requests found in this category.
                  </td>
                </tr>
              ) : (
                filteredLeaves.map((l) => (
                  <tr key={l.id} className="hover:bg-stone-50/60 transition">
                    <td className="px-5 py-3.5">
                      <p className="font-bold text-stone-900">{l.name}</p>
                      <p className="text-[11px] text-stone-400">{l.department}</p>
                    </td>

                    <td className="px-5 py-3.5">
                      <span className="inline-block rounded-lg bg-[var(--primary-50)] border border-[var(--primary-100)] px-2.5 py-1 text-[11px] font-bold text-[var(--primary-700)]">
                        {l.type}
                      </span>
                    </td>

                    <td className="px-5 py-3.5">
                      <p className="font-bold text-stone-800 font-mono text-xs">{l.dates}</p>
                      <p className="text-[11px] text-stone-400 font-semibold">{l.days}</p>
                    </td>

                    <td className="px-5 py-3.5 max-w-xs">
                      <p className="text-xs text-stone-700 font-medium">"{l.reason}"</p>
                      <p className="text-[10px] text-stone-400 mt-0.5">Covered by: <strong>{l.handover}</strong></p>
                    </td>

                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          l.status === "Approved"
                            ? "bg-[var(--secondary-50)] text-[var(--secondary-700)] border-[var(--secondary-200)]"
                            : l.status === "Rejected"
                            ? "bg-rose-50 text-rose-700 border-rose-200"
                            : "bg-amber-50 text-amber-700 border-amber-200"
                        }`}
                      >
                        {l.status}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 text-right">
                      {l.status === "Pending" ? (
                        <div className="inline-flex items-center gap-1.5">
                          <button
                            onClick={() => handleAction(l.id, "Approved")}
                            className="inline-flex items-center gap-1 rounded-xl bg-[var(--secondary-600)] px-3 py-1.5 text-xs font-bold text-white hover:bg-[var(--secondary-700)] transition"
                          >
                            <Check size={13} />
                            <span>Approve</span>
                          </button>
                          <button
                            onClick={() => handleAction(l.id, "Rejected")}
                            className="inline-flex items-center gap-1 rounded-xl border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition"
                          >
                            <X size={13} />
                            <span>Reject</span>
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs font-medium text-stone-400">Processed</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminLeaves;
