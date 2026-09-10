import {
  // Twitter,
  // Linkedin,
  // Github,
  // Instagram,
  ArrowRight,
} from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Integrations", "Pricing", "Changelog"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "API Reference", "Community"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security", "Cookies"],
  },
];

const socials = [
  // { icon: Twitter, label: "Twitter" },
  // { icon: Linkedin, label: "LinkedIn" },
  // { icon: Github, label: "GitHub" },
  // { icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 px-6 pt-16 sm:px-10">
      <div className="mx-auto max-w-6xl">
        {/* CTA bar */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 p-8 sm:flex-row sm:p-10">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Ready to grow faster?
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Start your free 14-day trial — no credit card required.
            </p>
          </div>
          <a
            href="#signup"
            className="group flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Get Started
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Links grid */}
        <div className="mt-14 grid grid-cols-2 gap-10 border-b border-white/10 pb-12 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-6 w-6 rotate-45 items-center justify-center rounded-md bg-white/90">
                <span className="-rotate-45 text-sm font-bold text-indigo-600">◆</span>
              </span>
              <span className="text-lg font-semibold tracking-tight">SaaSipv</span>
            </div>
            <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-slate-400">
              The all-in-one platform to automate your workflow and grow
              faster.
            </p>
          </div>

          {columns.map(({ title, links }) => (
            <div key={title}>
              <p className="text-sm font-semibold text-white">{title}</p>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition hover:text-white"
                    >
                      {link}
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
            © {new Date().getFullYear()} SaaSipv. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-white/30 hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}