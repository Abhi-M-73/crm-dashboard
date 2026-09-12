import { Send, CheckCircle2, Clock, MapPin, Fingerprint, ShieldCheck } from "lucide-react";
import { useState } from "react";

const checklist = [
  "Geofenced mobile & biometric attendance tracking",
  "1-click automated payroll calculation with tax deductions",
  "Self-service leave requests with instant manager approvals",
  "Centralized employee document vault with digital signatures",
];

const stats = [
  { value: "250K+", label: "Daily Clock-Ins", highlight: false },
  { value: "99.4%", label: "Attendance Accuracy", highlight: true },
  { value: "3.5x", label: "Faster Payroll Run", highlight: false },
  { value: "85%", label: "Less HR Paperwork", highlight: false },
];

const brands = ["Linear", "Vercel", "Retool", "Supabase", "Loom", "Notion"];

export default function AutomationSection() {
  const [clockedIn, setClockedIn] = useState(true);

  return (
    <section id="automation" className="bg-white px-6 py-20 sm:px-10 lg:py-28 border-t border-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Workforce Automation
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              The Vision of Modern HR & Workforce Automation
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
              Experience seamless employee management with our intuitive platform, built for speed, accuracy, and enterprise reliability.
            </p>

            <ul className="mt-7 space-y-3.5">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-100">
                    <Send size={12} className="text-indigo-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — Rich Interactive HR Showcase Card */}
          <div className="relative">
            <div className="relative rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 via-violet-50/60 to-white p-6 sm:p-8 shadow-xl">
              {/* Virtual Time Clock Card */}
              <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
                      <Fingerprint size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Virtual Geofence Clock</h4>
                      <p className="text-[10px] text-slate-400">Headquarters • Zone Alpha</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-600 border border-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    GPS Verified
                  </span>
                </div>

                {/* Big Timer */}
                <div className="my-6 text-center">
                  <p className="text-xs text-slate-400 font-medium">Logged Time Today</p>
                  <p className="text-3xl sm:text-4xl font-black text-slate-900 font-mono mt-1">
                    05 : 24 : 18
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-600">
                    <Clock size={13} className="text-indigo-600" />
                    <span>Clock In: 09:02 AM • Shift 09:00 - 18:00</span>
                  </div>
                </div>

                {/* Clock Button Toggle */}
                <button
                  onClick={() => setClockedIn(!clockedIn)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition shadow-sm ${
                    clockedIn
                      ? "bg-slate-900 text-white hover:bg-slate-800"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                  }`}
                >
                  {clockedIn ? "Punch Out for the Day" : "Punch In (Verify Location)"}
                </button>
              </div>

              {/* Recent Activity Pill below */}
              <div className="mt-4 flex items-center justify-between rounded-xl bg-white/80 p-3 text-xs border border-indigo-100 shadow-xs">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 text-[10px]">
                    CH
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Claire Horington</span>
                    <span className="text-slate-400 text-[10px] block">Clock-in verified at 09:02 AM</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                  On-Time
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats 4-columns row */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`rounded-2xl p-6 text-center transition-all ${
                s.highlight
                  ? "bg-indigo-600 text-white shadow-xl shadow-indigo-600/25 -translate-y-1"
                  : "border border-slate-100 bg-slate-50/70"
              }`}
            >
              <p
                className={`text-3xl font-bold tracking-tight sm:text-4xl ${
                  s.highlight ? "text-white" : "text-slate-900"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`mt-1 text-xs font-medium ${
                  s.highlight ? "text-indigo-100" : "text-slate-500"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Brands logos ticker */}
        <div className="mt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Trusted by 1,200+ forward-thinking teams worldwide
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60">
            {brands.map((brand) => (
              <span key={brand} className="text-sm sm:text-base font-bold text-slate-700 tracking-tight">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}