import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Download,
  ShieldCheck,
  CheckCircle2,
  Clock,
  FileText,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  Lock,
  HeartHandshake,
  Laptop,
  HelpCircle,
  Award
} from "lucide-react";

const UserCompanyPolicies = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const policiesData = [
    {
      id: "POL-01",
      title: "Hybrid & Remote Work Policy",
      category: "workplace",
      version: "v3.2",
      effectiveDate: "Jan 15, 2026",
      readTime: "6 mins",
      acknowledged: true,
      mandatory: true,
      description: "Guidelines regarding 3-day in-office attendance, home office stipend, and core working shift hours.",
    },
    {
      id: "POL-02",
      title: "Information Security & Data Protection (ISMS)",
      category: "security",
      version: "v4.0",
      effectiveDate: "Mar 01, 2026",
      readTime: "12 mins",
      acknowledged: true,
      mandatory: true,
      description: "Protocols on corporate laptop encryption, password complexity, 2FA enforcement, and zero-trust VPN access.",
    },
    {
      id: "POL-03",
      title: "Annual Leave & Time-Off Guidelines",
      category: "leaves",
      version: "v2.1",
      effectiveDate: "Jan 01, 2026",
      readTime: "5 mins",
      acknowledged: true,
      mandatory: false,
      description: "Rules for applying paid vacation (PTO), sick leaves, rollover limits, and blackout sprint periods.",
    },
    {
      id: "POL-04",
      title: "Code of Business Conduct & Ethics",
      category: "conduct",
      version: "v5.0",
      effectiveDate: "Aug 10, 2026",
      readTime: "8 mins",
      acknowledged: false,
      mandatory: true,
      description: "Workplace anti-harassment regulations, conflict of interest declarations, and ethical client relations.",
    },
    {
      id: "POL-05",
      title: "Device Reimbursement & Learning Allowance",
      category: "workplace",
      version: "v1.8",
      effectiveDate: "May 20, 2026",
      readTime: "4 mins",
      acknowledged: true,
      mandatory: false,
      description: "Eligibility criteria for annual $1,500 continuous learning budget, books, and home desk ergonomics.",
    },
    {
      id: "POL-06",
      title: "Whistleblower & Grievance Redressal Mechanism",
      category: "conduct",
      version: "v2.4",
      effectiveDate: "Feb 12, 2026",
      readTime: "7 mins",
      acknowledged: true,
      mandatory: true,
      description: "Confidential channels for reporting compliance breaches with zero retaliation assurance.",
    },
  ];

  const filteredPolicies = policiesData.filter((policy) => {
    const matchesTab = activeTab === "all" ? true : policy.category === activeTab;
    const matchesSearch =
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & DOWNLOAD HANDBOOK */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Company Policies & Governance
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Review workplace regulations, compliance standards, and employee benefits handbooks
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--primary-700)] transition active:scale-[0.98]"
          >
            <Download size={14} />
            <span>Complete Handbook (PDF)</span>
          </button>
        </div>
      </div>

      {/* 2. STATS PILL COUNTERS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--secondary-100)] text-[var(--secondary)] flex items-center justify-center shrink-0 border border-[var(--secondary-100)]">
            <BookOpen size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Active Handbooks</span>
            <span className="text-lg font-black text-stone-900 leading-tight">06 Policies</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0 border border-[var(--primary-100)]">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Signed & Agreed</span>
            <span className="text-lg font-black text-stone-900 leading-tight">05 / 06 Signed</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Action Required</span>
            <span className="text-lg font-black text-stone-900 leading-tight">01 Pending</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#FAF8F5] text-stone-700 flex items-center justify-center shrink-0 border border-stone-100">
            <Award size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Compliance Rating</span>
            <span className="text-lg font-black text-stone-900 leading-tight">96% Compliant</span>
          </div>
        </div>
      </div>

      {/* 3. CONCENTRIC GAUGE & MANDATORY NOTICE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* CONCENTRIC GAUGE CARD (5 Columns) */}
        <div className="lg:col-span-5 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Governance Compliance</h3>
              <p className="text-[11px] text-stone-400">Acknowledgment tracking for annual audit</p>
            </div>
            <span className="rounded-full bg-[var(--secondary-50)] px-2.5 py-0.5 text-[11px] font-bold text-[var(--secondary-700)] border border-[var(--secondary-100)]">
              Good Standing
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
                strokeDashoffset="55"
                strokeLinecap="round"
              />

              <circle cx="60" cy="60" r="38" fill="none" stroke="var(--secondary-100)" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="38"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth="8"
                strokeDasharray="238"
                strokeDashoffset="26"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-stone-900">83.3%</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                Acknowledged
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" /> 5 Signed
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" /> 1 Due Signature
            </span>
          </div>
        </div>

        {/* PENDING SIGNATURE ALERT & HELPDESK (7 Columns) */}
        <div className="lg:col-span-7 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-base font-extrabold text-stone-900">Action Required: Policy Renewal</h3>
            <p className="text-[11px] text-stone-400">Please review and digitally sign recent changes</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-3.5">
            <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-stone-900">
                Code of Business Conduct & Ethics (v5.0)
              </h4>
              <p className="text-[11px] text-stone-600 leading-relaxed">
                Updated on August 10, 2026 with new remote intellectual property & AI usage guidelines. Mandatory acknowledgment is due within 14 days.
              </p>
              <button
                type="button"
                className="mt-2 text-xs font-bold text-[var(--primary)] hover:underline flex items-center gap-1"
              >
                <span>Read & Electronically Sign</span>
                <ExternalLink size={12} />
              </button>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-100 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-stone-600">
              <HelpCircle size={15} className="text-stone-400" />
              <span>Have questions regarding policy clauses?</span>
            </div>
            <a
              href="mailto:compliance@relationx.com"
              className="font-bold text-[var(--secondary)] hover:underline"
            >
              Contact Legal HR &rarr;
            </a>
          </div>
        </div>

      </div>

      {/* 4. FILTER TABS & SEARCH */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/70 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
          {[
            { id: "all", label: "All Policies" },
            { id: "workplace", label: "Workplace & Remote" },
            { id: "security", label: "IT & Security" },
            { id: "leaves", label: "Leave Rules" },
            { id: "conduct", label: "Code of Conduct" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-1.5 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[var(--secondary)] text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900 hover:bg-stone-200/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative flex items-center">
          <Search size={14} className="absolute left-3.5 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search policy name or clause..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full border border-stone-200/80 bg-white py-1.5 pl-9 pr-4 text-xs font-medium text-stone-800 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition shadow-sm w-full sm:w-60"
          />
        </div>
      </div>

      {/* 5. POLICIES GRID / LIST CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPolicies.map((item) => (
          <div
            key={item.id}
            className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
          >
            <div>
              {/* Card Header: Category & Badges */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-[var(--primary)] bg-[var(--primary-50)] px-2.5 py-0.5 rounded-md font-mono">
                    {item.id}
                  </span>
                  <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wide">
                    {item.version} &bull; {item.readTime} read
                  </span>
                </div>

                {item.mandatory && (
                  <span className="rounded-full bg-rose-50 border border-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-600">
                    Mandatory
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="text-base font-extrabold text-stone-900 group-hover:text-[var(--primary)] transition mt-2">
                {item.title}
              </h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed line-clamp-2">
                {item.description}
              </p>
            </div>

            {/* Card Footer: Acknowledgment status & Download action */}
            <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
              {item.acknowledged ? (
                <span className="inline-flex items-center gap-1.5 font-bold text-[var(--secondary)]">
                  <CheckCircle2 size={15} className="text-[var(--secondary-500)]" />
                  <span>Acknowledged</span>
                </span>
              ) : (
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 font-bold text-[var(--primary)] hover:underline"
                >
                  <Clock size={14} />
                  <span>Sign Document &rarr;</span>
                </button>
              )}

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-stone-400 font-medium">Effective: {item.effectiveDate}</span>
                <button
                  type="button"
                  className="p-1.5 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition"
                  title="Download Policy PDF"
                >
                  <Download size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default UserCompanyPolicies;