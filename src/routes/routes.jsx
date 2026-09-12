import {
  LayoutDashboard,
  Settings as SettingsIcon,
  Users as UsersIcon,
  FolderGit2,
  FingerprintPattern,
  ClipboardCheck,
  HandCoins,
  PhoneCall,
  Clock,
  CalendarDays,
  Wallet,
  FileText,
} from "lucide-react";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminLogin from "../pages/auth/AdminLogin";

import LandingPage from "../pages/LandingPage";

import UserDashboard from "../pages/user/UserDashboard";
import UserProjects from "../pages/user/UserProjects";
import UserDailyAttendance from "../pages/user/attendance/UserDailyAttendance";
import UserMonthlyAttendance from "../pages/user/attendance/UserMonthlyAttendance";
import UserTeamAttendance from "../pages/user/team/UserTeamAttendance";
import UserTeamMembers from "../pages/user/team/UserTeamMembers";
import UserTeamLeaves from "../pages/user/team/UserTeamLeaves";
import UserTeamPerformance from "../pages/user/team/UserTeamPerformance";
import UserTasks from "../pages/user/UserTasks";
import UserPaySlip from "../pages/user/payroll/UserPaySlip";
import UserSalaryDetails from "../pages/user/payroll/UserSalaryDetails";
import UserMyDocuments from "../pages/user/documents/UserMyDocuments";
import UserCompanyPolicies from "../pages/user/documents/UserCompanyPolicies";
import UserProfileSettings from "../pages/user/settings/UserProfileSettings";
import UserPasswordSettings from "../pages/user/settings/UserPasswordSettings";
import UserNotificationSettings from "../pages/user/settings/UserNotificationSettings";

import AdminDashboard from "../pages/admin/AdminDashboard";
import Users from "../pages/admin/Users";
import AdminAttendance from "../pages/admin/AdminAttendance";
import AdminLeaves from "../pages/admin/AdminLeaves";
import AdminPayroll from "../pages/admin/AdminPayroll";
import AdminProjects from "../pages/admin/AdminProjects";
import AdminDocuments from "../pages/admin/AdminDocuments";
import AdminSettings from "../pages/admin/AdminSettings";
import UserContacts from "../pages/user/UserContacts";

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
    section: "Overview",
  },
  {
    isSidebar: true,
    label: "Attendance",
    icon: FingerprintPattern,
    section: "Overview",
    options: [
      {
        path: "/user/daily-attendance",
        component: UserDailyAttendance,
        label: "Daily Attendance",
      },
      {
        path: "/user/monthly-attendance",
        component: UserMonthlyAttendance,
        label: "Monthly Attendance",
      },
    ]
  },
  {
    isSidebar: true,
    label: "Teams",
    icon: UsersIcon,
    section: "Overview",
    options: [
      {
        path: "/user/team-members",
        component: UserTeamMembers,
        label: "Teams Members",
      },
      {
        path: "/user/team-attendance",
        component: UserTeamAttendance,
        label: "Teams Attendance",
      },
      {
        path: "/user/team-leaves",
        component: UserTeamLeaves,
        label: "Teams Leaves",
      },
      {
        path: "/user/team-performance",
        component: UserTeamPerformance,
        label: "Teams Performance",
      }
    ],
  },
  {
    path: "/user/projects",
    component: UserProjects,
    isSidebar: true,
    label: "Projects",
    icon: FolderGit2,
    section: "Overview",
  },
  {
    path: "/user/tasks",
    component: UserTasks,
    isSidebar: true,
    label: "Tasks",
    icon: ClipboardCheck,
    section: "Overview",
  },
  {
    isSidebar: true,
    label: "Payroll",
    icon: HandCoins,
    section: "Overview",
    options: [
      {
        path: "/user/salary-details",
        component: UserSalaryDetails,
        label: "Salary Details",
      },
      {
        path: "/user/pay-slips",
        component: UserPaySlip,
        label: "Pay Slips",
      },
    ],
  },
  {
    isSidebar: true,
    label: "Documents",
    icon: ClipboardCheck,
    section: "Overview",
    options: [
      {
        path: "/user/my-documents",
        component: UserMyDocuments,
        label: "My Documents",
      },
      {
        path: "/user/company-policies",
        component: UserCompanyPolicies,
        label: "Company Policies",
      },
    ],
  },
  {
    path: "/user/contacts",
    component: UserContacts,
    isSidebar: true,
    label: "Contacts",
    icon: PhoneCall,
    section: "Overview",
  },
  {
    isSidebar: true,
    label: "Settings",
    icon: SettingsIcon,
    section: "Settings",
    options: [
      {
        path: "/user/profile-settings",
        component: UserProfileSettings,
        label: "Profile Settings",
      },
      {
        path: "/user/password-settings",
        component: UserPasswordSettings,
        label: "Password & Security",
      },
      {
        path: "/user/notification-settings",
        component: UserNotificationSettings,
        label: "Notification Settings",
      },
    ]
  },
];

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: AdminDashboard,
    isSidebar: true,
    label: "Dashboard",
    icon: LayoutDashboard,
    section: "Overview",
  },
  {
    path: "/admin/users",
    component: Users,
    isSidebar: true,
    label: "Employees",
    icon: UsersIcon,
    section: "Overview",
  },
  {
    path: "/admin/attendance",
    component: AdminAttendance,
    isSidebar: true,
    label: "Attendance",
    icon: Clock,
    section: "Overview",
  },
  {
    path: "/admin/leaves",
    component: AdminLeaves,
    isSidebar: true,
    label: "Leaves",
    icon: CalendarDays,
    section: "Overview",
  },
  {
    path: "/admin/projects",
    component: AdminProjects,
    isSidebar: true,
    label: "Projects",
    icon: FolderGit2,
    section: "Overview",
  },
  {
    path: "/admin/payroll",
    component: AdminPayroll,
    isSidebar: true,
    label: "Payroll",
    icon: Wallet,
    section: "Overview",
  },
  {
    path: "/admin/documents",
    component: AdminDocuments,
    isSidebar: true,
    label: "Documents",
    icon: FileText,
    section: "Overview",
  },
  {
    path: "/admin/settings",
    component: AdminSettings,
    isSidebar: true,
    label: "Settings",
    icon: SettingsIcon,
    section: "Settings",
  },
];