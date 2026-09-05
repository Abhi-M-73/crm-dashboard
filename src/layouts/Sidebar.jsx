import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChevronDown, Menu, X } from "lucide-react";

import { adminRoutes, userRoutes } from "../routes/routes";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  const [openMenus, setOpenMenus] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const routes =
    user?.role === "admin"
      ? adminRoutes
      : userRoutes;

  const sidebarRoutes = routes.filter(
    (route) => route.isSidebar
  );

  const toggleMenu = (path) => {
    setOpenMenus((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const isOptionActive = (options = []) => {
    return options.some(
      (option) => location.pathname === option.path
    );
  };

  // close mobile sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const initials = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "U";

  return (
    <>
      {/* Mobile toggle button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed left-4 top-4 z-50 rounded-lg bg-bg p-2 text-text shadow-md ring-1 ring-text/10 lg:hidden"
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 min-h-screen bg-bg text-text
          transform transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col items-center px-4 pt-5 pb-2">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt={user?.username || "User"}
              className="h-16 w-16 rounded-full object-cover ring-2 ring-primary/40"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-lg font-semibold text-primary ring-2 ring-primary/40">
              {initials}
            </div>
          )}

          <p className="mt-2.5 text-sm font-semibold text-text">
            {user?.username || "Guest User"}
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-1 overflow-y-auto p-4" style={{ maxHeight: "calc(100vh - 200px)" }}>

          {sidebarRoutes.map((route) => {
            const Icon = route.icon;

            const hasOptions =
              route.options &&
              route.options.length > 0;

            const optionActive = isOptionActive(
              route.options
            );

            const menuOpen =
              openMenus[route.path] ||
              optionActive;

            return (
              <div key={route.path}>

                {/* Main Menu */}
                {hasOptions ? (
                  <button
                    type="button"
                    onClick={() =>
                      toggleMenu(route.path)
                    }
                    className={`
                      flex w-full items-center justify-between
                      rounded-xl px-4 py-3
                      text-sm font-medium
                      transition-all

                      ${
                        optionActive
                          ? "bg-primary/10 text-primary"
                          : "text-text/70 hover:bg-primary/10 hover:text-text"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      {Icon && <Icon size={19} />}

                      <span>{route.label}</span>
                    </div>

                    <ChevronDown
                      size={17}
                      className={`
                        transition-transform duration-200
                        ${menuOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>
                ) : (
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-3
                      rounded-xl px-4 py-3
                      text-sm font-medium
                      transition-all

                      ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-text/70 hover:bg-primary/10 hover:text-text"
                      }
                      `
                    }
                  >
                    {Icon && <Icon size={19} />}

                    <span>{route.label}</span>
                  </NavLink>
                )}

                {/* Options */}
                {hasOptions && menuOpen && (
                  <div className="ml-5 mt-1 space-y-1 border-l border-text/10 pl-3">

                    {route.options.map((option) => (
                      <NavLink
                        key={option.path}
                        to={option.path}
                        className={({ isActive }) =>
                          `
                          block rounded-lg px-3 py-2
                          text-sm
                          transition-all

                          ${
                            isActive
                              ? "bg-primary text-white"
                              : "text-text/60 hover:bg-primary/10 hover:text-text"
                          }
                          `
                        }
                      >
                        {option.label}
                      </NavLink>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;