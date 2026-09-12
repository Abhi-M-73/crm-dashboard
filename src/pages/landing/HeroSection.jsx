import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  MousePointer2,
  LayoutDashboard,
  Clock,
  Users,
  FolderKanban,
  FileText,
  Settings,
  TrendingUp,
  Wallet,
  CalendarCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Attendance", href: "#features" },
  { label: "Payroll", href: "#features" },
  { label: "Workflows", href: "#automation" },
  { label: "Analytics", href: "#insights" },
  { label: "Testimonials", href: "#testimonials" },
];

const sidebarItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Attendance", icon: Clock },
  { label: "Teams", icon: Users },
  { label: "Projects", icon: FolderKanban },
  { label: "Payroll", icon: Wallet },
  { label: "Leaves", icon: CalendarCheck },
  { label: "Settings", icon: Settings },
];

const stats = [
  ["Active Employees", "248"],
  ["On-Time Check-in", "98.4%"],
  ["Monthly Payroll", "$148.2K"],
];

export default function HeroSection() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="p-3 sm:p-5">
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#fefeff] via-[#8f8ee6] to-[#a1a0f5] rounded-3xl">
        {/* Soft glow ambient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-white/25 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-indigo-400/30 blur-[100px]" />
          <div className="absolute top-1/3 -left-20 h-[350px] w-[350px] rounded-full bg-violet-400/20 blur-[90px]" />
        </div>

        {/* EMBEDDED STYLISH NAVBAR */}
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
          <a href="/" className="flex items-center gap-2.5 text-slate-900 group">
            <span className="flex h-7 w-7 rotate-45 items-center justify-center rounded-lg bg-white shadow-sm transition-transform group-hover:rotate-90 duration-300">
              <span className="-rotate-45 text-sm font-black text-indigo-600">◆</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight">StaffSync</span>
              <span className="rounded bg-white/60 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700 tracking-wider">
                CRM
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-800 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 transition hover:text-slate-950 hover:font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="text-sm font-semibold text-slate-800 hover:text-black transition"
            >
              Log in
            </button>
            <button
              onClick={() => navigate("/register")}
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
            </button>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-8 text-center sm:pt-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/40 px-4 py-1.5 text-xs font-semibold text-indigo-950 backdrop-blur-md shadow-xs">
            <span className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>New: Real-time Geofenced Attendance & 1-Click Payroll 2.0</span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The All-in-One Platform to
            <br />
            <span className="bg-gradient-to-r from-slate-950 via-indigo-950 to-indigo-900 bg-clip-text text-transparent">
              Manage & Scale Your Workforce
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-800/90 sm:text-base font-normal">
            A complete operating system for modern teams to track daily attendance, automate payroll disbursements, approve leave requests, and manage company documents — seamlessly in one place.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <button
              onClick={() => navigate("/register")}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/25 transition hover:bg-slate-800 hover:-translate-y-0.5"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#automation"
              className="rounded-full border border-white/80 bg-white/30 px-7 py-3.5 text-sm font-semibold text-slate-900 backdrop-blur-md transition hover:bg-white/50 shadow-xs"
            >
              Explore Live Demo
            </a>

            {/* Interactive cursor tooltip */}
            {hovered && (
              <div className="absolute -bottom-9 right-4 hidden items-center gap-1.5 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[11px] font-medium text-white shadow-xl sm:flex animate-in fade-in duration-150">
                <MousePointer2 size={12} className="fill-white" />
                <span>Instant 2-minute setup</span>
              </div>
            )}
          </div>
        </div>

        {/* DASHBOARD PREVIEW */}
        <div className="relative z-10 mx-auto mt-14 max-w-6xl px-4 sm:mt-20">
          {/* Left floating card: Active Employees */}
          <div className="absolute -left-2 top-6 z-20 hidden w-44 rounded-2xl border border-white/70 bg-white/95 p-3.5 text-left shadow-2xl backdrop-blur-md lg:block xl:-left-8 transition-transform hover:-translate-y-1">
            <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
              <span>ACTIVE WORKFORCE</span>
              <TrendingUp size={13} className="text-emerald-500" />
            </div>
            <p className="mt-1 text-lg font-bold text-slate-900">248 Present</p>
            <p className="text-[9px] text-slate-400">98.4% on-time check-in</p>
            <div className="mt-2.5 flex items-end gap-1">
              {[6, 10, 8, 14, 11, 16, 13, 20].map((h, i) => (
                <div
                  key={i}
                  className="w-1.5 rounded-full bg-indigo-500"
                  style={{ height: `${h}px` }}
                />
              ))}
            </div>
          </div>

          {/* Right floating card: Growth / Attendance rate */}
          <div className="absolute -right-2 top-6 z-20 hidden w-36 rounded-2xl border border-white/70 bg-white/95 p-3.5 text-center shadow-2xl backdrop-blur-md lg:block xl:-right-6 transition-transform hover:-translate-y-1">
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[8px] border-indigo-100">
              <div className="absolute inset-0 rounded-full border-[8px] border-transparent border-t-indigo-500 border-r-indigo-500 rotate-[45deg]" />
              <span className="text-sm font-bold text-slate-900">98.5%</span>
            </div>
            <p className="mt-2 text-[9px] font-bold text-slate-700">Attendance Rate</p>
            <p className="text-[8px] text-emerald-600 font-semibold">+2.4% vs last week</p>
          </div>

          {/* Browser Frame */}
          <div className="overflow-hidden rounded-t-3xl border border-white/60 bg-white shadow-[0_-10px_80px_rgba(70,50,180,0.35)]">
            <div className="flex h-10 items-center justify-between border-b border-slate-100 bg-white px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-md bg-slate-100 px-3 py-0.5 text-[11px] text-slate-500 font-mono">
                app.staffsync.io/user/dashboard
              </div>
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            <div className="flex min-h-[420px] text-left">
              {/* Sidebar */}
              <aside className="hidden w-48 shrink-0 border-r border-slate-100 bg-white p-4 sm:block">
                <div className="mb-5 flex items-center gap-2 px-1">
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-600 text-white text-xs font-bold">
                    ◆
                  </div>
                  <span className="text-xs font-bold text-slate-800">HR Workspace</span>
                </div>

                <div className="space-y-1">
                  {sidebarItems.map(({ label, icon: Icon, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium transition ${
                        active
                          ? "bg-indigo-50 text-indigo-600 font-semibold"
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      <Icon size={14} />
                      {label}
                    </div>
                  ))}
                </div>
              </aside>

              {/* Content */}
              <div className="flex-1 bg-slate-50 p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-800">
                      Welcome Back, Claire Horington
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Senior Frontend Engineer • Engineering Squad
                    </p>
                  </div>
                  <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-xs">
                    Clocked In (09:02 AM)
                  </span>
                </div>

                {/* 3 Stats Row */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  {stats.map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-slate-100 bg-white p-3.5 shadow-xs"
                    >
                      <p className="text-[10px] font-medium text-slate-400">{label}</p>
                      <p className="mt-1 text-base font-bold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="mt-4 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
                  {/* Left Wavy Area Chart: Working Hours & Attendance */}
                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-xs">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-semibold text-slate-800">
                        Attendance & Working Hours Velocity
                      </p>
                      <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        +14% this month
                      </span>
                    </div>
                    <div className="mt-3 h-32">
                      <svg viewBox="0 0 500 150" className="h-full w-full" fill="none">
                        <defs>
                          <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0 125 C50 105,65 115,100 90 S150 110,185 72 S235 92,270 55 S325 75,360 42 S420 62,500 15 V150 H0Z"
                          fill="url(#heroGradient)"
                        />
                        <path
                          d="M0 125 C50 105,65 115,100 90 S150 110,185 72 S235 92,270 55 S325 75,360 42 S420 62,500 15"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="text-indigo-500"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Right Donut Chart: Department Distribution */}
                  <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-xs">
                    <p className="text-[11px] font-semibold text-slate-800">
                      Workforce Headcount Split
                    </p>
                    <div className="mt-3 flex items-center justify-center">
                      <div
                        className="h-24 w-24 rounded-full shadow-inner"
                        style={{
                          background:
                            "conic-gradient(#6366f1 0% 45%, #a5b4fc 45% 70%, #e0e7ff 70% 100%)",
                        }}
                      >
                        <div className="flex h-full w-full items-center justify-center">
                          <div className="flex h-12 w-12 flex-col items-center justify-center rounded-full bg-white text-center shadow-xs">
                            <span className="text-xs font-bold text-slate-900">252</span>
                            <span className="text-[7px] text-slate-400 -mt-0.5">Staff</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-center gap-3 text-[9px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" /> Eng (45%)
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" /> Design (25%)
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-100" /> Ops (30%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}