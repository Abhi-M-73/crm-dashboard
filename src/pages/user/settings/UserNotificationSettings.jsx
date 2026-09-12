import React, { useState } from "react";
import {
  Mail,
  Bell,
  Smartphone,
  Save,
  CheckCircle2,
  CalendarCheck,
  BadgeDollarSign,
  Clock,
  MessageSquare,
  Layers,
  Megaphone,
  AlertTriangle,
  KeyRound
} from "lucide-react";
import toast from "react-hot-toast";

const UserNotificationSettings = () => {
  // State configured strictly according to your list
  const [settings, setSettings] = useState({
    // Email Notifications
    leaveApprovals: true,
    payrollAlerts: true,
    attendanceReminders: true,

    // Push Notifications
    newMessages: true,
    taskUpdates: true,
    companyAnnouncements: false,

    // SMS Notifications
    criticalAlerts: true,
    otpAuthentication: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    toast.success("Notification preferences updated successfully!");
  };

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Notification Settings
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Manage your email, push, and SMS alert preferences
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-5 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-[var(--primary-700)] active:scale-[0.98]"
        >
          <Save size={15} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="space-y-6">

        {/* 1. EMAIL NOTIFICATIONS */}
        <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--secondary-100)] text-[var(--secondary)]">
              <Mail size={18} />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-stone-900">
                Email Notifications
              </h2>
              <p className="text-xs text-stone-400">
                Direct updates delivered to your corporate inbox
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {/* Leave Approvals */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <div className="flex items-start gap-3">
                <CalendarCheck size={18} className="text-[var(--secondary)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-xs font-extrabold text-stone-900">Leave Approvals</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Receive emails when your leave requests are approved or rejected.
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input
                  type="checkbox"
                  checked={settings.leaveApprovals}
                  onChange={() => handleToggle("leaveApprovals")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>

            {/* Payroll Alerts */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <div className="flex items-start gap-3">
                <BadgeDollarSign size={18} className="text-[var(--primary)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-xs font-extrabold text-stone-900">Payroll Alerts</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Get notified when your monthly payslip is generated.
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input
                  type="checkbox"
                  checked={settings.payrollAlerts}
                  onChange={() => handleToggle("payrollAlerts")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>

            {/* Attendance Reminders */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-stone-700 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-xs font-extrabold text-stone-900">Attendance Reminders</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Stay on track with daily attendance punch-in reminders.
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input
                  type="checkbox"
                  checked={settings.attendanceReminders}
                  onChange={() => handleToggle("attendanceReminders")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 2. PUSH NOTIFICATIONS */}
        <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary-50)] text-[var(--primary)]">
              <Bell size={18} />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-stone-900">
                Push Notifications
              </h2>
              <p className="text-xs text-stone-400">
                Real-time browser and mobile notifications
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {/* New Messages */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <div className="flex items-start gap-3">
                <MessageSquare size={18} className="text-[var(--primary)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-xs font-extrabold text-stone-900">New Messages</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Broadcasts and private messages notifications.
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input
                  type="checkbox"
                  checked={settings.newMessages}
                  onChange={() => handleToggle("newMessages")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>

            {/* Task Updates */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <div className="flex items-start gap-3">
                <Layers size={18} className="text-[var(--secondary)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-xs font-extrabold text-stone-900">Task Updates</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Notifications for task assignments and deadline alerts.
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input
                  type="checkbox"
                  checked={settings.taskUpdates}
                  onChange={() => handleToggle("taskUpdates")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>

            {/* Company Announcements */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <div className="flex items-start gap-3">
                <Megaphone size={18} className="text-stone-700 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-xs font-extrabold text-stone-900">Company Announcements</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    General updates and organization-wide news.
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input
                  type="checkbox"
                  checked={settings.companyAnnouncements}
                  onChange={() => handleToggle("companyAnnouncements")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 3. SMS NOTIFICATIONS */}
        <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center gap-3 border-b border-stone-100 pb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-100 text-stone-700">
              <Smartphone size={18} />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-stone-900">
                SMS Notifications
              </h2>
              <p className="text-xs text-stone-400">
                Direct SMS messages delivered to your registered phone number
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-1">
            {/* Critical Alerts */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-rose-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-xs font-extrabold text-stone-900">Critical Alerts</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Receive SMS for high-priority emergency alerts.
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input
                  type="checkbox"
                  checked={settings.criticalAlerts}
                  onChange={() => handleToggle("criticalAlerts")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>

            {/* OTP & Authentication */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#FAF8F5] border border-stone-100">
              <div className="flex items-start gap-3">
                <KeyRound size={18} className="text-[var(--secondary)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-xs font-extrabold text-stone-900">OTP & Authentication</h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Security codes for multi-factor authentication.
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer ml-4 shrink-0">
                <input
                  type="checkbox"
                  checked={settings.otpAuthentication}
                  onChange={() => handleToggle("otpAuthentication")}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-stone-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>
              </label>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default UserNotificationSettings;