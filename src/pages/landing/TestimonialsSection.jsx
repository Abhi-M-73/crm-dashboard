import { Quote, Play } from "lucide-react";

const testimonials = [
  {
    name: "Ashley Cooper",
    quote:
      "This platform completely changed how our team works. Everything feels faster, cleaner, and way more organized than before.",
  },
  {
    name: "Noah Jain",
    quote:
      "The onboarding was smooth and support has been fantastic. We saw real results within the first two weeks of switching over.",
  },
  {
    name: "Gabriel Jackson",
    quote:
      "Reporting used to take hours — now it's instant. The dashboards give us exactly what we need to make quick decisions.",
  },
  {
    name: "Ashley Cooper",
    quote:
      "Customer support is genuinely responsive, and the product keeps getting better with every update they ship.",
  },
  {
    name: "William Lee",
    quote:
      "We scaled from 5 to 50 people on this tool without missing a beat. It just grows with us, no friction at all.",
  },
];

function TestimonialCard({ name, quote }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
      <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100">
        <Quote size={14} className="text-indigo-600" />
      </span>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{quote}</p>
      <div className="mt-5 flex items-center gap-2.5">
        <div className="h-8 w-8 rounded-full bg-violet-100" />
        <p className="text-sm font-semibold text-slate-800">{name}</p>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            Join thousands of happy users who trust our CRM to grow their
            business faster.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />

          {/* Video testimonial — spans both rows on the right */}
          <div className="relative row-span-2 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 to-violet-100 shadow-sm">
            <div className="flex h-full min-h-[260px] items-center justify-center">
              <div className="flex flex-col items-center gap-2 text-indigo-300">
                <span className="text-xs font-medium">Customer video</span>
              </div>
            </div>
            <button
              aria-label="Play testimonial video"
              className="absolute bottom-5 left-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105"
            >
              <Play size={16} className="ml-0.5 fill-indigo-600 text-indigo-600" />
            </button>
          </div>

          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
        </div>
      </div>
    </section>
  );
}