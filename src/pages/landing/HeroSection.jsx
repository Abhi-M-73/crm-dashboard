import { useState } from "react";
import {
    ChevronDown,
    ArrowRight,
    MousePointer2,
    LayoutDashboard,
    BarChart3,
    Users,
    FolderKanban,
    FileText,
    Settings,
    TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = ["Products", "Solutions", "Pricing", "Resources"];

const sidebarItems = [
    { label: "Overview", icon: LayoutDashboard, active: true },
    { label: "Analytics", icon: BarChart3 },
    { label: "Customers", icon: Users },
    { label: "Projects", icon: FolderKanban },
    { label: "Reports", icon: FileText },
    { label: "Settings", icon: Settings },
];

const stats = [
    ["Total Revenue", "$84.2K"],
    ["Active Users", "12,482"],
    ["Conversion", "6.8%"],
];

export default function HeroSection() {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <section className="p-5">
            <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#fefeff] via-[#8f8ee6] to-[#a1a0f5] rounded-2xl ">
                {/* soft glow blobs */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-24 left-1/2 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-white/25 blur-[110px]" />
                    <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-indigo-400/30 blur-[100px]" />
                </div>

                {/* NAVBAR */}
                <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
                    <div className="flex items-center gap-2 text-black">
                        <span className="flex h-6 w-6 rotate-45 items-center justify-center rounded-md bg-white/90">
                            <span className="-rotate-45 text-sm font-bold text-indigo-600">◆</span>
                        </span>
                        <span className="text-lg font-semibold tracking-tight">CRM</span>
                    </div>

                    <div className="hidden items-center gap-8 text-sm font-medium text-black md:flex">
                        {navLinks.map((link) => (
                            <button
                                key={link}
                                className="flex items-center gap-1 transition hover:text-black"
                            >
                                {link}
                                <ChevronDown size={14} />
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate("/login")}
                            className="text-sm font-medium text-black hover:text-white">
                            Login
                        </button>
                        <button
                            onClick={() => navigate("/register")}
                            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-800"
                        >
                            Get Started
                        </button>
                    </div>
                </nav>

                {/* HERO CONTENT */}
                <div className="relative z-10 mx-auto max-w-4xl px-6 pt-8 text-center sm:pt-12">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-500 bg-white/20 px-4 py-1.5 text-xs font-medium text-gray-500 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                        New: Real-time collaboration is here
                    </div>

                    <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        The All-in-One Platform to
                        <br />
                        Grow Faster
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-800/80 sm:text-base">
                        A complete stack to manage CRM, ERP, automation, finance, and
                        analytics — securely and reliably, in one place.
                    </p>

                    <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <button
                            onClick={() => navigate("/register")}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className="group flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/25 transition hover:-translate-y-0.5"
                        >
                            Get Started
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>

                        <a
                            href="#demo"
                            className="rounded-full border border-white/60 bg-white/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/30"
                        >
                            Learn More
                        </a>

                        {/* fake cursor tooltip, like in the reference */}
                        {hovered && (
                            <div className="absolute -bottom-8 right-6 hidden items-center gap-1.5 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[11px] font-medium text-white shadow-lg sm:flex">
                                <MousePointer2 size={12} className="fill-white" />
                                Click to sign up
                            </div>
                        )}
                    </div>
                </div>

                {/* DASHBOARD PREVIEW */}
                <div className="relative z-10 mx-auto mt-14 max-w-6xl px-4 sm:mt-20">
                    {/* left floating card */}
                    <div className="absolute -left-2 top-6 z-20 hidden w-40 rounded-2xl border border-white/60 bg-white/95 p-3 text-left shadow-2xl backdrop-blur-md lg:block xl:-left-10">
                        <div className="flex items-center justify-between text-[10px] font-semibold text-slate-400">
                            <span>MRR</span>
                            <TrendingUp size={13} className="text-emerald-500" />
                        </div>
                        <p className="mt-1 text-lg font-bold text-slate-900">$48,294</p>
                        <div className="mt-2 flex items-end gap-1">
                            {[6, 10, 8, 14, 11, 16, 13, 20].map((h, i) => (
                                <div key={i} className="w-1.5 rounded-full bg-indigo-400" style={{ height: `${h}px` }} />
                            ))}
                        </div>
                    </div>

                    {/* right floating card */}
                    <div className="absolute -right-2 top-6 z-20 hidden w-32 rounded-2xl border border-white/60 bg-white/95 p-3 text-center shadow-2xl backdrop-blur-md lg:block xl:-right-8">
                        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-[8px] border-indigo-100">
                            <div className="absolute inset-0 rounded-full border-[8px] border-transparent border-t-indigo-500 border-r-indigo-500 rotate-[35deg]" />
                            <span className="text-sm font-bold text-slate-900">8.5%</span>
                        </div>
                        <p className="mt-2 text-[9px] font-medium text-slate-400">Growth rate</p>
                    </div>

                    {/* browser frame */}
                    <div className="overflow-hidden rounded-t-3xl border border-white/50 bg-white shadow-[0_-10px_80px_rgba(70,50,180,0.35)]">
                        <div className="flex h-10 items-center gap-1.5 border-b border-slate-100 bg-white px-4">
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                        </div>

                        <div className="flex min-h-[420px] text-left">
                            {/* sidebar */}
                            <aside className="hidden w-44 shrink-0 border-r border-slate-100 bg-white p-4 sm:block">
                                <div className="mb-6 h-5 w-20 rounded bg-slate-100" />
                                <div className="space-y-1">
                                    {sidebarItems.map(({ label, icon: Icon, active }) => (
                                        <div
                                            key={label}
                                            className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-medium ${active ? "bg-indigo-50 text-indigo-600" : "text-slate-400"
                                                }`}
                                        >
                                            <Icon size={14} />
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </aside>

                            {/* content */}
                            <div className="flex-1 bg-slate-50 p-4 sm:p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="h-4 w-32 rounded bg-slate-800/10" />
                                        <div className="mt-2 h-2.5 w-44 rounded bg-slate-200" />
                                    </div>
                                    <div className="h-8 w-24 rounded-lg bg-indigo-500" />
                                </div>

                                <div className="mt-5 grid grid-cols-3 gap-3">
                                    {stats.map(([label, value]) => (
                                        <div key={label} className="rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                                            <p className="text-[9px] text-slate-400">{label}</p>
                                            <p className="mt-1 text-sm font-bold text-slate-800">{value}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
                                    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                                        <p className="text-[10px] font-semibold text-slate-700">Revenue Overview</p>
                                        <div className="mt-4 h-32">
                                            <svg viewBox="0 0 500 150" className="h-full w-full" fill="none">
                                                <path
                                                    d="M0 125 C50 105,65 115,100 90 S150 110,185 72 S235 92,270 55 S325 75,360 42 S420 62,500 15 V150 H0Z"
                                                    className="fill-indigo-50"
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

                                    <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                                        <p className="text-[10px] font-semibold text-slate-700">Sales Split</p>
                                        <div className="mt-4 flex items-center justify-center">
                                            <div
                                                className="h-24 w-24 rounded-full"
                                                style={{
                                                    background:
                                                        "conic-gradient(#6366f1 0% 45%, #a5b4fc 45% 70%, #e0e7ff 70% 100%)",
                                                }}
                                            >
                                                <div className="flex h-full w-full items-center justify-center">
                                                    <div className="h-12 w-12 rounded-full bg-white" />
                                                </div>
                                            </div>
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