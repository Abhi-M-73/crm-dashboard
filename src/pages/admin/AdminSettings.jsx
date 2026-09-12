import React, { useState } from "react";
import {
  Settings as SettingsIcon,
  Building2,
  Clock,
  Calendar,
  Wallet,
  ShieldCheck,
  Save,
  MapPin,
} from "lucide-react";
import toast from "react-hot-toast";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    companyName: "StaffSync Global Technologies",
    timezone: "UTC - 05:00 (Eastern Time)",
    currency: "USD ($)",
    shiftStart: "09:00 AM",
    shiftEnd: "06:00 PM",
    graceMinutes: "15",
    geofenceRadius: "50",
    casualLeaves: "12",
    sickLeaves: "10",
    payCycleDay: "25th",
    taxDeductionEnabled: true,
  });

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Organization settings updated and synchronized across all portals!");
  };

  return (
    <div className="p-5 sm:p-7 space-y-6 max-w-[1400px] mx-auto text-stone-900 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            System & Organization Settings
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Configure working hours, geofence radius, statutory tax slabs, and leave policy limits.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[color-mix(in_srgb,var(--primary)_20%,transparent)] transition-all hover:-translate-y-0.5"
        >
          <Save size={16} />
          <span>Save Changes</span>
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: General Company Info */}
        <div className="rounded-[28px] border border-stone-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3">
            <Building2 size={20} className="text-[var(--secondary)]" />
            <h3 className="text-base font-bold text-stone-900">Company Information</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Company Legal Name</label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Default Timezone</label>
              <input
                type="text"
                value={settings.timezone}
                onChange={(e) => setSettings({ ...settings, timezone: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Operating Currency</label>
              <input
                type="text"
                value={settings.currency}
                onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Shift & Geofence Rules */}
        <div className="rounded-[28px] border border-stone-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3">
            <Clock size={20} className="text-[var(--primary)]" />
            <h3 className="text-base font-bold text-stone-900">Shift & Geofenced Attendance Rules</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Shift Start Time</label>
              <input
                type="text"
                value={settings.shiftStart}
                onChange={(e) => setSettings({ ...settings, shiftStart: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Shift End Time</label>
              <input
                type="text"
                value={settings.shiftEnd}
                onChange={(e) => setSettings({ ...settings, shiftEnd: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Late Grace Window (Mins)</label>
              <input
                type="number"
                value={settings.graceMinutes}
                onChange={(e) => setSettings({ ...settings, graceMinutes: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none font-mono"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Geofence Radius (Meters)</label>
              <input
                type="number"
                value={settings.geofenceRadius}
                onChange={(e) => setSettings({ ...settings, geofenceRadius: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Leave Quotas & Payroll Cycle */}
        <div className="rounded-[28px] border border-stone-200 bg-white p-6 sm:p-7 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 border-b border-stone-100 pb-3">
            <Calendar size={20} className="text-[var(--primary-600)]" />
            <h3 className="text-base font-bold text-stone-900">Annual Leave Bank & Payroll Schedule</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-stone-700 mb-1">Annual Casual Leaves</label>
              <input
                type="number"
                value={settings.casualLeaves}
                onChange={(e) => setSettings({ ...settings, casualLeaves: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Annual Sick Leaves</label>
              <input
                type="number"
                value={settings.sickLeaves}
                onChange={(e) => setSettings({ ...settings, sickLeaves: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-stone-700 mb-1">Monthly Payroll Disbursement Date</label>
              <input
                type="text"
                value={settings.payCycleDay}
                onChange={(e) => setSettings({ ...settings, payCycleDay: e.target.value })}
                className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminSettings;
