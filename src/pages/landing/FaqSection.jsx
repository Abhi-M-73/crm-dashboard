import { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How fast can we migrate our existing employee database into the system?",
    a: "You can import your entire workforce roster in less than 2 minutes using our standard CSV/Excel bulk import template. Employee profiles, historical leaves, designations, and salary structures are mapped automatically with instant validation checks.",
  },
  {
    q: "How does geofenced mobile attendance prevent proxy and buddy punching?",
    a: "When employees punch in via the mobile app or browser, the system verifies their real-time device coordinates against your designated office geofence radius (e.g. 50 meters). Check-ins outside the authorized zone are either blocked or flagged as 'Remote / Regularization Needed' for managerial review.",
  },
  {
    q: "Does the 1-click payroll system automatically deduct taxes and unpaid leaves?",
    a: "Yes. The payroll engine automatically calculates gross pay, statutory tax withholding, health deductions, and loss-of-pay (LOP) days based on verified attendance logs. You can preview, edit one-off adjustments, and generate bulk PDF payslips with a single click.",
  },
  {
    q: "Can we configure multi-level leave approval hierarchies for different departments?",
    a: "Absolutely. You can set customized approval rules per department — for example, leave requests can go first to the immediate Project Squad Lead, and subsequently to the Department Head or HR Lead before final calendar synchronization.",
  },
  {
    q: "How secure is employee identity data and confidential payroll information?",
    a: "We implement 256-bit AES encryption at rest and TLS 1.3 in transit. Detailed role-based access control (RBAC) ensures employees only see their own payslips and documents, managers only access their direct reports, and only authorized HR Admins have full financial visibility.",
  },
  {
    q: "Can employees download payslips and submit document proofs from their phones?",
    a: "Yes! The employee portal is fully responsive across smartphones, tablets, and desktops. Employees can punch in/out, view remaining leave balances, download stamped monthly payslips, and upload identity proofs on the go without contacting HR.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="bg-stone-50/70 px-5 py-24 sm:px-8 lg:py-32 border-t border-stone-200/80">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white px-4 py-1.5 text-xs font-bold text-stone-700 shadow-2xs">
            <HelpCircle size={14} className="text-[#EA580C]" />
            Frequently Asked Questions
          </div>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-stone-900 sm:text-4xl">
            Everything You Need to Know
          </h2>

          <p className="mt-3 text-base text-stone-600">
            Have questions about implementation, data privacy, or payroll integration? We have answers.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left text-stone-900 font-bold text-sm sm:text-base hover:text-[#194E3A] transition"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-100 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-emerald-100 text-[#194E3A]" : "text-stone-500"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-sm leading-relaxed text-stone-600 border-t border-stone-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
