import { MoreHorizontal, ChevronDown, Bell, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react";

const clockIns = [
  { name: "Claire Horington", role: "Sr. Engineer", time: "09:02 AM", status: "On-Time" },
  { name: "Marcus Vance", role: "Product Designer", time: "09:14 AM", status: "On-Time" },
  { name: "Sophia Chen", role: "DevOps Lead", time: "09:22 AM", status: "Remote" },
];

const payrollDisbursements = [
  { name: "Claire Horington", amount: "$4,200.00", status: "Disbursed" },
  { name: "Marcus Vance", amount: "$3,800.00", status: "Disbursed" },
  { name: "Sophia Chen", amount: "$4,650.00", status: "Disbursed" },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:px-10 lg:py-28">
      {/* Soft Indigo Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Workforce Analytics
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Smarter Workforce Insights, Better Decisions
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
          Stay on top of your business with real-time employee tracking, automated payroll reconciliation, and attendance insights — all in one place.
        </p>
      </div>

      {/* Overlapping 3D Tilted Cards */}
      <div className="relative mx-auto mt-16 flex max-w-4xl items-center justify-center">
        {/* Attendance Activity — Left, behind (tilted -4deg) */}
        <div className="relative z-10 hidden w-64 -translate-x-6 rotate-[-4deg] rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:block transition-transform hover:rotate-0 duration-300">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-700">Attendance Log</p>
            <Clock size={14} className="text-slate-400" />
          </div>
          <div className="space-y-2.5">
            {clockIns.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="h-8 w-8 shrink-0 rounded-lg bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-700">
                  {item.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-medium text-slate-700">{item.name}</p>
                  <p className="text-[9px] text-slate-400">{item.time}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-600">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance & Punctuality Gauge — Center, front */}
        <div className="relative z-20 w-72 shrink-0 rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">Attendance Stability</p>
            <MoreHorizontal size={16} className="text-slate-400" />
          </div>

          <div className="mt-3 flex items-center gap-4 text-[11px] font-medium text-slate-400">
            <span className="text-slate-800">Total</span>
            <span>Average</span>
            <span className="ml-auto flex items-center gap-1">
              Per Month <ChevronDown size={12} />
            </span>
          </div>

          {/* Circular Gauge */}
          <div className="relative mx-auto mt-6 flex h-36 w-36 items-center justify-center">
            <div
              className="absolute inset-0 rounded-full shadow-inner"
              style={{
                background:
                  "conic-gradient(#6366f1 0% 98%, #e0e7ff 98% 100%)",
                clipPath: "inset(0 0 0 0 round 9999px)",
              }}
            />
            <div className="absolute inset-3 rounded-full bg-white shadow-xs" />
            <div className="relative text-center">
              <p className="text-2xl font-bold text-slate-900">98.4%</p>
              <p className="text-[9px] text-slate-400">On-Time Punch</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2.5 text-[11px] text-indigo-700">
            <ArrowUpRight size={13} />
            Punctuality is 14% higher this month
          </div>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800">
            <Bell size={13} />
            Notify Workforce
          </button>
        </div>

        {/* Payroll Disbursements — Right, behind (tilted 4deg) */}
        <div className="relative z-10 hidden w-64 translate-x-6 rotate-[4deg] rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:block transition-transform hover:rotate-0 duration-300">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-700">Payroll Run</p>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
              248 Disbursed
            </span>
          </div>
          <div className="space-y-2.5">
            {payrollDisbursements.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="h-7 w-7 shrink-0 rounded-full bg-violet-100 flex items-center justify-center text-[9px] font-bold text-indigo-700">
                  {item.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-medium text-slate-700">{item.name}</p>
                  <p className="text-[9px] text-slate-400">{item.amount}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}