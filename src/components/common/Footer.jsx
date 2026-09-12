import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Attendance Tracker", href: "#features" },
      { label: "Payroll Engine", href: "#features" },
      { label: "Leave Approvals", href: "#automation" },
      { label: "Workforce Analytics", href: "#insights" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Hybrid Teams", href: "#features" },
      { label: "High-Growth Startups", href: "#features" },
      { label: "Multi-Branch Retail", href: "#features" },
      { label: "Shift Scheduling", href: "#automation" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Compliance Guide", href: "#" },
      { label: "Payslip Generator", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Customer Stories", href: "#testimonials" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 pt-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* CTA bar */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 p-8 sm:flex-row sm:p-10 backdrop-blur-md">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready to scale your workforce?
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Start your free 14-day trial — no credit card required.
            </p>
          </div>
          <Link
            to="/register"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 shadow-lg"
          >
            Get Started
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Links grid */}
        <div className="mt-14 grid grid-cols-2 gap-10 border-b border-white/10 pb-12 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-6 w-6 rotate-45 items-center justify-center rounded-md bg-white/90">
                <span className="-rotate-45 text-sm font-bold text-indigo-600">◆</span>
              </span>
              <span className="text-lg font-semibold tracking-tight">StaffSync CRM</span>
            </div>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-slate-400">
              The all-in-one workforce CRM to automate attendance, payroll, and employee operations.
            </p>
          </div>

          {columns.map(({ title, links }) => (
            <div key={title}>
              <p className="text-sm font-semibold text-white">{title}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} StaffSync CRM Systems, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Built for high-performance workforce teams</span>
          </div>
        </div>
      </div>
    </footer>
  );
}