import {
  PieChart,
  Users2,
  ShieldCheck,
  LineChart,
  LayoutGrid,
  CheckCircle2,
  Clock,
  Wallet,
} from "lucide-react";

const scaleFeatures = [
  "Flexible department & role permissions",
  "Automated leave & shift approval flows",
  "Instant encrypted payslip generation",
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-600">
            Workforce Features
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Smart Features to Simplify Workforce Management
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            Unlock the full potential of your team with our automated,
            frictionless, and employee-friendly CRM tools that save your HR hours every day.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_1fr]">
          {/* Big card — Smart Geofenced Attendance */}
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6 sm:p-8 flex flex-col justify-between">
            <div className="relative flex items-center justify-center gap-6 rounded-2xl bg-white p-6 shadow-sm">
              {/* Floating stat chip */}
              <div className="absolute -top-4 right-6 flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-white shadow-lg">
                <Clock size={14} className="text-indigo-400" />
                <div>
                  <p className="text-[9px] text-white/70">Attendance Today</p>
                  <p className="text-xs font-bold">248 Present (98.4%)</p>
                </div>
              </div>

              {/* Donut chart */}
              <div
                className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full sm:h-32 sm:w-32 shadow-inner"
                style={{
                  background:
                    "conic-gradient(#6366f1 0% 75%, #a78bfa 75% 90%, #c7d2fe 90% 100%)",
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-center sm:h-20 sm:w-20 shadow-xs">
                  <div>
                    <p className="text-sm font-bold text-slate-900">98.4%</p>
                    <p className="text-[8px] text-slate-400">On-Time</p>
                  </div>
                </div>
              </div>

              {/* Dynamic check-in volume bars */}
              <div className="flex flex-1 items-end gap-1.5">
                {[20, 35, 28, 48, 40, 60, 50, 70, 58, 80].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full bg-gradient-to-t from-indigo-300 to-indigo-500 transition-all hover:brightness-110"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900">
                Geofenced & Biometric Attendance Tracking
              </h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed text-slate-500">
                Eliminate proxy punches and time theft. Employees check in via mobile geofence boundary or biometric sync with instant overtime and late calculation.
              </p>

              <button className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-900/10 transition hover:bg-slate-800">
                Explore Attendance Suite
              </button>
            </div>
          </div>

          {/* Right column — 2x2 small cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Real-Time Team Collaboration */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5 flex flex-col justify-between">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <Users2 size={16} />
                </div>
                <svg viewBox="0 0 150 50" className="h-12 w-full" fill="none">
                  <path
                    d="M0 40 C20 20,30 45,50 25 S75 40,95 15 S120 30,150 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-indigo-500"
                  />
                </svg>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-slate-900">
                  Team Directory & Shifts
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Organize departments, shifts, and team hierarchies.
                </p>
              </div>
            </div>

            {/* 1-Click Automated Payroll */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5 flex flex-col justify-between">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <Wallet size={16} />
                </div>
                <div className="flex h-12 items-end gap-1">
                  {[10, 18, 14, 24, 20, 30, 26, 34].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-full bg-indigo-400"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-slate-900">
                  1-Click Payroll Run
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Auto-sync leaves and overtime with salary computation.
                </p>
              </div>
            </div>

            {/* Smart Insights & Trends */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5 flex flex-col justify-between">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-600">Punctuality</span>
                  <LineChart size={14} className="text-indigo-500" />
                </div>
                <div className="flex h-12 items-end gap-1">
                  {[16, 10, 22, 14, 28, 18, 24].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-indigo-300"
                      style={{ height: `${h}px` }}
                    />
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-slate-900">
                  Attendance Trends
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Track absenteeism and punctual check-ins in real time.
                </p>
              </div>
            </div>

            {/* Scalable & Customizable */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5 flex flex-col justify-between">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <LayoutGrid size={16} />
                </div>
                <ul className="space-y-1.5">
                  {scaleFeatures.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-1.5 text-[10px] text-slate-600"
                    >
                      <CheckCircle2
                        size={12}
                        className="mt-0.5 shrink-0 text-indigo-600"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="text-sm font-semibold text-slate-900">
                  Flexible Approvals
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Multi-level approval flows for leaves & expenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}