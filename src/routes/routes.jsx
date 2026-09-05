import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import UserDashboard from "../pages/user/UserDashboard";
import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/Users";

import LandingPage from "../pages/LandingPage";

import {
  LayoutDashboard,
  User,
  Settings as SettingsIcon,
  Users as UsersIcon,
} from "lucide-react";
import AdminLogin from "../pages/auth/AdminLogin";

export const publicRoutes = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/admin/login",
    component: AdminLogin,
  }
];

export const userRoutes = [
  {
    path: "/user/dashboard",
    component: UserDashboard,
    isSidebar: true,
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/user/profile",
    component: Profile,
    isSidebar: true,
    label: "Profile",
    icon: User,
  },
  {
    path: "/user/settings",
    component: Settings,
    isSidebar: true,
    label: "Settings",
    icon: SettingsIcon,
    // options: [
    //   {
    //     label: "Option 1",
    //     path: "/user/settings/option1",
    //   },
    //   {
    //     label: "Option 2",
    //     path: "/user/settings/option2",
    //   },
    // ],
  },
];

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: AdminDashboard,
    isSidebar: true,
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    path: "/admin/users",
    component: Users,
    isSidebar: true,
    label: "Users",
    icon: UsersIcon,
  },
];