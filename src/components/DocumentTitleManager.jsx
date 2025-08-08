import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TITLES = {
  "/": "Home | Purity Capital",
  "/privacy": "Privacy Policy | Purity Capital",
  "/terms": "Terms of Use | Purity Capital",
  "/aml": "AML Policy | Purity Capital",
  "/faqs": "FAQs | Purity Capital",
  "/contact": "Contact Us | Purity Capital",
};

export default function DocumentTitleManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    document.title = TITLES[path] || "Purity Capital";
  }, [location]);

  return null;
}
