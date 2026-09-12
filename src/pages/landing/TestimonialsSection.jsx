import { Quote, Play } from "lucide-react";

const testimonials = [
  {
    name: "Ashley Cooper",
    role: "VP of People & Culture",
    company: "Apex Technologies",
    quote:
      "This platform completely changed how our team works. Attendance tracking, leave requests, and payroll reconciliation feel 10x faster, cleaner, and way more organized.",
  },
  {
    name: "Noah Jain",
    role: "Founder & CEO",
    company: "ScaleGrid Logistics",
    quote:
      "The onboarding was smooth and customer support has been fantastic. We eliminated buddy punching across our 3 warehouses within the first week.",
  },
  {
    name: "Gabriel Jackson",
    role: "Operations Director",
    company: "Nordic Design Labs",
    quote:
      "Payroll used to take 3 full days of manual spreadsheet cross-checking — now it's instant with verified biometric logs and 1-click payslips.",
  },
  {
    name: "William Lee",
    role: "Engineering Manager",
    company: "Hyperion Systems",
    quote:
      "We scaled from 20 to 180 engineers without missing a beat. The self-service employee portal gives everyone instant visibility on leaves and documents.",
  },
];

function TestimonialCard({ name, role, company, quote }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100">
        <Quote size={14} className="text-indigo-600" />
      </span>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{quote}</p>
      <div className="mt-5 flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-xs font-bold text-indigo-700">
          {name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-800 leading-tight">{name}</p>
          <p className="text-[11px] text-slate-400">{role} • {company}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-white px-6 py-20 sm:px-10 lg:py-28 border-t border-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/80 px-3.5 py-1 text-xs font-semibold text-indigo-600">
            Social Proof
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            Join thousands of happy HR leaders and employees who trust our CRM to manage attendance, leaves, and payroll.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />

          {/* Video testimonial — spans both rows on the right */}
          <div className="relative row-span-2 overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 p-6 text-white shadow-xl flex flex-col justify-between min-h-[320px]">
            <div className="absolute inset-0 bg-radial-gradient from-indigo-500/20 via-transparent to-transparent opacity-70" />

            <div className="relative z-10">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold text-indigo-300 uppercase tracking-wider backdrop-blur-md">
                Customer Spotlight
              </span>
              <h3 className="mt-4 text-xl font-bold leading-snug">
                How Apex Tech cut payroll prep from 4 days to 15 minutes.
              </h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Watch Elena Rostova (VP of People) walk through their full migration to StaffSync CRM.
              </p>
            </div>

            <div className="relative z-10 flex items-center justify-between pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button
                  aria-label="Play testimonial video"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-110"
                >
                  <Play size={18} className="ml-1 fill-indigo-600 text-indigo-600" />
                </button>
                <span className="text-xs font-semibold text-white">Watch Case Study (2:14)</span>
              </div>
            </div>
          </div>

          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
        </div>
      </div>
    </section>
  );
}