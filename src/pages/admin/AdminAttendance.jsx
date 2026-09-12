import React, { useState } from "react";
import {
  Clock,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Calendar,
  DownloadCloud,
  Search,
  Check,
  X,
  ShieldCheck,
  Fingerprint,
} from "lucide-react";
import toast from "react-hot-toast";

const initialAttendanceLogs = [
  {
    id: 1,
    name: "Claire Horington",
    department: "Engineering",
    inTime: "09:02 AM",
    outTime: "06:15 PM",
    duration: "8h 13m",
    status: "On-Time",
    location: "Headquarters (GPS Verified)",
    isVerified: true,
  },
  {
    id: 2,
    name: "Marcus Vance",
    department: "Design",
    inTime: "09:14 AM",
    outTime: "In Progress",
    duration: "5h 40m",
    status: "On-Time",
    location: "Remote (IP Whitelist)",
    isVerified: true,
  },
  {
    id: 3,
    name: "Sophia Chen",
    department: "Engineering",
    inTime: "09:42 AM",
    outTime: "In Progress",
    duration: "4h 22m",
    status: "Late",
    location: "Headquarters (GPS Verified)",
    isVerified: true,
  },
  {
    id: 4,
    name: "David Kim",
    department: "Sales",
    inTime: "10:15 AM",
    outTime: "In Progress",
    duration: "3h 50m",
    status: "Late",
    location: "Client Site (Out of Bounds)",
    isVerified: false,
  },
  {
    id: 5,
    name: "Priya Sharma",
    department: "HR & Admin",
    inTime: "08:55 AM",
    outTime: "05:58 PM",
    duration: "8h 03m",
    status: "On-Time",
    location: "Headquarters (GPS Verified)",
    isVerified: true,
  },
];

const initialRegularizations = [
  {
    id: 1,
    name: "Liam O'Connor",
    department: "Operations",
    date: "11 March 2026",
    reason: "Biometric device offline during morning rush",
    requestedIn: "09:05 AM",
    status: "Pending",
  },
  {
    id: 2,
    name: "Sophia Chen",
    department: "Engineering",
    date: "10 March 2026",
    reason: "Client meeting at remote data center",
    requestedIn: "09:30 AM",
    status: "Pending",
  },
];

