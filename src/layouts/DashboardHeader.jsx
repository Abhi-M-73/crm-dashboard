import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Search,
  Bell,
  Settings,
  User,
  Calendar,
  ChevronDown,
} from "lucide-react";
import { logout } from "../redux/slices/authSlice";

const DashboardHeader = ({ sidebarOpen, setSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const profileRef = useRef(null);
  const profileButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    right: 0,
  });

  // =========================
  // PROFILE DROPDOWN POSITION
  // =========================
  const updateDropdownPosition = () => {
    if (!profileButtonRef.current) return;

    const rect = profileButtonRef.current.getBoundingClientRect();

    setDropdownPosition({
      top: rect.bottom + 8,
      right: window.innerWidth - rect.right,
    });
  };

  // =========================
  // OPEN PROFILE
  // =========================
  const handleProfileToggle = () => {
    setProfileOpen((prev) => {
      const next = !prev;

      if (next) {
        requestAnimationFrame(() => {
          updateDropdownPosition();
        });
      }

      return next;
    });
  };

  // =========================
  // CLOSE ON OUTSIDE CLICK
  // =========================
  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedButton = profileButtonRef.current?.contains(e.target);
      const clickedDropdown = dropdownRef.current?.contains(e.target);

      if (!clickedButton && !clickedDropdown) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // =========================
  // UPDATE POSITION ON SCROLL
  // =========================
  useEffect(() => {
    if (!profileOpen) return;

    const handlePositionUpdate = () => {
      updateDropdownPosition();
    };

    window.addEventListener("scroll", handlePositionUpdate, true);
    window.addEventListener("resize", handlePositionUpdate);

    return () => {
      window.removeEventListener("scroll", handlePositionUpdate, true);
      window.removeEventListener("resize", handlePositionUpdate);
    };
  }, [profileOpen]);

  // =========================
  // LOGOUT
  // =========================
  const handleLogout = () => {
    setProfileOpen(false);
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  // =========================
  // INITIALS
  // =========================
  const initials = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "U";

  // =========================
  // DATE
  // =========================
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // =========================
  // PROFILE DROPDOWN
  // =========================
  const profileDropdown =
    profileOpen &&
    createPortal(
      <div
        ref={dropdownRef}
        style={{
          position: "fixed",
          top: `${dropdownPosition.top}px`,
          right: `${dropdownPosition.right}px`,
        }}
        className="z-[999999] w-52 overflow-hidden rounded-2xl border border-stone-200 bg-white p-1.5 shadow-sm"
      >
        {/* USER INFO */}
        <div className="border-b border-stone-100 px-3 py-2">
          <p className="truncate text-xs font-bold text-stone-800">
            {user?.username || "Claire Horington"}
          </p>

          <p className="truncate text-[10px] text-stone-400">
            {user?.email || "store.admin@relationx.com"}
          </p>
        </div>

        {/* PROFILE */}
        <button
          type="button"
          onClick={() => {
            setProfileOpen(false);
            navigate("/profile");
          }}
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-50"
        >
          <User size={14} />
          My Profile
        </button>

        {/* SETTINGS */}
        <button
          type="button"
          onClick={() => {
            setProfileOpen(false);
            navigate("/settings");
          }}
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-stone-50"
        >
          <Settings size={14} />
          Settings
        </button>

        <div className="my-1 h-px bg-stone-100" />

        {/* LOGOUT */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
        >
          <LogOut size={14} />
          Log Out
        </button>
      </div>,
      document.body
    );

  return (
    <>
      <header className="w-full pt-3">
        <div className="mx-auto flex h-16 w-full items-center justify-between gap-3 rounded-full border border-text/20 bg-white/80 px-4 shadow-sm backdrop-blur-md sm:px-6">
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex cursor-pointer items-center gap-3"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E5642] text-white shadow-sm">
              <span className="text-base font-bold leading-none">✤</span>
            </div>

            <span className="text-xl font-bold tracking-tight text-stone-800">
              RelationX
            </span>
          </div>

          {/* RIGHT ACTION ITEMS */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full bg-[#F3EFEA] px-3.5 py-1.5 text-xs font-semibold text-stone-700 transition hover:bg-stone-200/70 sm:flex">
              <Calendar size={14} className="text-stone-500" />
              <span>{formattedDate}</span>
              <ChevronDown size={13} className="text-stone-400" />
            </div>

            <div className="relative flex items-center">
              {searchOpen ? (
                <div className="flex items-center gap-2 rounded-full bg-[#F3EFEA] px-3 py-1 text-xs">
                  <Search size={14} className="text-stone-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    autoFocus
                    onBlur={() => setSearchOpen(false)}
                    className="w-28 bg-transparent text-xs text-stone-800 outline-none placeholder:text-stone-400 sm:w-44"
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EFEA] text-stone-600 transition hover:bg-stone-200"
                  aria-label="Open search"
                >
                  <Search size={15} />
                </button>
              )}
            </div>

            {/* NOTIFICATION */}
            <div className="relative">
              <button
                type="button"
                className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#F3EFEA] text-stone-600 transition hover:bg-stone-200"
                aria-label="Notifications"
              >
                <Bell size={15} />
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#EA580C] text-[9px] font-bold text-white">
                  3
                </span>
              </button>
            </div>
            <div className="h-5 w-px bg-stone-200" />
            <div className="relative" ref={profileRef}>
              <button
                ref={profileButtonRef}
                type="button"
                onClick={handleProfileToggle}
                className="flex items-center gap-2 rounded-full p-0.5 transition hover:ring-2 hover:ring-stone-200"
              >
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user?.username || "Avatar"}
                    className="h-8 w-8 rounded-full object-cover shadow-sm"
                  />
                ) : (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E5642] text-xs font-bold text-white shadow-sm">
                    {initials}
                  </div>
                )}

                {/* USERNAME */}
                <div className="hidden text-left sm:block">
                  <p className="text-sm font-semibold leading-tight text-stone-800">
                    {user?.username || "Claire"}
                  </p>
                </div>

                {/* ARROW */}
                <ChevronDown
                  size={13}
                  className={`text-stone-400 transition-transform duration-200 ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* PORTAL DROPDOWN */}
      {profileDropdown}
    </>
  );
};

export default DashboardHeader;