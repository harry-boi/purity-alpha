import React from "react";
import LoansSection from "./components/LoansSection";
import HeroSection from "./components/HeroSection";
import WhyChooseSection from "./components/WhyChooseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PartnerLogosSection from "./components/PartnerLogosSection";
import ExperienceSmartFinanceSection from "./components/ExperienceSmartFinanceSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen font-sans w-full">
      {/* Top Section */}
      <HeroSection />
      {/* Second Section - Loans */}
      <LoansSection />
      {/* Why Choose Purity Capital Section */}
      <WhyChooseSection />
      {/* Testimonials Section */}
      <TestimonialsSection />
      {/* Partner Logos Section */}
      <PartnerLogosSection />
      {/* Experience Smart Finance Section */}
      <ExperienceSmartFinanceSection />

      {/* FAQ Section */}
      <FAQSection />
      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}
