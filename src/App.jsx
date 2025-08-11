import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import FAQs from "./pages/FAQs";
import Others from "./pages/Others";

import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import DocumentTitleManager from "./components/DocumentTitleManager";

export default function App() {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <DocumentTitleManager />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<PrivacyPolicy initialTab="terms" />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aml" element={<PrivacyPolicy initialTab="aml" />} />
        <Route path="/others" element={<Others />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}
