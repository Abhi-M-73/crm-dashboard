import HeroSection from "./landing/HeroSection";
import FeaturesSection from "./landing/FeaturesSection";
import AutomationSection from "./landing/AutomationSection";
import InsightsSection from "./landing/InsightsSection";
import TestimonialsSection from "./landing/TestimonialsSection";
import Footer from "../components/common/Footer";

const LandingPage = () => {
  return (
    <div className="bg-white text-slate-900 antialiased selection:bg-indigo-500 selection:text-white">
      <HeroSection />
      <FeaturesSection />
      <AutomationSection />
      <InsightsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
