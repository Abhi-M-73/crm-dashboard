import React, { useState } from "react";
import {
  FolderGit2,
  Plus,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  DollarSign,
  AlertTriangle,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

const initialProjects = [
  {
    id: 1,
    title: "Enterprise SSO & Biometric Integration",
    department: "Engineering",
    lead: "Claire Horington",
    leadAvatar: "CH",
    members: ["JD", "SC", "AM"],
    budget: "$45,000",
    spent: "$32,400",
    progress: 75,
    dueDate: "28 Mar 2026",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Global HR Mobile App Redesign v3",
    department: "Design",
    lead: "Marcus Vance",
    leadAvatar: "MV",
    members: ["SL", "DK"],
    budget: "$30,000",
    spent: "$28,500",
    progress: 90,
    dueDate: "20 Mar 2026",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Automated Tax Deduction Engine (W4/T4)",
    department: "Engineering",
    lead: "Sophia Chen",
    leadAvatar: "SC",
    members: ["CH", "JD"],
    budget: "$60,000",
    spent: "$18,000",
    progress: 30,
    dueDate: "15 May 2026",
    status: "Planning",
  },
  {
    id: 4,
    title: "Q1 Talent Acquisition & Campus Drive",
    department: "HR & Admin",
    lead: "Priya Sharma",
    leadAvatar: "PS",
    members: ["LO", "MV"],
    budget: "$25,000",
    spent: "$24,200",
    progress: 95,
    dueDate: "31 Mar 2026",
    status: "Completed",
  },
];

const AdminProjects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Project Form
  const [newProject, setNewProject] = useState({
    title: "",
    department: "Engineering",
    lead: "",
    budget: "$30,000",
    dueDate: "",
  });

  const handleCreateProject = (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.lead) {
      toast.error("Please fill in title and team lead.");
      return;
    }

    const created = {
      id: projects.length + 1,
      title: newProject.title,
      department: newProject.department,
      lead: newProject.lead,
      leadAvatar: newProject.lead.split(" ").map((n) => n[0]).join(""),
      members: ["CH", "MV"],
      budget: newProject.budget,
      spent: "$0",
      progress: 5,
      dueDate: newProject.dueDate || "30 Apr 2026",
      status: "In Progress",
    };

    setProjects([created, ...projects]);
    setIsModalOpen(false);
    setNewProject({ title: "", department: "Engineering", lead: "", budget: "$30,000", dueDate: "" });
    toast.success(`Project "${created.title}" launched successfully!`);
  };

  const filteredProjects = projects.filter((p) => {
    if (filter === "All") return true;
    return p.status === filter;
  });

  return (
    <div className="p-5 sm:p-7 space-y-6 max-w-[1400px] mx-auto text-stone-900 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            Projects & Workforce Deliverables
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Track squad project allocations, milestone deadlines, and team deliverables across departments.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[color-mix(in_srgb,var(--primary)_20%,transparent)] transition-all hover:-translate-y-0.5"
        >
          <Plus size={16} />
          <span>Create Project</span>
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Active Projects</p>
          <p className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">{projects.length}</p>
          <span className="text-[11px] text-[var(--secondary-600)] font-semibold">Across 4 squads</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Total Budget</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--secondary)] mt-1">$160,000</p>
          <span className="text-[11px] text-stone-500 font-medium">Allocated for Q1</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">In Progress</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--primary-700)] mt-1">
            {projects.filter((p) => p.status === "In Progress").length}
          </p>
          <span className="text-[11px] text-[var(--secondary-600)] font-semibold">On track to deliver</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Completed</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--secondary-700)] mt-1">
            {projects.filter((p) => p.status === "Completed").length}
          </p>
          <span className="text-[11px] text-stone-500 font-medium">100% QA verified</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
        {["All", "In Progress", "Planning", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
              filter === tab
                ? "bg-stone-900 text-white shadow-xs"
                : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="rounded-[28px] border border-stone-200 bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="rounded-lg bg-stone-100 text-stone-600 px-2.5 py-0.5 text-[10px] font-bold">
                    {proj.department}
                  </span>
                  <h3 className="text-base font-bold text-stone-900 mt-2">{proj.title}</h3>
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                    proj.status === "Completed"
                      ? "bg-[var(--secondary-50)] text-[var(--secondary-700)] border-[var(--secondary-200)]"
                      : proj.status === "Planning"
                      ? "bg-blue-50 text-blue-700 border-blue-200"
                      : "bg-amber-50 text-amber-700 border-amber-200"
                  }`}
                >
                  {proj.status}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mt-5 space-y-1.5">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-stone-500">Progress</span>
                  <span className="text-stone-900 font-bold">{proj.progress}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-stone-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[var(--primary)] transition-all"
                    style={{ width: `${proj.progress}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-[10px] font-bold">
                  {proj.leadAvatar}
                </div>
                <div>
                  <p className="font-bold text-stone-800 leading-tight">{proj.lead}</p>
                  <p className="text-[10px] text-stone-400">Team Lead</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold text-stone-900 font-mono">{proj.spent} / {proj.budget}</p>
                <p className="text-[10px] text-stone-400 flex items-center gap-1 justify-end mt-0.5">
                  <Calendar size={11} />
                  <span>Due: {proj.dueDate}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-[28px] border border-stone-200 bg-white p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="text-lg font-bold text-stone-900">Create New Project</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-1 text-stone-400 hover:bg-stone-100"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Project Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mobile Geofencing v2"
                  value={newProject.title}
                  onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                  className="w-full rounded-xl border border-stone-200 p-2.5 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Department</label>
                  <select
                    value={newProject.department}
                    onChange={(e) => setNewProject({ ...newProject, department: e.target.value })}
                    className="w-full rounded-xl border border-stone-200 p-2.5 bg-white focus:outline-none"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Sales">Sales</option>
                    <option value="HR & Admin">HR & Admin</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Budget Allocated</label>
                  <input
                    type="text"
                    placeholder="$35,000"
                    value={newProject.budget}
                    onChange={(e) => setNewProject({ ...newProject, budget: e.target.value })}
                    className="w-full rounded-xl border border-stone-200 p-2.5 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Assign Team Lead *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Claire Horington"
                  value={newProject.lead}
                  onChange={(e) => setNewProject({ ...newProject, lead: e.target.value })}
                  className="w-full rounded-xl border border-stone-200 p-2.5 focus:outline-none"
                />
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-xl border border-stone-200 py-2.5 font-semibold text-stone-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[var(--primary)] py-2.5 font-bold text-white hover:brightness-105"
                >
                  Launch Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;
