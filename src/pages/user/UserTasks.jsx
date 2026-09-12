import React, { useState } from "react";
import {
  CheckSquare,
  Search,
  Plus,
  Clock,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ChevronDown,
  Filter,
  MoreHorizontal,
  ArrowUpRight,
  Sparkles,
  Tag,
  ListTodo,
  Layers
} from "lucide-react";

const UserTasks = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const tasksData = [
    {
      id: "TSK-401",
      title: "API Authentication & Token Refresh Flow",
      project: "Fintech Mobile App V2",
      priority: "High",
      status: "in-review",
      dueDate: "Sep 10, 2026",
      points: 5,
      subtasksCompleted: 4,
      totalSubtasks: 4,
      assignee: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
      tags: ["Auth", "Security", "Redux"],
    },
    {
      id: "TSK-402",
      title: "Payment Gateway Webhook Listener",
      project: "Payment Gateway Refactor",
      priority: "High",
      status: "in-progress",
      dueDate: "Sep 12, 2026",
      points: 8,
      subtasksCompleted: 3,
      totalSubtasks: 6,
      assignee: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
      tags: ["Stripe", "Node.js", "Webhooks"],
    },
    {
      id: "TSK-403",
      title: "Concentric Gauge Component Integration",
      project: "CRM Cloud Redesign",
      priority: "Medium",
      status: "completed",
      dueDate: "Sep 08, 2026",
      points: 3,
      subtasksCompleted: 5,
      totalSubtasks: 5,
      assignee: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      tags: ["SVG", "React", "Charts"],
    },
    {
      id: "TSK-404",
      title: "Unit Test Coverage for Checkout Reducer",
      project: "E-Commerce Checkout Revamp",
      priority: "Low",
      status: "todo",
      dueDate: "Sep 16, 2026",
      points: 3,
      subtasksCompleted: 0,
      totalSubtasks: 4,
      assignee: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
      tags: ["Jest", "Testing"],
    },
    {
      id: "TSK-405",
      title: "Responsive Sidebar Collapsing Animation",
      project: "RelationX Design System",
      priority: "Medium",
      status: "in-progress",
      dueDate: "Sep 11, 2026",
      points: 5,
      subtasksCompleted: 2,
      totalSubtasks: 3,
      assignee: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
      tags: ["Tailwind", "Animation"],
    },
  ];

  const filteredTasks = tasksData.filter((task) => {
    const matchesTab = activeTab === "all" ? true : task.status === activeTab;
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & NEW TASK ACTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Assigned Sprint Tasks
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Manage your daily deliverable queue, active tickets, and code review status
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-stone-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-stone-700 shadow-sm">
            <Layers size={14} className="text-stone-500" />
            <span>Sprint 18</span>
            <ChevronDown size={13} className="text-stone-400" />
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[var(--primary)] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[var(--primary-700)] transition active:scale-[0.98]"
          >
            <Plus size={15} />
            <span>Create Task Ticket</span>
          </button>
        </div>
      </div>

      {/* 2. STATS OVERVIEW CARDS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0 border border-[var(--primary-100)]">
            <ListTodo size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Total Tasks Queue</span>
            <span className="text-lg font-black text-stone-900 leading-tight">05 Assigned</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[var(--secondary-100)] text-[var(--secondary)] flex items-center justify-center shrink-0 border border-[var(--secondary-100)]">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Completed on Time</span>
            <span className="text-lg font-black text-stone-900 leading-tight">18 / 22 Closed</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">In Code Review</span>
            <span className="text-lg font-black text-stone-900 leading-tight">02 Awaiting PR</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 border border-rose-100">
            <AlertCircle size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">High Priority Due</span>
            <span className="text-lg font-black text-stone-900 leading-tight">02 Critical</span>
          </div>
        </div>
      </div>

      {/* 3. CONCENTRIC SPRINT WORKLOAD METER & DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* CONCENTRIC GAUGE CARD (5 Columns) */}
        <div className="lg:col-span-5 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Sprint Story Points</h3>
              <p className="text-[11px] text-stone-400">Total 32 story points committed</p>
            </div>
            <span className="rounded-full bg-[var(--secondary-50)] px-2.5 py-0.5 text-[11px] font-bold text-[var(--secondary-700)] border border-[var(--secondary-100)]">
              On Pace
            </span>
          </div>

          {/* Concentric Gauge SVG */}
          <div className="relative w-44 h-44 mx-auto my-3 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#FEE8D8" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="none"
                stroke="#F97316"
                strokeWidth="8"
                strokeDasharray="314"
                strokeDashoffset="68"
                strokeLinecap="round"
              />

              <circle cx="60" cy="60" r="38" fill="none" stroke="var(--secondary-100)" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="38"
                fill="none"
                stroke="var(--secondary)"
                strokeWidth="8"
                strokeDasharray="238"
                strokeDashoffset="38"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-stone-900">78%</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                Tasks Done
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--secondary)]" /> 25 Pts Delivered
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]" /> 7 Pts In Flight
            </span>
          </div>
        </div>

        {/* RECENT CHECKLIST PROGRESS CARD (7 Columns) */}
        <div className="lg:col-span-7 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Sprint Focus & Deadlines</h3>
              <p className="text-[11px] text-stone-400">Milestones required before sprint freeze</p>
            </div>
            <span className="text-xs font-bold text-[var(--primary)] bg-[var(--primary-50)] px-3 py-1 rounded-full">
              4 Days Remaining
            </span>
          </div>

          <div className="space-y-3 pt-1">
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0">
                  <CheckSquare size={17} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Auth Token Expire Security Patch</h4>
                  <p className="text-[10px] text-stone-400 mt-0.5">Fintech Mobile App V2 &bull; Due Tomorrow, 5 PM</p>
                </div>
              </div>
              <span className="text-xs font-bold text-[var(--secondary)] bg-[var(--secondary-100)] px-2.5 py-0.5 rounded-full">
                Ready to Merge
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock size={17} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-800">Stripe Webhook Verification Fix</h4>
                  <p className="text-[10px] text-stone-400 mt-0.5">Payment Gateway &bull; Due Sep 12</p>
                </div>
              </div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                In Testing
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-stone-100 font-medium">
            <span>QA Lead: Sophia Patel</span>
            <span className="text-[var(--primary)] font-semibold cursor-pointer hover:underline">
              Open Jira Board &rarr;
            </span>
          </div>
        </div>

      </div>

      {/* 4. FILTER TABS & SEARCH */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/70 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
          {[
            { id: "all", label: "All Tasks" },
            { id: "in-progress", label: "In Progress" },
            { id: "in-review", label: "In Review" },
            { id: "todo", label: "To Do" },
            { id: "completed", label: "Completed" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-1.5 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[var(--secondary)] text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900 hover:bg-stone-200/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative flex items-center">
          <Search size={14} className="absolute left-3.5 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search task by title or ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full border border-stone-200/80 bg-white py-1.5 pl-9 pr-4 text-xs font-medium text-stone-800 outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/10 transition shadow-sm w-full sm:w-64"
          />
        </div>
      </div>

      {/* 5. TASKS ROSTER TABLE */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-normal border-b border-stone-100 pb-2">
                <th className="pb-3 font-normal">Task ID & Title</th>
                <th className="pb-3 font-normal">Project</th>
                <th className="pb-3 font-normal">Priority</th>
                <th className="pb-3 font-normal">Subtasks</th>
                <th className="pb-3 font-normal">Story Pts</th>
                <th className="pb-3 font-normal">Due Date</th>
                <th className="pb-3 font-normal">Status</th>
                <th className="pb-3 font-normal text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filteredTasks.map((task) => {
                let badgeStyle = {
                  label: "In Progress",
                  pill: "bg-amber-50 text-amber-700 border-amber-200/60",
                };

                if (task.status === "in-review") {
                  badgeStyle = {
                    label: "In Review",
                    pill: "bg-blue-50 text-blue-700 border-blue-200/60 font-semibold",
                  };
                } else if (task.status === "completed") {
                  badgeStyle = {
                    label: "Done",
                    pill: "bg-[var(--secondary-50)] text-[var(--secondary-700)] border-[color-mix(in_srgb,var(--secondary-200)_60%,transparent)] font-semibold",
                  };
                } else if (task.status === "todo") {
                  badgeStyle = {
                    label: "To Do",
                    pill: "bg-stone-100 text-stone-500 border-stone-200",
                  };
                }

                return (
                  <tr key={task.id} className="hover:bg-stone-50/60 transition-colors">
                    {/* Task ID & Title */}
                    <td className="py-3.5 font-bold text-stone-900 max-w-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[var(--primary)] bg-[var(--primary-50)] px-2 py-0.5 rounded-md">
                          {task.id}
                        </span>
                        <span className="truncate block font-extrabold">{task.title}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1 pl-12">
                        {task.tags.map((t) => (
                          <span key={t} className="text-[9px] text-stone-400 bg-stone-100 px-1.5 py-0.2 rounded">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Project */}
                    <td className="py-3.5 text-stone-500 font-semibold">{task.project}</td>

                    {/* Priority */}
                    <td className="py-3.5">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                          task.priority === "High"
                            ? "bg-rose-50 text-rose-600 border border-rose-100"
                            : task.priority === "Medium"
                            ? "bg-amber-50 text-amber-600 border border-amber-100"
                            : "bg-stone-100 text-stone-500"
                        }`}
                      >
                        {task.priority}
                      </span>
                    </td>

                    {/* Subtasks Progress */}
                    <td className="py-3.5 font-medium text-stone-700">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">{task.subtasksCompleted}/{task.totalSubtasks}</span>
                        <div className="w-14 bg-stone-100 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-[var(--secondary)] h-full rounded-full"
                            style={{ width: `${(task.subtasksCompleted / task.totalSubtasks) * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Story Points */}
                    <td className="py-3.5 font-black text-stone-800">{task.points} pts</td>

                    {/* Due Date */}
                    <td className="py-3.5 font-medium text-stone-500">{task.dueDate}</td>

                    {/* Status Badge */}
                    <td className="py-3.5">
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${badgeStyle.pill}`}>
                        {badgeStyle.label}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="py-3.5 text-right">
                      <button
                        type="button"
                        className="text-stone-400 hover:text-stone-800 p-1.5 rounded-lg hover:bg-stone-100 transition"
                        title="View Task Details"
                      >
                        <ArrowUpRight size={14} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default UserTasks;