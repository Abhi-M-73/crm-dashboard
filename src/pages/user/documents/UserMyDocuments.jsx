import React, { useState } from "react";
import {
  FileText,
  Download,
  Upload,
  Search,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  ShieldCheck,
  Clock,
  ExternalLink,
  MoreHorizontal,
  FolderLock,
  Eye,
  Plus
} from "lucide-react";

const UserMyDocuments = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const documents = [
    {
      id: "DOC-01",
      title: "Offer Letter & Employment Agreement",
      category: "contracts",
      type: "PDF",
      size: "2.4 MB",
      uploadedOn: "Mar 14, 2023",
      verified: true,
      issuer: "RelationX HR Operations",
    },
    {
      id: "DOC-02",
      title: "Non-Disclosure & IP Assignment (NDA)",
      category: "contracts",
      type: "PDF",
      size: "1.1 MB",
      uploadedOn: "Mar 14, 2023",
      verified: true,
      issuer: "Legal Department",
    },
    {
      id: "DOC-03",
      title: "Annual Tax Form W-2 / Form 16 (FY 2025-26)",
      category: "tax",
      type: "PDF",
      size: "850 KB",
      uploadedOn: "May 10, 2026",
      verified: true,
      issuer: "Payroll Division",
    },
    {
      id: "DOC-04",
      title: "AWS Certified Solutions Architect Certificate",
      category: "certifications",
      type: "PDF",
      size: "3.2 MB",
      uploadedOn: "Feb 18, 2026",
      verified: true,
      issuer: "Amazon Web Services",
    },
    {
      id: "DOC-05",
      title: "Government Passport & National ID Card",
      category: "identification",
      type: "PDF",
      size: "4.8 MB",
      uploadedOn: "Mar 10, 2023",
      verified: true,
      issuer: "Govt Authority",
    },
    {
      id: "DOC-06",
      title: "Health & Accidental Insurance Policy Bond",
      category: "contracts",
      type: "PDF",
      size: "1.6 MB",
      uploadedOn: "Jan 05, 2026",
      verified: false,
      issuer: "Aetna Corporate Care",
    },
  ];

  const filteredDocs = documents.filter((doc) => {
    const matchesTab = activeTab === "all" ? true : doc.category === activeTab;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="w-full space-y-6 text-stone-800 antialiased font-sans p-6">
      
      {/* 1. TOP HEADER & UPLOAD ACTION */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-900">
            My Documents & Vault
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            Access, download, and verify your employment contracts, tax forms, and KYC records
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-full bg-[#EA580C] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#d94e07] transition active:scale-[0.98]"
          >
            <Upload size={14} />
            <span>Upload Document</span>
          </button>
        </div>
      </div>

      {/* 2. STATS PILL COUNTERS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#E1EBE6] text-[#1E5642] flex items-center justify-center shrink-0 border border-emerald-100">
            <ShieldCheck size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Verified Records</span>
            <span className="text-lg font-black text-stone-900 leading-tight">05 / 06 Files</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0 border border-orange-100">
            <FolderLock size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Vault Storage</span>
            <span className="text-lg font-black text-stone-900 leading-tight">13.9 MB Used</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
            <Clock size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Pending HR Review</span>
            <span className="text-lg font-black text-stone-900 leading-tight">01 Document</span>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/70 bg-white p-4 shadow-sm flex items-center gap-3.5">
          <div className="h-11 w-11 rounded-2xl bg-[#FAF8F5] text-stone-700 flex items-center justify-center shrink-0 border border-stone-100">
            <FileCheck size={20} />
          </div>
          <div>
            <span className="text-[11px] text-stone-400 font-semibold block">Compliance Score</span>
            <span className="text-lg font-black text-stone-900 leading-tight">100% Passed</span>
          </div>
        </div>
      </div>

      {/* 3. CONCENTRIC COMPLIANCE METER & DRAG-DROP UPLOADER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* CONCENTRIC GAUGE CARD (5 Columns) */}
        <div className="lg:col-span-5 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-stone-900">Document Verification</h3>
              <p className="text-[11px] text-stone-400">KYC and HR mandatory documentation audit</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-100">
              Compliant
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
                strokeDashoffset="45"
                strokeLinecap="round"
              />

              <circle cx="60" cy="60" r="38" fill="none" stroke="#E1EBE6" strokeWidth="8" />
              <circle
                cx="60"
                cy="60"
                r="38"
                fill="none"
                stroke="#1E5642"
                strokeWidth="8"
                strokeDasharray="238"
                strokeDashoffset="24"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-3xl font-black text-stone-900">92%</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-stone-400">
                Verified Vault
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-stone-100 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#1E5642]" /> 5 Approved Files
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#EA580C]" /> 1 In Verification
            </span>
          </div>
        </div>

        {/* QUICK UPLOAD DROPZONE (7 Columns) */}
        <div className="lg:col-span-7 rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-base font-extrabold text-stone-900">Upload New Document</h3>
            <p className="text-[11px] text-stone-400">Submit updated certificates or identification files to HR</p>
          </div>

          <div className="border-2 border-dashed border-stone-200 hover:border-[#EA580C] rounded-2xl p-6 text-center cursor-pointer transition-colors bg-[#FAF8F5]/60 hover:bg-[#FAF8F5]">
            <div className="mx-auto w-10 h-10 rounded-2xl bg-orange-50 text-[#EA580C] flex items-center justify-center mb-3">
              <Upload size={18} />
            </div>
            <p className="text-xs font-bold text-stone-800">
              Drag & drop files here or <span className="text-[#EA580C] underline">browse local disk</span>
            </p>
            <p className="text-[10px] text-stone-400 mt-1">
              Supports PDF, DOCX, PNG up to 15MB per file
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400 pt-2 border-t border-stone-100 font-medium">
            <span>Documents are encrypted at rest with AES-256</span>
            <span className="text-[#EA580C] font-semibold cursor-pointer hover:underline">
              View Privacy Rules &rarr;
            </span>
          </div>
        </div>

      </div>

      {/* 4. FILTER TABS & SEARCH */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/70 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs font-bold">
          {[
            { id: "all", label: "All Documents" },
            { id: "contracts", label: "Employment & Contracts" },
            { id: "tax", label: "Tax & W-2" },
            { id: "certifications", label: "Certifications" },
            { id: "identification", label: "Identification (KYC)" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-1.5 transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-[#1E5642] text-white shadow-sm"
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
            placeholder="Search document name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-full border border-stone-200/80 bg-white py-1.5 pl-9 pr-4 text-xs font-medium text-stone-800 outline-none focus:border-[#EA580C] focus:ring-2 focus:ring-[#EA580C]/10 transition shadow-sm w-full sm:w-60"
          />
        </div>
      </div>

      {/* 5. DOCUMENTS VAULT TABLE */}
      <div className="rounded-[32px] border border-stone-200/70 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="text-stone-400 font-normal border-b border-stone-100 pb-2">
                <th className="pb-3 font-normal">Document Name</th>
                <th className="pb-3 font-normal">Issuing Entity</th>
                <th className="pb-3 font-normal">Format & Size</th>
                <th className="pb-3 font-normal">Uploaded Date</th>
                <th className="pb-3 font-normal">Verification Status</th>
                <th className="pb-3 font-normal text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-stone-50/60 transition-colors">
                  {/* Document Name */}
                  <td className="py-3.5 font-bold text-stone-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#EA580C] flex items-center justify-center shrink-0">
                      <FileText size={16} />
                    </div>
                    <div>
                      <span className="font-extrabold text-stone-900 block leading-tight">{doc.title}</span>
                      <span className="text-[10px] text-stone-400 uppercase font-mono">{doc.id}</span>
                    </div>
                  </td>

                  {/* Issuer */}
                  <td className="py-3.5 font-medium text-stone-700">{doc.issuer}</td>

                  {/* Format & Size */}
                  <td className="py-3.5">
                    <span className="rounded-md bg-[#FAF8F5] border border-stone-200/60 px-2 py-0.5 text-stone-700 font-semibold text-[11px]">
                      {doc.type} &bull; {doc.size}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-3.5 font-medium text-stone-500">{doc.uploadedOn}</td>

                  {/* Verification Badge */}
                  <td className="py-3.5">
                    {doc.verified ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-100">
                        <CheckCircle2 size={11} />
                        Verified
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-100">
                        <Clock size={11} />
                        In Review
                      </span>
                    )}
                  </td>

                  {/* Actions: View & Download */}
                  <td className="py-3.5 text-right">
                    <div className="flex items-center justify-end gap-1.5 text-stone-400">
                      <button
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-stone-100 hover:text-stone-800 transition"
                        title="Preview File"
                      >
                        <Eye size={14} />
                      </button>
                      <button
                        type="button"
                        className="p-1.5 rounded-lg hover:bg-stone-100 hover:text-stone-800 transition"
                        title="Download Document"
                      >
                        <Download size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default UserMyDocuments;