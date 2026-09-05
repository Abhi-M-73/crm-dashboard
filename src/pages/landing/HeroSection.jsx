// import React from "react";
// import { ArrowRight, Sparkles } from "lucide-react";
// import { Link } from "react-router-dom";

// const HeroSection = () => {
//   return (
//     <section className="relative overflow-hidden bg-bg text-text">
//       {/* Background Glow */}
//       <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

//       <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">

//         <div className="mx-auto max-w-4xl text-center">

//           {/* Badge */}
//           <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-medium text-primary sm:text-sm">
//             <Sparkles size={15} />
//             Powerful Dashboard Platform
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
//             Manage Everything
//             <span className="block text-primary">
//               From One Dashboard
//             </span>
//           </h1>

//           {/* Description */}
//           <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text/60 sm:text-lg">
//             A simple and powerful dashboard to manage your account,
//             track your activities, and access everything from one place.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

//             <Link
//               to="/register"
//               className="
//                 flex w-full items-center justify-center gap-2
//                 rounded-xl
//                 bg-primary
//                 px-6 py-3.5
//                 text-sm font-semibold text-white
//                 transition
//                 hover:bg-primary/90
//                 active:scale-[0.98]
//                 sm:w-auto
//               "
//             >
//               Get Started
//               <ArrowRight size={18} />
//             </Link>

//             <Link
//               to="/login"
//               className="
//                 flex w-full items-center justify-center
//                 rounded-xl
//                 border border-text/10
//                 bg-primary/5
//                 px-6 py-3.5
//                 text-sm font-semibold
//                 text-text
//                 transition
//                 hover:border-primary/30
//                 hover:bg-primary/10
//                 sm:w-auto
//               "
//             >
//               Login
//             </Link>

//           </div>

//           {/* Bottom Stats */}
//           <div className="mx-auto mt-14 grid max-w-xl grid-cols-3 divide-x divide-text/10 border-y border-text/10 py-5">

//             <div>
//               <p className="text-xl font-bold text-primary sm:text-2xl">
//                 24/7
//               </p>
//               <p className="mt-1 text-xs text-text/50">
//                 Access
//               </p>
//             </div>

//             <div>
//               <p className="text-xl font-bold text-primary sm:text-2xl">
//                 100%
//               </p>
//               <p className="mt-1 text-xs text-text/50">
//                 Secure
//               </p>
//             </div>

//             <div>
//               <p className="text-xl font-bold text-primary sm:text-2xl">
//                 Fast
//               </p>
//               <p className="mt-1 text-xs text-text/50">
//                 Performance
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



"use client";

import Hero24 from "../../components/originkit/hero-24";

const HeroSection = () => <Hero24 />;

export default HeroSection;