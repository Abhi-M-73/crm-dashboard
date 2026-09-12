import React, { useState } from "react";
import {
  Users as UsersIcon,
  Search,
  Plus,
  Filter,
  MoreVertical,
  Mail,
  Building2,
  Briefcase,
  Shield,
  CheckCircle2,
  Clock,
  Trash2,
  Edit2,
  X,
} from "lucide-react";
import toast from "react-hot-toast";

const initialEmployees = [
  {
    id: 1,
    name: "Claire Horington",
    email: "claire.h@company.com",
    department: "Engineering",
    role: "Senior Frontend Engineer",
    status: "Active",
    type: "Full-Time",
    salary: "$5,400",
    joined: "15 Jan 2024",
    avatarBg: "bg-[var(--secondary-600)] text-white",
  },
  {
    id: 2,
    name: "Marcus Vance",
    email: "marcus.v@company.com",
    department: "Design",
    role: "Lead Product Designer",
    status: "Active",
    type: "Full-Time",
    salary: "$4,800",
    joined: "02 Feb 2024",
    avatarBg: "bg-amber-600 text-white",
  },
  {
    id: 3,
    name: "Sophia Chen",
    email: "sophia.c@company.com",
    department: "Engineering",
    role: "DevOps & Cloud Specialist",
    status: "Active",
    type: "Full-Time",
    salary: "$5,800",
    joined: "10 Mar 2024",
    avatarBg: "bg-blue-600 text-white",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.k@company.com",
    department: "Sales",
    role: "Enterprise Account Exec",
    status: "On Leave",
    type: "Full-Time",
    salary: "$4,200",
    joined: "18 May 2024",
    avatarBg: "bg-purple-600 text-white",
  },
  {
    id: 5,
    name: "Priya Sharma",
    email: "priya.s@company.com",
    department: "HR & Admin",
    role: "Talent Acquisition Manager",
    status: "Active",
    type: "Full-Time",
    salary: "$4,500",
    joined: "01 Jun 2024",
    avatarBg: "bg-rose-600 text-white",
  },
  {
    id: 6,
    name: "Liam O'Connor",
    email: "liam.o@company.com",
    department: "Operations",
    role: "Supply Chain Analyst",
    status: "Probation",
    type: "Contract",
    salary: "$3,600",
    joined: "12 Dec 2025",
    avatarBg: "bg-teal-600 text-white",
  },
];

const departments = ["All", "Engineering", "Design", "Sales", "HR & Admin", "Operations"];

