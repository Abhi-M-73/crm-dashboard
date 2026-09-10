import { MoreHorizontal, ChevronDown, Bell, ArrowUpRight } from "lucide-react";

const orders = [
  { name: "Striped Tee Orange", price: "$45.00" },
  { name: "Striped Tee Orange", price: "$45.00" },
  { name: "Striped Tee Orange", price: "$45.00" },
];

const orderStatus = [
  { name: "Sarah Lewis", amount: "$120.00", status: "Paid" },
  { name: "James Cooper", amount: "$85.00", status: "Pending" },
  { name: "Priya Nair", amount: "$210.00", status: "Paid" },
];

export default function InsightsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 sm:px-10 lg:py-28">
      {/* glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-indigo-300">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          Analytics Dashboard
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Smarter Insights, Better Decisions
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">
          Stay on top of your business with real-time tracking, order
          management, and payment insights — all in one place.
        </p>
      </div>

      {/* overlapping cards */}
      <div className="relative mx-auto mt-16 flex max-w-4xl items-center justify-center">
        {/* Order Overview — left, behind */}
        <div className="relative z-10 hidden w-64 -translate-x-6 rotate-[-4deg] rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:block">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-700">Order Overview</p>
            <MoreHorizontal size={14} className="text-slate-400" />
          </div>
          <div className="space-y-2.5">
            {orders.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="h-8 w-8 shrink-0 rounded-lg bg-indigo-100" />
                <div className="flex-1">
                  <p className="text-[10px] font-medium text-slate-700">{item.name}</p>
                  <p className="text-[9px] text-slate-400">Qty: 1</p>
                </div>
                <p className="text-[10px] font-semibold text-slate-800">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Balance — center, front */}
        <div className="relative z-20 w-72 shrink-0 rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-800">Financial Balance</p>
            <MoreHorizontal size={16} className="text-slate-400" />
          </div>

          <div className="mt-3 flex items-center gap-4 text-[11px] font-medium text-slate-400">
            <span className="text-slate-800">Total</span>
            <span>Average</span>
            <span className="ml-auto flex items-center gap-1">
              Per Week <ChevronDown size={12} />
            </span>
          </div>

          {/* gauge */}
          <div className="relative mx-auto mt-6 flex h-36 w-36 items-center justify-center">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(#6366f1 0% 26%, #e0e7ff 26% 75%, transparent 75% 100%)",
                clipPath: "inset(0 0 0 0 round 9999px)",
              }}
            />
            <div className="absolute inset-3 rounded-full bg-white" />
            <div className="relative text-center">
              <p className="text-2xl font-bold text-slate-900">26%</p>
              <p className="text-[9px] text-slate-400">from last week</p>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-xl bg-indigo-50 px-3 py-2.5 text-[11px] text-indigo-700">
            <ArrowUpRight size={13} />
            Earning is 20% higher than last week
          </div>

          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800">
            <Bell size={13} />
            Notify Team
          </button>
        </div>

        {/* Order Status — right, behind */}
        <div className="relative z-10 hidden w-64 translate-x-6 rotate-[4deg] rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl sm:block">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-semibold text-slate-700">Order Status</p>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-600">
              82 Orders
            </span>
          </div>
          <div className="space-y-2.5">
            {orderStatus.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="h-7 w-7 shrink-0 rounded-full bg-violet-100" />
                <div className="flex-1">
                  <p className="text-[10px] font-medium text-slate-700">{item.name}</p>
                  <p className="text-[9px] text-slate-400">{item.amount}</p>
                </div>
                <span
                  className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                    item.status === "Paid"
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-amber-50 text-amber-600"
                  }`}
                >
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