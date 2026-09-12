import React, { useState } from "react";
import {
  FolderGit2,
  Search,
  Plus,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  MoreHorizontal,
  ChevronRight,
  Filter,
  Users,
  GitPullRequest,
  CheckSquare
} from "lucide-react";

const UserProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const projectsData = [
    {
      id: "PRJ-101",
      name: "Fintech Mobile App V2",
      client: "Novo Bank & Trust",
      category: "Frontend & Architecture",
      priority: "High",
      progress: 78,
      dueDate: "Sep 24, 2026",
      completedTasks: 32,
      totalTasks: 40,
      lead: "Alex Morgan",
      team: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=60"
      ],
      tags: ["React Native", "Tailwind", "Redux Toolkit"],
      status: "in-progress",
    },
    {
      id: "PRJ-102",
      name: "CRM Analytics Dashboard",
      client: "CloudSphere Retail",
      category: "UI System & Charts",
      priority: "Medium",
      progress: 92,
      dueDate: "Sep 18, 2026",
      completedTasks: 46,
      totalTasks: 50,
      lead: "Devon Lane",
      team: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=60"
      ],
      tags: ["React.js", "SVG Gauges", "Tailwind"],
      status: "in-review",
    },
    {
      id: "PRJ-103",
      name: "Global Payment Gateway Refactor",
      client: "PayZen Technologies",
      category: "Webhooks & Security",
      priority: "High",
      progress: 45,
      dueDate: "Oct 12, 2026",
      completedTasks: 18,
      totalTasks: 40,
      lead: "Marcus Vance",
      team: [
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&auto=format&fit=crop&q=60"
      ],
      tags: ["Node.js", "Express", "Stripe API"],
      status: "in-progress",
    },
    {
      id: "PRJ-104",
      name: "E-Commerce Checkout Revamp",
      client: "Lumina Brands",
      category: "UX Optimization",
      priority: "Low",
      progress: 100,
      dueDate: "Aug 30, 2026",
      completedTasks: 28,
      totalTasks: 28,
      lead: "Sophia Patel",
      team: [
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&auto=format&fit=crop&q=60"
      ],
      tags: ["Next.js", "TypeScript"],
      status: "completed",
    },
  ];

  const filteredProjects = projectsData.filter((item) => {
    const matchesFilter = activeFilter === "all" ? true : item.status === activeFilter;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. HEADER TITLE & SEARCH CONTROLS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Running Projects
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Monitor sprint deliverables, assigned feature tickets, and deploy milestones
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Search bar */}
          <div className="relative flex items-center">
            <Search size={15} className="absolute left-3.5 text-stone-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rounded-full border border-stone-200/80 bg-white py-2 pl-9 pr-4 text-xs font-medium text-stone-800 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition shadow-sm w-48 sm:w-60"
            />
          </div>

          {/* New Ticket CTA */}
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--primary-700)] transition active:scale-[0.98]"
          >
            <Plus size={15} />
            <span>New Task Ticket</span>
          </button>
        </div>
      </div>

      {/* 2. STATS PILL COUNTERS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0">
            <FolderGit2 size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Total Active</span>
            <span className="text-lg font-black text-stone-900 leading-tight">04 Projects</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--secondary-100)] text-[var(--secondary)] flex items-center justify-center shrink-0">
            <CheckSquare size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Tasks Cleared</span>
            <span className="text-lg font-black text-stone-900 leading-tight">124 / 158</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Sprint Due In</span>
            <span className="text-lg font-black text-stone-900 leading-tight">09 Days</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-stone-100 text-stone-700 flex items-center justify-center shrink-0">
            <GitPullRequest size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Open Pull Requests</span>
            <span className="text-lg font-black text-stone-900 leading-tight">06 Waiting</span>
          </div>
        </div>
      </div>

      {/* 3. FILTER TABS */}
      <div className="flex items-center gap-2 border-b border-stone-200/70 pb-2 text-xs font-bold">
        {[
          { id: "all", label: "All Projects" },
          { id: "in-progress", label: "In Progress" },
          { id: "in-review", label: "In Review" },
          { id: "completed", label: "Completed" },
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

      {/* 4. MAIN PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((prj) => {
          const isHighPriority = prj.priority === "High";
          return (
            <div
              key={prj.id}
              className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-5 group"
            >
              <div>
                {/* Card Header: Client & Priority */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-semibold text-stone-400 uppercase tracking-wide">
                      {prj.client}
                    </span>
                    <h3 className="text-base font-extrabold text-stone-900 group-hover:text-[var(--primary)] transition mt-0.5">
                      {prj.name}
                    </h3>
                  </div>

                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      isHighPriority
                        ? "bg-rose-50 text-rose-600 border border-rose-100"
                        : "bg-amber-50 text-amber-600 border border-amber-100"
                    }`}
                  >
                    {prj.priority} Priority
                  </span>
                </div>

                {/* Progress Bar & Stats */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-stone-600">Sprint Progress</span>
                    <span className="text-stone-900 font-bold">{prj.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        prj.progress === 100
                          ? "bg-[var(--secondary-500)]"
                          : prj.progress > 70
                          ? "bg-[var(--secondary)]"
                          : "bg-[var(--primary)]"
                      }`}
                      style={{ width: `${prj.progress}%` }}
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {prj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[#FAF8F5] border border-stone-200/60 px-2 py-0.5 text-[11px] font-medium text-stone-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Team & Deadline */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                {/* Team Avatar Stack */}
                <div className="flex items-center -space-x-2">
                  {prj.team.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="member"
                      className="h-7 w-7 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                  ))}
                  <div className="h-7 w-7 rounded-full bg-[#F3EFEA] border-2 border-white flex items-center justify-center text-[10px] font-bold text-stone-600">
                    +{prj.totalTasks - prj.completedTasks}
                  </div>
                </div>

                {/* Due Date Indicator */}
                <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                  <Calendar size={13} className="text-stone-400" />
                  <span>Due {prj.dueDate}</span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default UserProjects;