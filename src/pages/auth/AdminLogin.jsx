import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import {
  Mail,
  Lock,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "admin@gmail.com",
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

    // Temporary data for testing
    const user = {
      email: formData.email,
      username: "Admin",
      role: "admin",
    };

    const token = "admin-token";

    dispatch(
      login({
        user,
        token,
      })
    );

    navigate("/admin/dashboard", { replace: true });
  };

  return (
    <div
    style={{
      backgroundImage: `url(https://i.pinimg.com/1200x/7f/33/8d/7f338d1f224ee0d2d956aaa009db5aba.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
     className="flex min-h-screen w-full items-center justify-center bg-[#F4EFEA] p-4 sm:p-6 font-sans antialiased text-stone-800">
      <div className="relative flex w-full max-w-5xl overflow-hidden rounded-[40px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.07)] border border-stone-200/80 min-h-[600px] p-3">
        
        {/* ================= LEFT ASYMMETRICAL CURVED PANEL ================= */}
        <div 
          className="relative hidden lg:flex w-[60%] flex-col justify-between p-8 text-white z-10 rounded-[40px] overflow-hidden"
          style={{
            clipPath: "polygon(0 0, 96% 0, 89% 100%, 0 100%)",
            backgroundImage: `url(https://i.pinimg.com/1200x/d8/a2/a5/d8a2a5af56394b9860cd13ac17fa7d59.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >

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
                Hello, Admin
              </h2>
              <p className="mt-1 text-sm font-medium text-stone-400">
                Welcome to RelationX Workspace
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-3.5">
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

              <div className="flex justify-end pt-0.5">
                <Link
                  to="/forgot-password"
                  className="text-[11px] font-semibold text-stone-400 transition hover:text-[var(--primary)] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              
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
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;