import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  LogOut,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import { logout } from "../redux/slices/authSlice";
import { adminRoutes, userRoutes } from "../routes/routes";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  // Admin / User routes dynamically select honge
  const isAdmin = location.pathname.startsWith("/admin");
  const currentRoutes = isAdmin ? adminRoutes : userRoutes;

  // Sirf sidebar wale routes
  const sidebarRoutes = currentRoutes.filter(
    (route) => route.isSidebar === true
  );

  // Overview
  const overviewMenu = sidebarRoutes.filter(
    (item) => (item.section || "Overview").toLowerCase() === "overview"
  );

  // Business
  const businessMenu = sidebarRoutes.filter(
    (item) => (item.section || "Overview").toLowerCase() === "business"
  );

  // Check nested route active hai ya nahi
  const hasActiveOption = (item) => {
    return item.options?.some((option) =>
      location.pathname.startsWith(option.path)
    );
  };

  const renderNavGroup = (items) => (
    <ul className="space-y-2">
      {items.map((item) => {
        const Icon = item.icon;
        const nestedActive = hasActiveOption(item);

        return (
          <li key={item.path} className="relative">
            <NavLink
              to={item.path}
              title={!sidebarOpen ? item.label : undefined}
              onClick={() => {
                // Mobile par route click hone ke baad sidebar close
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
              className={({ isActive }) => `
                group relative flex items-center py-2.5 text-[13px]
                font-medium transition-all duration-200 rounded-2xl
                ${sidebarOpen
                  ? "px-4 gap-3.5"
                  : "justify-center px-0"
                }
                ${isActive || nestedActive
                  ? "text-[#F97316] font-semibold bg-orange-50/60"
                  : "text-stone-600 hover:text-stone-900 hover:bg-stone-100/60"
                }
              `}
            >
              {({ isActive }) => (
                <>
                  {(isActive || nestedActive) && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 bg-[#F97316] rounded-r-full shadow-sm" />
                  )}

                  <Icon
                    size={20}
                    strokeWidth={
                      isActive || nestedActive ? 2.2 : 1.8
                    }
                    className={`
                      transition-transform duration-150 shrink-0
                      ${isActive || nestedActive
                        ? "text-[#F97316]"
                        : "text-stone-700 group-hover:text-stone-950"
                      }
                    `}
                  />

                  {sidebarOpen && (
                    <span className="tracking-tight truncate flex-1">
                      {item.label}
                    </span>
                  )}

                  {/* Nested route indicator */}
                  {sidebarOpen && item.options?.length > 0 && (
                    <ChevronDown
                      size={15}
                      className={`
                        text-stone-400 transition-transform duration-200
                        ${nestedActive
                          ? "rotate-180 text-[#F97316]"
                          : ""
                        }
                      `}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* ================= NESTED ROUTES ================= */}
            {sidebarOpen && item.options?.length > 0 && (
              <ul className="ml-3 mt-1 space-y-1 border-l border-stone-200 pl-3">
                {item.options.map((option) => {
                  console.log("Rendering option:", option); // Debugging line
                  return (
                    <li key={option.path}>
                      <NavLink
                        to={option.path}
                        onClick={() => {
                          if (window.innerWidth < 1024) {
                            setSidebarOpen(false);
                          }
                        }}
                        className={({ isActive }) => `
                          flex items-center gap-2.5 rounded-xl
                          px-3 py-2 text-[12px] transition-all
                          ${isActive
                            ? "bg-orange-50/70 text-[#F97316] font-semibold"
                            : "text-stone-500 hover:bg-stone-100/60 hover:text-stone-800"
                          }
                        `}
                      >
                        <span className="truncate">
                          {option.label}
                        </span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* ================= MOBILE BACKDROP ================= */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300 lg:hidden
          ${sidebarOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed lg:static top-0 bottom-0 left-0 z-50
          select-none transition-all duration-300 ease-in-out p-3

          ${sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
          }

          ${sidebarOpen ? "w-64" : "w-20"}
        `}
      >
        <div
          className="
            h-[calc(100vh-1.5rem)]
            sticky top-3
            bg-white/95 backdrop-blur-md
            rounded-[32px]
            border border-stone-300
            shadow-[0_4px_24px_rgba(0,0,0,0.04)]
            py-5 px-3
            flex flex-col justify-between
            overflow-hidden
          "
        >
          <div>
            {/* ================= HEADER ================= */}
            <div
              className={`
                flex items-center mb-6 pb-2
                border-b border-stone-100
                ${sidebarOpen
                  ? "justify-between px-2"
                  : "justify-center"
                }
              `}
            >
              {sidebarOpen && (
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Menu
                </span>
              )}

              {/* Mobile Close */}
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="
                  lg:hidden p-2 text-stone-500
                  hover:text-stone-800
                  hover:bg-stone-100
                  rounded-full transition
                "
                aria-label="Close sidebar"
              >
                <X size={18} />
              </button>

              {/* Desktop Collapse / Expand */}
              <button
                type="button"
                onClick={() =>
                  setSidebarOpen(!sidebarOpen)
                }
                className="
                  hidden lg:flex p-1.5
                  text-stone-500
                  hover:text-stone-800
                  hover:bg-stone-100
                  rounded-full transition
                "
                aria-label={
                  sidebarOpen
                    ? "Collapse sidebar"
                    : "Expand sidebar"
                }
              >
                {sidebarOpen ? (
                  <ChevronLeft size={18} />
                ) : (
                  <ChevronRight size={18} />
                )}
              </button>
            </div>

            {/* ================= NAVIGATION ================= */}
            <div
              className="
                space-y-6 overflow-y-auto no-scrollbar
                max-h-[calc(100vh-220px)]
              "
            >
              {/* ================= OVERVIEW ================= */}
              {overviewMenu.length > 0 && (
                <div>
                  {sidebarOpen && (
                    <h4
                      className="
                        px-3 text-[11px] font-bold
                        uppercase tracking-wider
                        text-stone-400 mb-2.5
                      "
                    >
                      Overview
                    </h4>
                  )}

                  {renderNavGroup(overviewMenu)}
                </div>
              )}

              {/* ================= BUSINESS ================= */}
              {businessMenu.length > 0 && (
                <div>
                  {sidebarOpen && (
                    <h4
                      className="
                        px-3 text-[11px] font-bold
                        uppercase tracking-wider
                        text-stone-400 mb-2.5
                      "
                    >
                      Business
                    </h4>
                  )}

                  {renderNavGroup(businessMenu)}
                </div>
              )}
            </div>
          </div>

          {/* ================= LOGOUT ================= */}
          <div className="space-y-2 pt-3 border-t border-stone-100">
            <button
              type="button"
              onClick={handleLogout}
              title={!sidebarOpen ? "Log Out" : undefined}
              className={`
                w-full flex items-center py-2.5
                text-[13px] font-semibold
                text-[#F97316]
                hover:bg-orange-50/70
                rounded-2xl transition-colors

                ${sidebarOpen
                  ? "px-4 gap-3.5"
                  : "justify-center px-0"
                }
              `}
            >
              <LogOut
                size={20}
                strokeWidth={2}
                className="shrink-0"
              />

              {sidebarOpen && (
                <span className="tracking-tight truncate">
                  Log Out
                </span>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;