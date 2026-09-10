import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import { useState } from "react";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = JSON.parse(sessionStorage.getItem("user"));

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-text p-2">
      <div className="h-screen shrink-0 overflow-y-auto">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className={`sticky top-0 ${sidebarOpen ? "z-0 md:z-50" : "z-30"} bg-gray-50`}>
          <DashboardHeader
            role={user?.role}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
        <main className="pt-2">
          <div className="relative">
            <div className="absolute left-4 right-4 top-8 bottom-[-20px] rounded-[24px] bg-[#003421] z-0 shadow-[0_12px_25px_rgba(0,0,0,0.15)]" />
            <div className="absolute left-2 right-2 top-4 bottom-[-10px] rounded-[24px] bg-[#f95b1c] z-1 shadow-[0_10px_20px_rgba(0,0,0,0.15)]" />
            <div className="relative z-10 min-h-[calc(100vh-140px)] rounded-[24px] bg-[#fff] overflow-hidden border border-stone-300">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;