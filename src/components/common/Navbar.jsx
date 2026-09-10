import { Sparkles } from "lucide-react";
import { Link} from "react-router-dom";

const LandingNavbar = () => {

  return (
      <header className="relative z-50">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5B4BDB] text-white shadow-lg shadow-violet-200">
              <Sparkles size={18} fill="currentColor" />
            </div>

            <span className="text-xl font-bold tracking-tight text-slate-900">
              SaaSify
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Features
            </a>

            <a
              href="#solutions"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Solutions
            </a>

            <a
              href="#pricing"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Pricing
            </a>

            <a
              href="#resources"
              className="text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              Resources
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/login"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white/70 sm:block"
            >
              Log in
            </Link>

            <Link
              to="/register"
              className="rounded-full bg-[#6555E8] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-[#5747d5]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
  );
};

export default LandingNavbar;