const Users = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Engineering",
    role: "",
    salary: "$4,500",
  });

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase());
    const matchesDept = selectedDept === "All" || emp.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.role) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const newEmp = {
      id: employees.length + 1,
      name: formData.name,
      email: formData.email,
      department: formData.department,
      role: formData.role,
      status: "Active",
      type: "Full-Time",
      salary: formData.salary,
      joined: "Just now",
      avatarBg: "bg-[var(--primary-600)] text-white",
    };

    setEmployees([newEmp, ...employees]);
    setIsModalOpen(false);
    setFormData({ name: "", email: "", department: "Engineering", role: "", salary: "$4,500" });
    toast.success(`${formData.name} added to the workforce directory!`);
  };

  const handleDelete = (id, name) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
    toast.success(`Removed ${name} from active directory.`);
  };

  return (
    <div className="p-5 sm:p-7 space-y-6 max-w-[1400px] mx-auto text-stone-900 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            Workforce & Employee Directory
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Manage organization team members, designations, departments, and payroll access.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[color-mix(in_srgb,var(--primary)_20%,transparent)] transition-all hover:-translate-y-0.5"
        >
          <Plus size={16} />
          <span>Add New Employee</span>
        </button>
      </div>

      {/* 4 Metric Highlights */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Total Workforce</p>
          <p className="text-2xl sm:text-3xl font-black text-stone-900 mt-1">{employees.length + 246}</p>
          <span className="text-[11px] text-[var(--secondary-600)] font-semibold">+14 this quarter</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Active Full-Time</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--secondary)] mt-1">218</p>
          <span className="text-[11px] text-stone-500 font-medium">Verified contracts</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">On Probation / Trainee</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--primary)] mt-1">24</p>
          <span className="text-[11px] text-stone-500 font-medium">Review pending</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">On Leave Today</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--primary-700)] mt-1">10</p>
          <span className="text-[11px] text-[var(--secondary-600)] font-semibold">96.1% attendance rate</span>
        </div>
      </div>

      {/* Search & Department Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search by name, role, or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-stone-200 bg-white pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:border-stone-400 focus:outline-none shadow-2xs"
          />
        </div>

        {/* Department Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition shrink-0 ${
                selectedDept === dept
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
      </div>

      {/* Employee Data Table */}
      <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-stone-200 bg-stone-50/70 text-[11px] font-bold uppercase tracking-wider text-stone-500">
              <tr>
                <th className="px-5 py-3.5">Employee</th>
                <th className="px-5 py-3.5">Department & Role</th>
                <th className="px-5 py-3.5">Status</th>
                <th className="px-5 py-3.5">Salary</th>
                <th className="px-5 py-3.5">Joining Date</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {filteredEmployees.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-stone-400">
                    No employees found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-stone-50/60 transition">
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold text-xs ${emp.avatarBg}`}>
                          {emp.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-bold text-stone-900">{emp.name}</p>
                          <p className="text-[11px] text-stone-400">{emp.email}</p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-3.5">
                      <p className="font-semibold text-stone-800">{emp.role}</p>
                      <span className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
                        <Building2 size={11} />
                        {emp.department}
                      </span>
                    </td>

                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${
                          emp.status === "Active"
                            ? "bg-[var(--secondary-50)] text-[var(--secondary-700)] border-[var(--secondary-200)]"
                            : emp.status === "On Leave"
                            ? "bg-amber-50 text-amber-700 border-amber-200"
                            : "bg-blue-50 text-blue-700 border-blue-200"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            emp.status === "Active"
                              ? "bg-[var(--secondary-500)]"
                              : emp.status === "On Leave"
                              ? "bg-amber-500"
                              : "bg-blue-500"
                          }`}
                        />
                        {emp.status}
                      </span>
                    </td>

                    <td className="px-5 py-3.5 font-bold text-stone-900 font-mono">
                      {emp.salary}
                      <span className="text-[10px] text-stone-400 font-normal">/mo</span>
                    </td>

                    <td className="px-5 py-3.5 text-stone-500 text-xs">
                      {emp.joined}
                    </td>

                    <td className="px-5 py-3.5 text-right">
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => handleDelete(emp.id, emp.name)}
                          className="p-1.5 rounded-lg text-stone-400 hover:text-red-600 hover:bg-red-50 transition"
                          title="Remove employee"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Add Employee Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-[28px] border border-stone-200 bg-white p-6 sm:p-7 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="text-lg font-bold text-stone-900">Add New Team Member</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-1 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddEmployee} className="mt-4 space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Corporate Email *</label>
                <input
                  type="email"
                  required
                  placeholder="alex.m@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none bg-white"
                  >
                    {departments.filter((d) => d !== "All").map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Base Monthly Salary</label>
                  <input
                    type="text"
                    placeholder="$5,000"
                    value={formData.salary}
                    onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                    className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">Designation & Role *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Backend Engineer"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full rounded-xl border border-stone-200 p-2.5 focus:border-stone-400 focus:outline-none"
                />
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 rounded-xl border border-stone-200 py-2.5 font-semibold text-stone-600 hover:bg-stone-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-[var(--primary)] py-2.5 font-bold text-white hover:brightness-105 shadow-md shadow-[color-mix(in_srgb,var(--primary)_20%,transparent)]"
                >
                  Create Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
