import { Send, Users } from "lucide-react";

const checklist = [
  "Send and receive funds worldwide",
  "Full control of transactions in real time",
  "Built for enterprise and speed",
  "Send and receive funds worldwide",
];

const stats = [
  { value: "2M+", label: "Active Users", highlight: false },
  { value: "50+", label: "Countries Served", highlight: true },
  { value: "85%", label: "Customer Satisfaction", highlight: false },
  { value: "4M+", label: "Transactions Processed", highlight: false },
];

const brands = ["Google", "afterpay", "Asana", "Dropbox", "Spotify", "grammarly"];

export default function AutomationSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Automation platform
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              The vision of Future Automation
            </h2>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
              Experience real-time currency conversion with our seamless
              platform, built for speed, security, and scale.
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

          {/* Right column — image placeholder */}
          <div className="relative">
            <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-100 via-violet-100 to-indigo-50">
              <div className="flex flex-col items-center gap-2 text-indigo-300">
                <Users size={40} />
                <span className="text-xs font-medium">Team photo goes here</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map(({ value, label, highlight }) => (
            <div
              key={label}
              className={`rounded-2xl p-5 text-center shadow-sm ${
                highlight
                  ? "bg-gradient-to-br from-indigo-500 to-violet-600 text-white"
                  : "border border-slate-100 bg-white text-slate-900"
              }`}
            >
              <p className="text-2xl font-bold">{value}</p>
              <p className={`mt-1 text-xs ${highlight ? "text-white/80" : "text-slate-400"}`}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Logo strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 rounded-2xl bg-indigo-50/60 px-8 py-6">
          {brands.map((brand) => (
            <span key={brand} className="text-base font-semibold text-slate-400/80">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}