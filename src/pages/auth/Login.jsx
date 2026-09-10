import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import bgImage from "../../assets/auth/authBg.webp";
import {
  Mail,
  Lock,
  ArrowLeft,
  ArrowRight,
  Globe,
  ChevronDown,
  Sparkles,
//   Facebook,
//   Twitter,
//   Linkedin,
//   Instagram,
} from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "abhi@gmail.com",
    password: "123",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;

    const user = {
      email: formData.email,
      username: "abhi",
      role: "user",
    };

    const token = "dummy-token";

    dispatch(
      login({
        user,
        token,
      })
    );

    navigate("/user/dashboard");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F4EFEA] p-4 sm:p-6 lg:p-10 font-sans antialiased text-stone-800">
      
      {/* Outer Card with layered background */}
      <div className="relative flex w-full max-w-[1180px] overflow-hidden rounded-[40px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.07)] border border-stone-200/80 min-h-[640px] p-3">
        
        {/* ================= LEFT ASYMMETRICAL CURVED PANEL ================= */}
        <div 
          className="relative hidden lg:flex w-[55%] flex-col justify-between p-8 text-white z-10 rounded-[40px] overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 96% 0, 89% 100%, 0 100%)",
            backgroundImage: `url(https://i.pinimg.com/736x/52/8e/5a/528e5a559c0645f8e09441dc3a251962.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay gradient matching image */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-[#091410] via-[#091410]/45 to-[#091410]/80" /> */}

          {/* Left Top Brand Navigation */}
          <div className="relative z-10 flex items-center justify-between pr-8">
            <div className="flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-stone-200">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              CRM
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-stone-300 font-medium cursor-pointer hover:text-white transition">
                Selected Works
              </span>
              <Link
                to="/register"
                className="rounded-full border border-white/25 px-4 py-1 text-sm font-medium backdrop-blur-md transition hover:bg-white/10"
              >
                Join Us
              </Link>
            </div>
          </div>

          {/* Left Mid Decorative Quote */}
          {/* <div className="relative z-10 my-auto py-10 max-w-xs space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#EA580C] mb-4">
              <Sparkles size={20} />
            </div>
            <h3 className="text-2xl font-extrabold tracking-tight leading-snug">
              Smart Workspace for High-Performing Teams.
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed">
              Track attendance, sprint workloads, and daily project milestones effortlessly.
            </p>
          </div> */}

          {/* Left Bottom Profile Preview */}
          <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-4 pr-14">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                alt="Claire"
                className="h-10 w-10 rounded-full border-2 border-white/40 object-cover shadow-sm"
              />
              <div>
                <p className="text-sm font-bold leading-none text-white">Claire Horington</p>
                <span className="text-[11px] text-stone-300">Lead Design Pod</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/20"
                aria-label="Previous Slide"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:bg-white/20"
                aria-label="Next Slide"
              >
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= RIGHT FORM PANEL ================= */}
        {/* lg:-ml-12 se right content left curve ke side naturally settle ho jata hai */}
        <div className="relative flex flex-1 flex-col justify-between p-6 sm:p-10 lg:p-12 lg:-ml-12 z-20">
          
          {/* Top Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--secondary)] text-white shadow-sm">
                <span className="text-sm font-bold leading-none">✤</span>
              </div>
              <span className="text-base font-bold tracking-tight text-stone-900">
                RelationX
              </span>
            </div>
          </div>

          {/* Form Content */}
          <div className="mx-auto w-full max-w-[360px] py-6">
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-black tracking-tight text-stone-900">
                Hi Designer
              </h2>
              <p className="mt-1 text-sm font-medium text-stone-400">
                Welcome to RelationX Workspace
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-3.5">
              {/* Email */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                  <Mail size={16} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full rounded-2xl border border-stone-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-stone-800 placeholder-stone-400 shadow-sm transition focus:border-[#EA580C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]/10"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400">
                  <Lock size={16} />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                  className="w-full rounded-2xl border border-stone-200 bg-white py-3 pl-10 pr-4 text-sm font-medium text-stone-800 placeholder-stone-400 shadow-sm transition focus:border-[#EA580C] focus:outline-none focus:ring-2 focus:ring-[#EA580C]/10"
                />
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end pt-0.5">
                <Link
                  to="/forgot-password"
                  className="text-[11px] font-semibold text-stone-400 transition hover:text-[var(--primary)] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Divider */}
              <div className="relative flex items-center py-1">
                <div className="flex-grow border-t border-stone-200" />
                <span className="mx-3 text-[11px] font-semibold text-stone-300">or</span>
                <div className="flex-grow border-t border-stone-200" />
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white py-2.5 text-sm font-bold text-stone-700 shadow-sm transition hover:bg-stone-50"
              >
                <span>Login with Google</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </button>

              {/* Login Button */}
              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-[var(--primary)] py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--primary)]/80 active:scale-[0.99]"
              >
                Login
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-stone-400">
              Don't have an account?{" "}
              <Link to="/register" className="font-bold text-[var(--primary)] hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* Social Footer */}
          <div className="flex items-center justify-center gap-4 text-stone-400 pt-2">
            {/* <a href="#facebook" className="transition hover:text-stone-700" aria-label="Facebook">
              <Facebook size={16} />
            </a>
            <a href="#twitter" className="transition hover:text-stone-700" aria-label="Twitter">
              <Twitter size={16} />
            </a>
            <a href="#linkedin" className="transition hover:text-stone-700" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#instagram" className="transition hover:text-stone-700" aria-label="Instagram">
              <Instagram size={16} />
            </a> */}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;