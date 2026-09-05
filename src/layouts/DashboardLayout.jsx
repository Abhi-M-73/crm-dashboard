import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="flex h-screen overflow-hidden bg-bg text-text">
      {/* Sidebar fixed — apni height khud manage karega */}
      <div className="h-screen shrink-0 overflow-y-auto">
        <Sidebar role={user?.role} />
      </div>

      {/* Right side scrolls as one unit — header + content together */}
      <div className="flex-1 overflow-y-auto">
        <DashboardHeader role={user?.role} />

        <main className="p-4 sm:p-6">
          <div className="relative">
            <div className="absolute left-4 right-4 top-8 bottom-[-20px] rounded-[24px] bg-[#6f745d] dark:bg-[#536831] z-0 shadow-[0_12px_25px_rgba(0,0,0,0.15)]" />
            <div className="absolute left-2 right-2 top-4 bottom-[-10px] rounded-[24px] bg-[#90977b] dark:bg-[#2d381d] z-1 shadow-[0_10px_20px_rgba(0,0,0,0.15)]" />
            <div className="relative z-10 min-h-[calc(100vh-140px)] rounded-[24px] bg-black p-4 sm:p-6 border border-text/20">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;