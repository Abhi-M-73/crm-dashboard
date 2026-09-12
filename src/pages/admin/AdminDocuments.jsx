import React, { useState } from "react";
import {
  FileCheck2,
  FileText,
  Upload,
  CheckCircle2,
  AlertCircle,
  DownloadCloud,
  Check,
  X,
  ShieldCheck,
  User,
} from "lucide-react";
import toast from "react-hot-toast";

const initialVerifications = [
  {
    id: 1,
    employee: "Liam O'Connor",
    department: "Operations",
    docType: "Government Passport / ID Proof",
    submittedOn: "10 Mar 2026",
    fileName: "Liam_Passport_2026.pdf",
    status: "Pending",
  },
  {
    id: 2,
    employee: "Sophia Chen",
    department: "Engineering",
    docType: "Signed NDA & Intellectual Property Agreement",
    submittedOn: "08 Mar 2026",
    fileName: "Signed_NDA_Sophia.pdf",
    status: "Pending",
  },
  {
    id: 3,
    employee: "Marcus Vance",
    department: "Design",
    docType: "Annual Tax Form W-4",
    submittedOn: "05 Mar 2026",
    fileName: "Tax_Declaration_MV.pdf",
    status: "Pending",
  },
];

const companyPolicies = [
  {
    id: 1,
    title: "Company Leave & Attendance Policy 2026",
    category: "Operations & HR",
    published: "01 Jan 2026",
    signedCount: "248 / 252",
    signedPct: 98,
    fileName: "Leave_Policy_2026.pdf",
  },
  {
    id: 2,
    title: "Information Security & Data Protection Standard",
    category: "Security & Legal",
    published: "15 Jan 2026",
    signedCount: "250 / 252",
    signedPct: 99,
    fileName: "Security_Standard_v2.pdf",
  },
  {
    id: 3,
    title: "Remote Work & Hybrid Workplace Guidelines",
    category: "Culture",
    published: "01 Feb 2026",
    signedCount: "240 / 252",
    signedPct: 95,
    fileName: "Remote_Guidelines.pdf",
  },
];

