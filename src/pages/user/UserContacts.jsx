import React, { useState } from "react";
import {
  Users,
  Search,
  Plus,
  Download,
  Mail,
  Phone,
  Building2,
  Trash2,
  X,
  UserCheck,
  Filter,
  CheckCircle2
} from "lucide-react";
import toast from "react-hot-toast";

const UserContacts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [contacts, setContacts] = useState([
    {
      id: "CNT-101",
      name: "Claire Horington",
      role: "Lead Frontend Architect",
      department: "Engineering",
      email: "claire.h@relationx.com",
      phone: "+1 (555) 234-8901",
      extension: "4011",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "CNT-102",
      name: "Marcus Vance",
      role: "Backend Architect",
      department: "Engineering",
      email: "marcus.v@relationx.com",
      phone: "+1 (555) 234-8902",
      extension: "4012",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "CNT-103",
      name: "Jordan Lee",
      role: "Product Design Lead",
      department: "Design",
      email: "jordan.l@relationx.com",
      phone: "+1 (555) 234-8903",
      extension: "4015",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "CNT-104",
      name: "Devon Lane",
      role: "VP of Engineering",
      department: "Management",
      email: "devon.l@relationx.com",
      phone: "+1 (555) 234-8904",
      extension: "4001",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "CNT-105",
      name: "Sophia Patel",
      role: "QA Automation Lead",
      department: "Engineering",
      email: "sophia.p@relationx.com",
      phone: "+1 (555) 234-8905",
      extension: "4018",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80",
    },
    {
      id: "CNT-106",
      name: "Elena Rostova",
      role: "People Operations Lead",
      department: "HR",
      email: "elena.r@relationx.com",
      phone: "+1 (555) 234-8906",
      extension: "4020",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80",
    },
  ]);

  const [newContact, setNewContact] = useState({
    name: "",
    role: "",
    department: "Engineering",
    email: "",
    phone: "",
    extension: "",
  });

  // Handle Add Contact Form
  const handleAddContact = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.email || !newContact.phone) {
      toast.error("Please fill in all mandatory contact fields.");
      return;
    }

    const created = {
      ...newContact,
      id: `CNT-${Math.floor(100 + Math.random() * 900)}`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${newContact.name}`,
    };

    setContacts((prev) => [created, ...prev]);
    toast.success("New contact added to directory!");
    setNewContact({
      name: "",
      role: "",
      department: "Engineering",
      email: "",
      phone: "",
      extension: "",
    });
    setIsModalOpen(false);
  };

  // Export Sheet to CSV
  const handleExportSheet = () => {
    if (contacts.length === 0) return;

    const headers = ["ID,Name,Role,Department,Email,Phone,Extension"];
    const rows = contacts.map(
      (c) => `"${c.id}","${c.name}","${c.role}","${c.department}","${c.email}","${c.phone}","${c.extension}"`
    );
    const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `relationx_contacts_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success("Contacts sheet downloaded as CSV!");
  };

  const handleDelete = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
    toast.success("Contact removed.");
  };

  const filteredContacts = contacts.filter((c) => {
    const matchesDept = activeTab === "all" ? true : c.department.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.extension.includes(searchQuery);
    return matchesDept && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. Header Bar with Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            Workplace Contacts Directory
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Internal corporate phonebook, team directory, and emergency extensions
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleExportSheet}
            className="flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-bold text-stone-700 shadow-sm hover:bg-stone-50 transition active:scale-[0.98]"
          >
            <Download size={14} />
            <span>Download Sheet</span>
          </button>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 rounded-full bg-[#EA580C] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#d94e07] transition active:scale-[0.98]"
          >
            <Plus size={15} />
            <span>Add Contact</span>
          </button>
        </div>
      </div>

      {/* 2. Stats Pill Counters */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-100">
            <Users size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Total Directory</span>
            <span className="text-lg font-black text-stone-900 leading-tight">
              {contacts.length} Members
            </span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#E1EBE6] text-[#1E5642] flex items-center justify-center shrink-0 border border-emerald-100">
            <UserCheck size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Engineering Pod</span>
            <span className="text-lg font-black text-stone-900 leading-tight">
              {contacts.filter((c) => c.department === "Engineering").length} Contacts
            </span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <Building2 size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Design & Product</span>
            <span className="text-lg font-black text-stone-900 leading-tight">
              {contacts.filter((c) => c.department === "Design").length} Contacts
            </span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#FAF8F5] text-stone-700 flex items-center justify-center shrink-0 border border-stone-100">
            <Phone size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Active Extensions</span>
            <span className="text-lg font-black text-stone-900 leading-tight">
              100% Available
            </span>
          </div>
        </div>
      </div>

      {/* 3. Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/70 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
          {["all", "Engineering", "Design", "HR", "Management"].map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-1.5 transition-all whitespace-nowrap capitalize ${
                activeTab === tab
                  ? "bg-[#1E5642] text-white shadow-sm"
                  : "text-stone-500 hover:text-stone-900 hover:bg-stone-200/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative flex items-center">
          <Search size={14} className="absolute left-3.5 text-stone-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search name, role, extension..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full border border-stone-200/80 bg-white py-1.5 pl-9 pr-4 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition shadow-sm w-full sm:w-64"
          />
        </div>
      </div>

      {/* 4. Contacts Table */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-normal border-b border-stone-100 pb-2">
                <th className="pb-3 font-normal">Contact Name</th>
                <th className="pb-3 font-normal">Department</th>
                <th className="pb-3 font-normal">Work Email</th>
                <th className="pb-3 font-normal">Direct Phone</th>
                <th className="pb-3 font-normal">Desk Ext.</th>
                <th className="pb-3 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filteredContacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-stone-50/60 transition-colors">
                  {/* Name + Avatar */}
                  <td className="py-3.5 font-semibold text-stone-800 flex items-center gap-3">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-9 h-9 rounded-2xl object-cover border border-stone-100 shadow-2xs"
                    />
                    <div>
                      <span className="font-extrabold text-stone-900 block leading-tight">
                        {contact.name}
                      </span>
                      <span className="text-[10px] text-stone-400 font-normal">
                        {contact.role}
                      </span>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="py-3.5">
                    <span className="rounded-md bg-[#FAF8F5] border border-stone-200/60 px-2 py-0.5 font-semibold text-stone-700 text-[11px]">
                      {contact.department}
                    </span>
                  </td>

                  {/* Email */}
                  <td className="py-3.5 font-medium text-stone-700">
                    <a
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-1.5 hover:text-[#EA580C] transition"
                    >
                      <Mail size={13} className="text-stone-400" />
                      <span>{contact.email}</span>
                    </a>
                  </td>

                  {/* Phone */}
                  <td className="py-3.5 font-medium text-stone-700">
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-1.5 hover:text-[#EA580C] transition"
                    >
                      <Phone size={13} className="text-stone-400" />
                      <span>{contact.phone}</span>
                    </a>
                  </td>

                  {/* Desk Ext */}
                  <td className="py-3.5 font-mono font-bold text-stone-800">
                    #{contact.extension || "N/A"}
                  </td>

                  {/* Delete Action */}
                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      onClick={() => handleDelete(contact.id)}
                      className="p-1.5 rounded-lg text-stone-400 hover:text-rose-600 hover:bg-rose-50 transition"
                      title="Delete Contact"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredContacts.length === 0 && (
            <div className="py-12 text-center text-xs text-stone-400">
              No contacts found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* 5. ADD CONTACT MODAL POPUP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-[32px] border border-stone-200 bg-white p-6 sm:p-8 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-stone-900">Add New Contact</h3>
                <p className="text-[11px] text-stone-400">Register employee or department contact details</p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full p-1.5 text-stone-400 hover:bg-stone-100 hover:text-stone-700 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddContact} className="space-y-4 pt-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-bold text-stone-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Adams"
                    value={newContact.name}
                    onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
                    className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 px-3.5 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="mb-1 block font-bold text-stone-700">Designation / Role</label>
                  <input
                    type="text"
                    placeholder="e.g. Lead Designer"
                    value={newContact.role}
                    onChange={(e) => setNewContact({ ...newContact, role: e.target.value })}
                    className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 px-3.5 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block font-bold text-stone-700">Department</label>
                  <select
                    value={newContact.department}
                    onChange={(e) => setNewContact({ ...newContact, department: e.target.value })}
                    className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 px-3 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="HR">HR</option>
                    <option value="Management">Management</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1 block font-bold text-stone-700">Desk Extension</label>
                  <input
                    type="text"
                    placeholder="e.g. 4025"
                    value={newContact.extension}
                    onChange={(e) => setNewContact({ ...newContact, extension: e.target.value })}
                    className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 px-3.5 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block font-bold text-stone-700">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="rachel.a@relationx.com"
                  value={newContact.email}
                  onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
                  className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 px-3.5 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                />
              </div>

              <div>
                <label className="mb-1 block font-bold text-stone-700">Phone Number *</label>
                <input
                  type="text"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={newContact.phone}
                  onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
                  className="w-full rounded-2xl border border-stone-200 bg-[#FAF8F5]/60 py-2.5 px-3.5 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:bg-white transition"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="rounded-2xl border border-stone-200 bg-white px-4 py-2.5 font-bold text-stone-700 hover:bg-stone-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-2xl bg-[#EA580C] px-5 py-2.5 font-bold text-white shadow-sm hover:bg-[#d94e07] transition"
                >
                  Save to Directory
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default UserContacts;