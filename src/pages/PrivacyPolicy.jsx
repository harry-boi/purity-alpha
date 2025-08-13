import React, { useState } from "react";
import ExperienceSmartFinanceSection from "../components/ExperienceSmartFinanceSection";

const tabs = [
  {
    label: "Privacy Policy",
    key: "privacy",
    title: "Privacy Matters to Us",
    subtitle:
      "We're committed to protecting your personal data and ensuring transparency in how we collect, use, and store your information.",
  },
  {
    label: "Terms of Use",
    key: "terms",
    title: "Our Terms of Use",
    subtitle:
      "Please read our terms carefully before using our services. By using our platform, you agree to be bound by them.",
  },
  {
    label: "AML Policy",
    key: "aml",
    title: "Anti-Money Laundering Policy",
    subtitle:
      "We comply with AML regulations to protect our users and ensure a safe financial environment on our platform.",
  },
];

export default function PrivacyPolicy({ initialTab }) {
  const [activeTab, setActiveTab] = useState(
    initialTab && ["privacy", "terms", "aml"].includes(initialTab)
      ? initialTab
      : "privacy"
  );

  const currentTab = tabs.find((tab) => tab.key === activeTab);

  return (
    <div className="min-h-screen bg-white text-gray-800 pb-20">
      <div
        className="w-full pb-20 pt-14 text-white text-center"
        style={{
          backgroundImage: `url('${
            import.meta.env.BASE_URL
          }background_image.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-5">
          <div className="text-3xl font-bold mb-3">{currentTab.title}</div>
          <p className="mb-6 text-center">{currentTab.subtitle}</p>
          <div className="hidden md:flex justify-center gap-4 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`px-5 py-3 rounded-2xl font-medium ${
                  activeTab === tab.key
                    ? "bg-white text-green-900"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="hidden md:block w-full lg:w-1/4 space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`block text-left px-4 py-2 rounded-md transition ${
                activeTab === tab.key
                  ? "bg-[#F9FFEA] text-green-900 font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
              style={{ minWidth: "120px" }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4">
          <h1 className="text-3xl font-bold mb-2">{currentTab.label}</h1>
          <p className="text-sm text-gray-500 mb-6">
            Last updated: June 23rd, 2025
          </p>
          <div className="text-gray-700 space-y-4">
            {activeTab === "privacy" && (
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Ornare fringilla enim
                  erat sed sed vel tortor. Consectetur est nisi risus ipsum id
                  pretium. Duis mollis malesuada cursus amet elementum eu neque
                  tempor elit.
                </p>
                <p>
                  In sagittis at vestibulum amet rutrum gravida. Egestas nulla
                  lacus eu aliquam. Feugiat quisque sapien malesuada et interdum
                  vulputate egestas. At pellentesque pulvinar mauris morbi
                  egestas diam erat quam.
                </p>
                <p>
                  Nunc a habitant vestibulum arcu imperdiet tortor interdum. Nec
                  ultricies urna consequat feugiat turpis. Tellus consectetur
                  libero sit placerat accumsan in commodo et.
                </p>
              </>
            )}
            {activeTab === "terms" && (
              <>
                <p>
                  By accessing or using Purity Capital, you agree to comply with
                  and be bound by these Terms of Use. Please read them
                  carefully.
                </p>
                <p>
                  <strong>1. Eligibility:</strong> You must be at least 18 years
                  old and have the legal capacity to enter into a binding
                  agreement to use our services.
                </p>
                <p>
                  <strong>2. Account Responsibility:</strong> You are
                  responsible for maintaining the confidentiality of your
                  account credentials and for all activities that occur under
                  your account.
                </p>
                <p>
                  <strong>3. Prohibited Activities:</strong> You agree not to
                  use the platform for any unlawful, fraudulent, or abusive
                  purpose, including but not limited to money laundering,
                  terrorist financing, or violating any applicable laws.
                </p>
                <p>
                  <strong>4. Risk Disclosure:</strong> Investing in crypto
                  assets involves risk. You acknowledge and accept all risks
                  associated with your investment decisions.
                </p>
                <p>
                  <strong>5. Changes to Terms:</strong> We reserve the right to
                  update these Terms of Use at any time. Continued use of the
                  platform constitutes acceptance of the revised terms.
                </p>
                <p>
                  For full details, please contact our support team or visit our
                  website.
                </p>
              </>
            )}
            {activeTab === "aml" && (
              <>
                <p>
                  Purity Capital is committed to complying with all applicable
                  Anti-Money Laundering (AML) laws and regulations. We have
                  implemented robust policies and procedures to detect, prevent,
                  and report suspicious activities.
                </p>
                <p>
                  <strong>1. Customer Verification:</strong> All users must
                  complete identity verification (KYC) before accessing certain
                  services.
                </p>
                <p>
                  <strong>2. Monitoring & Reporting:</strong> Transactions are
                  monitored for suspicious activity. Any suspicious transactions
                  will be reported to the relevant authorities.
                </p>
                <p>
                  <strong>3. Cooperation:</strong> We cooperate fully with law
                  enforcement and regulatory agencies as required by law.
                </p>
                <p>
                  For more information about our AML policy, please contact our
                  compliance team.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
      <ExperienceSmartFinanceSection />
    </div>
  );
}