const AdminAttendance = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const [search, setSearch] = useState("");
  const [logs, setLogs] = useState(initialAttendanceLogs);
  const [regularizations, setRegularizations] = useState(initialRegularizations);

  const handleRegularization = (id, approved) => {
    setRegularizations(regularizations.filter((r) => r.id !== id));
    toast.success(
      approved
        ? "Regularization request approved & hours synced!"
        : "Regularization request declined."
    );
  };

  const handleExport = () => {
    toast.success("Attendance report exported to CSV!");
  };

  const filteredLogs = logs.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 sm:p-7 space-y-6 max-w-[1400px] mx-auto text-stone-900 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            Attendance & Shift Management
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Real-time biometric punch monitoring, geofence verification, and regularization approvals.
          </p>
        </div>

        <button
          onClick={handleExport}
          className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 bg-white hover:bg-stone-50 px-5 py-2.5 text-xs sm:text-sm font-bold text-stone-700 shadow-2xs transition"
        >
          <DownloadCloud size={16} className="text-[var(--secondary)]" />
          <span>Export Monthly CSV</span>
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Present Today</p>
          <p className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">248 / 252</p>
          <span className="text-[11px] text-[var(--secondary-600)] font-semibold">98.4% attendance rate</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Late Arrivals</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--primary)] mt-1">8</p>
          <span className="text-[11px] text-stone-500 font-medium">Grace period: 15 mins</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">On Approved Leave</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--primary-700)] mt-1">4</p>
          <span className="text-[11px] text-stone-500 font-medium">Scheduled time-off</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Regularization Queue</p>
          <p className="text-2xl sm:text-3xl font-black text-rose-600 mt-1">{regularizations.length}</p>
          <span className="text-[11px] text-rose-600 font-semibold">Action required</span>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
        <button
          onClick={() => setActiveTab("daily")}
          className={`rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
            activeTab === "daily"
              ? "bg-stone-900 text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          Daily Clock-Ins Roster
        </button>

        <button
          onClick={() => setActiveTab("regularization")}
          className={`relative rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
            activeTab === "regularization"
              ? "bg-stone-900 text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          <span>Regularization Requests</span>
          {regularizations.length > 0 && (
            <span className="ml-2 rounded-full bg-rose-500 text-white px-1.5 py-0.2 text-[10px] font-bold">
              {regularizations.length}
            </span>
          )}
        </button>
      </div>

      {/* Content for Daily Roster */}
      {activeTab === "daily" && (
        <div className="space-y-4">
          <div className="relative max-w-md">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search by employee name or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-stone-200 bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:border-stone-400 focus:outline-none shadow-2xs"
            />
          </div>

          <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-stone-200 bg-stone-50/70 text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  <tr>
                    <th className="px-5 py-3.5">Employee</th>
                    <th className="px-5 py-3.5">In Time</th>
                    <th className="px-5 py-3.5">Out Time</th>
                    <th className="px-5 py-3.5">Total Hours</th>
                    <th className="px-5 py-3.5">Punctuality</th>
                    <th className="px-5 py-3.5">Verification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-stone-50/60 transition">
                      <td className="px-5 py-3.5">
                        <p className="font-bold text-stone-900">{log.name}</p>
                        <p className="text-[11px] text-stone-400">{log.department}</p>
                      </td>
                      <td className="px-5 py-3.5 font-mono font-bold text-stone-800">{log.inTime}</td>
                      <td className="px-5 py-3.5 font-mono text-stone-600">{log.outTime}</td>
                      <td className="px-5 py-3.5 font-semibold text-[var(--secondary-700)]">{log.duration}</td>
                      <td className="px-5 py-3.5">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                            log.status === "On-Time"
                              ? "bg-[var(--secondary-50)] text-[var(--secondary-700)] border-[var(--secondary-200)]"
                              : "bg-amber-50 text-amber-700 border-amber-200"
                          }`}
                        >
                          {log.status}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-xs text-stone-600">
                        <div className="flex items-center gap-1.5">
                          <MapPin size={13} className={log.isVerified ? "text-[var(--secondary-600)]" : "text-amber-500"} />
                          <span>{log.location}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Content for Regularization Requests */}
      {activeTab === "regularization" && (
        <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-xs">
          {regularizations.length === 0 ? (
            <div className="p-12 text-center text-stone-400">
              <CheckCircle2 size={36} className="mx-auto text-[var(--secondary-500)] mb-2" />
              <p className="font-bold text-stone-700">All caught up!</p>
              <p className="text-xs">No pending regularization requests.</p>
            </div>
          ) : (
            <div className="divide-y divide-stone-100">
              {regularizations.map((item) => (
                <div key={item.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-stone-900">{item.name}</p>
                      <span className="text-[10px] font-bold bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                        {item.department}
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 mt-1">
                      Missed punch on <strong>{item.date}</strong> • Requested In Time: <strong className="font-mono text-stone-900">{item.requestedIn}</strong>
                    </p>
                    <p className="text-[11px] text-stone-500 italic mt-0.5">"{item.reason}"</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRegularization(item.id, true)}
                      className="inline-flex items-center gap-1 rounded-xl bg-[var(--secondary-600)] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[var(--secondary-700)] transition"
                    >
                      <Check size={13} />
                      <span>Approve</span>
                    </button>
                    <button
                      onClick={() => handleRegularization(item.id, false)}
                      className="inline-flex items-center gap-1 rounded-xl border border-stone-200 px-3.5 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition"
                    >
                      <X size={13} />
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminAttendance;
