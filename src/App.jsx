import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";

import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<PrivacyPolicy initialTab="terms" />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aml" element={<PrivacyPolicy initialTab="aml" />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}
