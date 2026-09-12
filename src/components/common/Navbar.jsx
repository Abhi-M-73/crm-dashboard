import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Users2, ArrowRight, Menu, X, ShieldCheck } from "lucide-react";

const LandingNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Workflows", href: "#workflows" },
    { label: "HR Analytics", href: "#analytics" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-sm border-b border-stone-200/80"
          : "bg-white/60 backdrop-blur-md border-b border-stone-100"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#194E3A] via-[#1E5642] to-[#2E7D5B] text-white shadow-md shadow-[#1E5642]/20 transition-transform duration-300 group-hover:scale-105">
            <Users2 size={20} className="text-emerald-200" />
          </div>

          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-stone-900 flex items-center gap-1">
              Staff<span className="text-[#EA580C]">Sync</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-emerald-50 text-[#194E3A] border border-emerald-200/60 ml-1">
                CRM
              </span>
            </span>
            <span className="text-[10px] font-medium text-stone-600 -mt-0.5">
              Workforce & HR Operating System
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-stone-700 transition hover:text-[#194E3A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 sm:flex">
          <Link
            to="/login"
            className="rounded-full px-5 py-2 text-sm font-semibold text-stone-800 transition hover:text-stone-900 hover:bg-stone-100"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#194E3A] to-[#1E5642] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#194E3A]/20 transition-all hover:shadow-lg hover:shadow-[#194E3A]/30 hover:-translate-y-0.5"
          >
            <span>Start Free Trial</span>
            <ArrowRight
              size={15}
              className="text-emerald-300 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-stone-600 hover:bg-stone-100 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-stone-200 bg-white px-6 py-5 shadow-lg md:hidden animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-stone-700 hover:text-[#194E3A]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl border border-stone-200 text-sm font-semibold text-stone-800"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-[#194E3A] text-sm font-semibold text-white shadow"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default LandingNavbar;