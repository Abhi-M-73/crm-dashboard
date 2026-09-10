import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import AutomationSection from "./landing/AutomationSection";
import FeaturesSection from "./landing/FeaturesSection";
import HeroSection from "./landing/HeroSection";
import InsightsSection from "./landing/InsightsSection";
import TestimonialsSection from "./landing/TestimonialsSection";

const LandingPage = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <HeroSection />
            <FeaturesSection />
            <AutomationSection />
            <InsightsSection />
            <TestimonialsSection />
            <Footer />
        </div>
    );
};

export default LandingPage
