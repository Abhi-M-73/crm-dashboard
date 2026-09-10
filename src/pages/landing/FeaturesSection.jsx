import {
  PieChart,
  Users2,
  ShieldCheck,
  LineChart,
  LayoutGrid,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const scaleFeatures = [
  "Flexible team & role management",
  "Custom workflows for any use case",
  "API-first, built to extend",
];

export default function FeaturesSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Smart Features to Simplify Your Work
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            Unlock the full potential of your workflow with our smart,
            efficient, and user-friendly SaaS tools, and save you time every
            day.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-[1.15fr_1fr]">
          {/* Big card — Seamless Integrations */}
          <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-6 sm:p-8">
            <div className="relative flex items-center justify-center gap-6 rounded-2xl bg-white p-6 shadow-sm">
              {/* floating stat chip */}
              <div className="absolute -top-4 right-6 flex items-center gap-2 rounded-xl bg-slate-900 px-3 py-2 text-white shadow-lg">
                <PieChart size={14} />
                <div>
                  <p className="text-[9px] text-white/70">Total Revenue</p>
                  <p className="text-xs font-bold">$52,375</p>
                </div>
              </div>

              {/* donut */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full sm:h-32 sm:w-32"
                style={{
                  background:
                    "conic-gradient(#6366f1 0% 40%, #a78bfa 40% 65%, #c7d2fe 65% 100%)",
                }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-center sm:h-20 sm:w-20">
                  <div>
                    <p className="text-sm font-bold text-slate-900">$52K</p>
                    <p className="text-[8px] text-slate-400">This month</p>
                  </div>
                </div>
              </div>

              {/* bars */}
              <div className="flex flex-1 items-end gap-1.5">
                {[20, 35, 28, 48, 40, 60, 50, 70, 58, 80].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-full bg-gradient-to-t from-indigo-300 to-indigo-500"
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>
            </div>

            <h3 className="mt-6 text-lg font-semibold text-slate-900">
              Seamless Integrations
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">
              Connect effortlessly with the tools you already use. Our
              platform syncs data in real time, so nothing ever slips through
              the cracks.
            </p>

            <button className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Learn More
            </button>
          </div>

          {/* Right column — 2x2 small cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Real-Time Collaboration */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100">
                  <Users2 size={14} className="text-indigo-600" />
                </div>
                <svg viewBox="0 0 150 50" className="h-12 w-full" fill="none">
                  <path
                    d="M0 40 C20 20,30 45,50 25 S75 40,95 15 S120 30,150 8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-rose-400"
                  />
                </svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Real-Time Collaboration
              </p>
            </div>

            {/* Enterprise-Grade Security */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100">
                  <ShieldCheck size={14} className="text-indigo-600" />
                </div>
                <div className="flex h-12 items-end gap-1">
                  {[10, 18, 14, 24, 20, 30, 26, 34].map((h, i) => (
                    <div key={i} className="flex-1 rounded-full bg-indigo-300" style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Enterprise-Grade Security
              </p>
            </div>

            {/* Smart insights table */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-[10px] font-semibold text-slate-600">Overview</span>
                  <LineChart size={13} className="text-indigo-500" />
                </div>
                <div className="flex h-12 items-end gap-1">
                  {[16, 10, 22, 14, 28, 18, 24].map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-indigo-200" style={{ height: `${h}px` }} />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Smart Insights
              </p>
            </div>

            {/* Scalable & Customizable */}
            <div className="rounded-3xl border border-indigo-100 bg-indigo-50/60 p-5">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100">
                  <LayoutGrid size={14} className="text-indigo-600" />
                </div>
                <ul className="space-y-1.5">
                  {scaleFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-[10px] text-slate-500">
                      <CheckCircle2 size={11} className="mt-0.5 shrink-0 text-indigo-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-800">
                Scalable & Customizable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}