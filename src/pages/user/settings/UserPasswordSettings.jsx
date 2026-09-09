import React, { useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  KeyRound,
  History,
  Laptop,
  Globe,
  Save,
  LogOut,
  Sparkles
} from "lucide-react";
import toast from "react-hot-toast";

const UserPasswordSettings = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [twoFactorAuth, setTwoFactorAuth] = useState(true);

  // Dynamic Password Validation Criteria
  const validations = {
    length: formData.newPassword.length >= 8,
    hasUpper: /[A-Z]/.test(formData.newPassword),
    hasNumber: /[0-9]/.test(formData.newPassword),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(formData.newPassword),
    matches:
      formData.newPassword.length > 0 &&
      formData.newPassword === formData.confirmPassword,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.currentPassword) {
      toast.error("Please provide your current password.");
      return;
    }
    if (!validations.length || !validations.hasUpper || !validations.hasNumber) {
      toast.error("New password does not meet all security guidelines.");
      return;
    }
    if (!validations.matches) {
      toast.error("New passwords do not match!");
      return;
    }

    toast.success("Password changed successfully!");
    setFormData({ currentPassword: "", newPassword: "", confirmPassword: "" });
  };

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Password & Account Security
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Update your corporate login credentials, enforce 2FA, and monitor active sessions
          </p>
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center gap-2 rounded-2xl bg-[#EA580C] px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#d94e07] transition active:scale-[0.98]"
        >
          <Save size={15} />
          <span>Save New Password</span>
        </button>
      </div>

      {/* 2. STATS PILL COUNTERS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-100">
            <KeyRound size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Last Changed</span>
            <span className="text-lg font-black text-stone-900 leading-tight">42 Days Ago</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#E1EBE6] text-[#1E5642] flex items-center justify-center shrink-0 border border-emerald-100">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">2FA Security</span>
            <span className="text-lg font-black text-stone-900 leading-tight">Protected (Active)</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <Laptop size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Active Sessions</span>
            <span className="text-lg font-black text-stone-900 leading-tight">02 Devices</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#FAF8F5] text-stone-700 flex items-center justify-center shrink-0 border border-stone-100">
            <Sparkles size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Security Score</span>
            <span className="text-lg font-black text-stone-900 leading-tight">96 / 100</span>
          </div>
        </div>
      </div>

      {/* 3. CONCENTRIC GAUGE & PASSWORD FORM ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* CONCENTRIC GAUGE CARD (5 Columns) */}
        <div className="lg:col-span-5 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Credential Health</h3>
              <p className="text-[11px] text-stone-400">Password complexity & entropy evaluation</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-100">
              Optimal
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
                strokeDashoffset="45"
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
                strokeDashoffset="24"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-stone-900">96%</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                Strong Vault
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#1E5642]" /> AES-256 Hash
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" /> 90-Day Rotation
            </span>
          </div>
        </div>

        {/* PASSWORD INPUT FORM (7 Columns) */}
        <div className="lg:col-span-7 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm space-y-4">
          <div className="border-b border-stone-100 pb-3">
            <h3 className="text-base font-extrabold text-stone-900">Change Password</h3>
            <p className="text-[11px] text-stone-400">Enter your current password to authorize updates</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* Current Password */}
            <div>
              <label className="mb-1 block text-xs font-bold text-stone-700">Current Password</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                  <Lock size={15} />
                </div>
                <input
                  type={showCurrent ? "text" : "password"}
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Enter current password"
                  required
                  className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 pl-10 pr-10 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-stone-400 hover:text-stone-700"
                >
                  {showCurrent ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* New Password */}
            <div>
              <label className="mb-1 block text-xs font-bold text-stone-700">New Password</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                  <Lock size={15} />
                </div>
                <input
                  type={showNew ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="Create new password"
                  required
                  className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 pl-10 pr-10 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-stone-400 hover:text-stone-700"
                >
                  {showNew ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Confirm New Password */}
            <div>
              <label className="mb-1 block text-xs font-bold text-stone-700">Confirm New Password</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                  <Lock size={15} />
                </div>
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Repeat new password"
                  required
                  className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 pl-10 pr-10 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-stone-400 hover:text-stone-700"
                >
                  {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            {/* Requirements Checklist */}
            <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
              <div className={`flex items-center gap-1.5 ${validations.length ? "text-emerald-700 font-bold" : "text-stone-400"}`}>
                <CheckCircle2 size={13} className={validations.length ? "text-emerald-600" : "text-stone-300"} />
                <span>At least 8 characters</span>
              </div>
              <div className={`flex items-center gap-1.5 ${validations.hasUpper ? "text-emerald-700 font-bold" : "text-stone-400"}`}>
                <CheckCircle2 size={13} className={validations.hasUpper ? "text-emerald-600" : "text-stone-300"} />
                <span>One uppercase letter (A-Z)</span>
              </div>
              <div className={`flex items-center gap-1.5 ${validations.hasNumber ? "text-emerald-700 font-bold" : "text-stone-400"}`}>
                <CheckCircle2 size={13} className={validations.hasNumber ? "text-emerald-600" : "text-stone-300"} />
                <span>One numeric digit (0-9)</span>
              </div>
              <div className={`flex items-center gap-1.5 ${validations.matches ? "text-emerald-700 font-bold" : "text-stone-400"}`}>
                <CheckCircle2 size={13} className={validations.matches ? "text-emerald-600" : "text-stone-300"} />
                <span>Passwords match exactly</span>
              </div>
            </div>
          </form>
        </div>

      </div>

      {/* 4. 2FA SETTINGS & ACTIVE LOGINS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Two-Factor Authentication Card */}
        <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-emerald-50 text-[#1E5642] flex items-center justify-center shrink-0 border border-emerald-100">
                <Smartphone size={20} />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-stone-900">Two-Factor Authentication (2FA)</h3>
                <p className="text-[11px] text-stone-400 mt-0.5">Protect logins with Google Authenticator / Authy OTP</p>
              </div>
            </div>

            <label className="relative inline-flex items-center cursor-pointer shrink-0">
              <input
                type="checkbox"
                checked={twoFactorAuth}
                onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#EA580C]"></div>
            </label>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-100 text-xs text-stone-600 leading-relaxed">
            Status: <span className="font-bold text-[#1E5642]">Enabled</span>. A verification passcode will be prompted whenever you sign in from an unrecognized browser or IP address.
          </div>
        </div>

        {/* Active Logged-in Devices */}
        <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-extrabold text-stone-900">Active Login Sessions</h3>
              <p className="text-[11px] text-stone-400 mt-0.5">Currently authorized browser instances</p>
            </div>
            <button
              type="button"
              onClick={() => toast.success("Revoked all other active sessions!")}
              className="text-xs font-bold text-rose-600 hover:underline"
            >
              Revoke Others
            </button>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100 text-xs">
              <div className="flex items-center gap-2.5">
                <Laptop size={16} className="text-stone-500" />
                <div>
                  <span className="font-bold text-stone-800 block">MacBook Pro 16" &bull; Chrome 128</span>
                  <span className="text-[10px] text-stone-400">San Francisco, US &bull; 192.168.1.45</span>
                </div>
              </div>
              <span className="rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[10px] font-bold border border-emerald-100">
                This Device
              </span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100 text-xs">
              <div className="flex items-center gap-2.5">
                <Smartphone size={16} className="text-stone-500" />
                <div>
                  <span className="font-bold text-stone-800 block">iPhone 15 Pro &bull; Safari</span>
                  <span className="text-[10px] text-stone-400">San Francisco, US &bull; Active 2 hrs ago</span>
                </div>
              </div>
              <button className="text-stone-400 hover:text-stone-700">
                <LogOut size={14} />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default UserPasswordSettings;