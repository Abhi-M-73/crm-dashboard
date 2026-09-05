import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Moon,
  Sun,
  Search,
  Bell,
  Settings,
  User,
  ChevronDown,
} from "lucide-react";

import { logout } from "../redux/slices/authSlice";
import { toggleTheme } from "../redux/slices/themeSlice";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const theme = useSelector((state) => state.theme.theme);

  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const initials = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "U";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="bg-bg text-text">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6">
        <div className="min-w-0 pl-10 lg:pl-0">
          <h1 className="truncate text-base font-semibold text-text sm:text-lg">
            Welcome back, {user?.username || "User"} 👋
          </h1>
          <p className="hidden text-xs text-text/45 sm:block">{today}</p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-lg bg-text/[0.05] px-3 py-2 md:flex">
            <Search size={15} className="text-text/40" />
            <input
              type="text"
              placeholder="Search..."
              className="w-40 bg-transparent text-sm text-text placeholder:text-text/35 focus:outline-none lg:w-56"
            />
          </div>

          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-text/[0.05] text-text/70 transition hover:bg-text/10"
            aria-label="Notifications"
          >
            <Bell size={17} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-primary" />
          </button>

          <button
            onClick={() => dispatch(toggleTheme())}
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-text/[0.05] text-text/70 transition hover:bg-text/10"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <div className="h-6 w-px bg-text/10" />

          {/* Profile dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-lg py-1.5 pl-1.5 pr-2 transition hover:bg-text/[0.05]"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                {initials}
              </div>

              <div className="hidden text-left sm:block">
                <p className="text-sm font-medium leading-tight text-text">
                  {user?.username || "User"}
                </p>
                <p className="text-xs capitalize leading-tight text-text/50">
                  {user?.role || "user"}
                </p>
              </div>

              <ChevronDown
                size={15}
                className={`text-text/40 transition-transform ${profileOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-xl border border-text/10 bg-bg shadow-lg">
                <button className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-text/75 transition hover:bg-text/[0.06]">
                  <User size={15} />
                  My Profile
                </button>
                <button className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-text/75 transition hover:bg-text/[0.06]">
                  <Settings size={15} />
                  Settings
                </button>
                <div className="h-px bg-text/10" />
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-red-400 transition hover:bg-red-500/10"
                >
                  <LogOut size={15} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;