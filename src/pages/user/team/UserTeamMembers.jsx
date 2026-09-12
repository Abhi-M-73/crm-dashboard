import React, { useState } from "react";
import {
  Users,
  Search,
  Mail,
  MessageSquare,
  Video,
  ChevronRight,
  Filter,
  UserPlus,
  Briefcase,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink
} from "lucide-react";

const UserTeamMembers = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const teamData = [
    {
      id: "TM-01",
      name: "Jordan Lee",
      role: "Lead UI / UX Designer",
      pod: "Frontend & Design Pod",
      email: "jordan.lee@relationx.com",
      status: "online",
      currentProject: "CRM Cloud Redesign",
      activeTasks: 4,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      skills: ["Figma", "Design Systems", "Prototyping"],
      department: "design"
    },
    {
      id: "TM-02",
      name: "Marcus Vance",
      role: "Principal Backend Architect",
      pod: "Core Services Pod",
      email: "marcus.vance@relationx.com",
      status: "meeting",
      currentProject: "Payment Gateway Refactor",
      activeTasks: 6,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      skills: ["Node.js", "Express", "Microservices"],
      department: "backend"
    },
    {
      id: "TM-03",
      name: "Sophia Patel",
      role: "Senior QA Automation Engineer",
      pod: "Quality Pod",
      email: "sophia.patel@relationx.com",
      status: "offline",
      currentProject: "Fintech Mobile App V2",
      activeTasks: 3,
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&auto=format&fit=crop&q=80",
      skills: ["Cypress", "Jest", "CI/CD Pipeline"],
      department: "qa"
    },
    {
      id: "TM-04",
      name: "David Chen",
      role: "Staff Frontend Engineer",
      pod: "Frontend & Design Pod",
      email: "david.chen@relationx.com",
      status: "online",
      currentProject: "Fintech Mobile App V2",
      activeTasks: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      department: "frontend"
    },
    {
      id: "TM-05",
      name: "Elena Rostova",
      role: "DevOps & Cloud Engineer",
      pod: "Core Services Pod",
      email: "elena.r@relationx.com",
      status: "online",
      currentProject: "K8s Cluster Migration",
      activeTasks: 2,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      skills: ["Docker", "Kubernetes", "AWS"],
      department: "backend"
    },
    {
      id: "TM-06",
      name: "Liam O'Connor",
      role: "Full Stack Engineer",
      pod: "Frontend & Design Pod",
      email: "liam.o@relationx.com",
      status: "meeting",
      currentProject: "E-Commerce Checkout Revamp",
      activeTasks: 4,
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
      skills: ["Next.js", "GraphQL", "PostgreSQL"],
      department: "frontend"
    }
  ];

  const filteredMembers = teamData.filter((member) => {
    const matchesCategory = activeFilter === "all" ? true : member.department === activeFilter;
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.currentProject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP TITLE & SEARCH CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Team Colleagues & Pod
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Connect with pod teammates, check live availability, and collaborate on sprints
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative flex items-center">
            <Search size={15} className="absolute left-3.5 text-stone-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search colleague, role or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full border border-stone-200/80 bg-white py-2 pl-9 pr-4 text-xs font-medium text-stone-800 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition shadow-sm w-48 sm:w-64"
            />
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--primary-700)] transition active:scale-[0.98]"
          >
            <UserPlus size={15} />
            <span>Invite to Pod</span>
          </button>
        </div>
      </div>

      {/* 2. STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#FAF8F5] text-[var(--secondary)] flex items-center justify-center shrink-0 border border-stone-100">
            <Users size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Pod Strength</span>
            <span className="text-lg font-black text-stone-900 leading-tight">12 Members</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--secondary-50)] text-[var(--secondary-600)] flex items-center justify-center shrink-0 border border-[var(--secondary-100)]">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Online Now</span>
            <span className="text-lg font-black text-stone-900 leading-tight">07 Active</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <Video size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">In Standup / Sync</span>
            <span className="text-lg font-black text-stone-900 leading-tight">03 In Call</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0 border border-[var(--primary-100)]">
            <Sparkles size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Sprint Bandwidth</span>
            <span className="text-lg font-black text-stone-900 leading-tight">85% Loaded</span>
          </div>
        </div>
      </div>

      {/* 3. POD MANAGER BANNER */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
            alt="Devon Lane"
            className="h-12 w-12 rounded-2xl object-cover border-2 border-white shadow-sm"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-extrabold text-stone-900">Devon Lane</h3>
              <span className="rounded-full bg-[color-mix(in_srgb,var(--secondary)_10%,transparent)] text-[var(--secondary)] px-2.5 py-0.5 text-[10px] font-bold">
                Reporting Manager
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              VP of Product Engineering &bull; Office Hours: 03:00 PM – 04:30 PM PST
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <a
            href="mailto:devon.lane@relationx.com"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-stone-200/70 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition"
          >
            <Mail size={13} />
            <span>Email</span>
          </a>
          <button
            type="button"
            className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF8F5] border border-stone-200/70 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition"
          >
            <Video size={13} />
            <span>1:1 Sync</span>
          </button>
        </div>
      </div>

      {/* 4. FILTER TABS */}
      <div className="flex items-center gap-2 border-b border-stone-200/70 pb-2 text-xs font-bold">
        {[
          { id: "all", label: "All Colleagues" },
          { id: "frontend", label: "Frontend" },
          { id: "backend", label: "Backend" },
          { id: "design", label: "Design & UX" },
          { id: "qa", label: "QA & Testing" },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveFilter(tab.id)}
            className={`rounded-full px-4 py-1.5 transition-all ${
              activeFilter === tab.id
                ? "bg-[var(--secondary)] text-white shadow-sm"
                : "text-stone-500 hover:text-stone-900 hover:bg-stone-200/50"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 5. TEAM MEMBERS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMembers.map((member) => {
          let statusBadge = {
            label: "Online",
            dot: "bg-[var(--secondary-500)]",
            bg: "bg-[var(--secondary-50)] text-[var(--secondary-700)] border-[var(--secondary-100)]"
          };

          if (member.status === "meeting") {
            statusBadge = {
              label: "In Meeting",
              dot: "bg-amber-500",
              bg: "bg-amber-50 text-amber-700 border-amber-100"
            };
          } else if (member.status === "offline") {
            statusBadge = {
              label: "Offline",
              dot: "bg-stone-300",
              bg: "bg-stone-100 text-stone-400 border-stone-200"
            };
          }

          return (
            <div
              key={member.id}
              className="rounded-[32px] border border-stone-200/70 bg-white p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
            >
              <div>
                {/* Member Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-12 w-12 rounded-2xl object-cover border border-stone-100 shadow-2xs"
                      />
                      <span
                        className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${statusBadge.dot}`}
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-extrabold text-stone-900 group-hover:text-[var(--primary)] transition">
                        {member.name}
                      </h4>
                      <p className="text-[11px] font-semibold text-stone-400">{member.role}</p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${statusBadge.bg}`}
                  >
                    {statusBadge.label}
                  </span>
                </div>

                {/* Current Project & Tasks Strip */}
                <div className="mt-4 p-3 rounded-2xl bg-[#FAF8F5] border border-stone-100/80 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-stone-500">
                    <span className="text-[10px] font-semibold text-stone-400">Current Focus</span>
                    <span className="text-[10px] font-bold text-[var(--primary)]">{member.activeTasks} Active Tasks</span>
                  </div>
                  <p className="font-bold text-stone-800 text-xs truncate">
                    {member.currentProject}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg bg-stone-50 border border-stone-200/60 px-2 py-0.5 text-[10px] font-semibold text-stone-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${member.email}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-stone-50 hover:bg-stone-100 text-stone-700 text-xs font-semibold border border-stone-200/60 transition"
                  title="Send Email"
                >
                  <Mail size={13} />
                  <span>Email</span>
                </a>

                <button
                  type="button"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[var(--primary)] hover:bg-[var(--primary-700)] text-white text-xs font-semibold shadow-2xs transition"
                  title="Ping on Slack / Chat"
                >
                  <MessageSquare size={13} />
                  <span>Message</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default UserTeamMembers;