const AdminDocuments = () => {
  const [activeTab, setActiveTab] = useState("verification");
  const [verifications, setVerifications] = useState(initialVerifications);

  const handleVerify = (id, approved) => {
    setVerifications(verifications.filter((v) => v.id !== id));
    toast.success(
      approved
        ? "Document verified and approved in employee vault."
        : "Document rejected and notified to employee."
    );
  };

  const handlePublish = () => {
    toast.success("Policy publishing dialog opened. Upload document to deploy.");
  };

  return (
    <div className="p-5 sm:p-7 space-y-6 max-w-[1400px] mx-auto text-stone-900 font-sans">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            Documents & Compliance Repository
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Review and approve employee identity proofs, tax filings, and deploy official corporate policies.
          </p>
        </div>

        <button
          onClick={handlePublish}
          className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] hover:brightness-105 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-[color-mix(in_srgb,var(--primary)_20%,transparent)] transition-all hover:-translate-y-0.5"
        >
          <Upload size={16} />
          <span>Publish New Policy</span>
        </button>
      </div>

      {/* 4 Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Pending Verification</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--primary)] mt-1">{verifications.length}</p>
          <span className="text-[11px] text-[var(--primary)] font-semibold">Action required</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Verified Employee Files</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--secondary-700)] mt-1">249</p>
          <span className="text-[11px] text-stone-500 font-medium">SOC-2 compliant</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Active Company Policies</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--secondary)] mt-1">8</p>
          <span className="text-[11px] text-stone-500 font-medium">Published handbook</span>
        </div>

        <div className="rounded-[24px] border border-stone-200 bg-stone-50/70 p-4 sm:p-5">
          <p className="text-xs font-semibold text-stone-500">Acknowledgment Rate</p>
          <p className="text-2xl sm:text-3xl font-black text-[var(--primary-700)] mt-1">98%</p>
          <span className="text-[11px] text-[var(--secondary-600)] font-semibold">High compliance</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
        <button
          onClick={() => setActiveTab("verification")}
          className={`relative rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
            activeTab === "verification"
              ? "bg-stone-900 text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          <span>Employee Document Queue</span>
          {verifications.length > 0 && (
            <span className="ml-2 rounded-full bg-[var(--primary)] text-white px-1.5 py-0.2 text-[10px] font-bold">
              {verifications.length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab("policies")}
          className={`rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition ${
            activeTab === "policies"
              ? "bg-stone-900 text-white shadow-xs"
              : "text-stone-600 hover:text-stone-900 hover:bg-stone-100"
          }`}
        >
          Company Policies & Handbooks
        </button>
      </div>

      {/* Verification Queue */}
      {activeTab === "verification" && (
        <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-xs">
          {verifications.length === 0 ? (
            <div className="p-12 text-center text-stone-400">
              <CheckCircle2 size={36} className="mx-auto text-[var(--secondary-500)] mb-2" />
              <p className="font-bold text-stone-700">All caught up!</p>
              <p className="text-xs">No pending document verifications.</p>
            </div>
          ) : (
            <div className="divide-y divide-stone-100">
              {verifications.map((item) => (
                <div key={item.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[var(--primary-50)] text-[var(--primary)] flex items-center justify-center shrink-0">
                      <FileText size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-stone-900">{item.employee}</p>
                        <span className="text-[10px] font-bold bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                          {item.department}
                        </span>
                      </div>
                      <p className="text-xs text-stone-700 font-semibold mt-0.5">{item.docType}</p>
                      <p className="text-[11px] text-stone-400 mt-0.5 font-mono">
                        {item.fileName} • Submitted: {item.submittedOn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleVerify(item.id, true)}
                      className="inline-flex items-center gap-1 rounded-xl bg-[var(--secondary-600)] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[var(--secondary-700)] transition"
                    >
                      <Check size={13} />
                      <span>Approve & Verify</span>
                    </button>
                    <button
                      onClick={() => handleVerify(item.id, false)}
                      className="inline-flex items-center gap-1 rounded-xl border border-stone-200 px-3.5 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-100 transition"
                    >
                      <X size={13} />
                      <span>Reject</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Policies List */}
      {activeTab === "policies" && (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[24px] border border-stone-200 bg-white shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="border-b border-stone-200 bg-stone-50/70 text-[11px] font-bold uppercase tracking-wider text-stone-500">
                  <tr>
                    <th className="px-5 py-3.5">Policy Title</th>
                    <th className="px-5 py-3.5">Category</th>
                    <th className="px-5 py-3.5">Published Date</th>
                    <th className="px-5 py-3.5">Acknowledgment Rate</th>
                    <th className="px-5 py-3.5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {companyPolicies.map((pol) => (
                    <tr key={pol.id} className="hover:bg-stone-50/60 transition">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <FileCheck2 size={16} className="text-[var(--secondary)]" />
                          <div>
                            <p className="font-bold text-stone-900">{pol.title}</p>
                            <p className="text-[10px] text-stone-400 font-mono">{pol.fileName}</p>
                          </div>
                        </div>
                      </td>

                      <td className="px-5 py-3.5">
                        <span className="rounded-md bg-stone-100 text-stone-600 px-2 py-0.5 text-xs font-semibold">
                          {pol.category}
                        </span>
                      </td>

                      <td className="px-5 py-3.5 text-stone-600 text-xs">
                        {pol.published}
                      </td>

                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-24 rounded-full bg-stone-100 overflow-hidden">
                            <div
                              className="h-full rounded-full bg-[var(--secondary-500)]"
                              style={{ width: `${pol.signedPct}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-stone-800">{pol.signedCount}</span>
                        </div>
                      </td>

                      <td className="px-5 py-3.5 text-right">
                        <button
                          onClick={() => toast.success(`Downloading ${pol.fileName}`)}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200 px-3 py-1.5 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition"
                        >
                          <DownloadCloud size={13} className="text-[var(--primary)]" />
                          <span>Download</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDocuments;
