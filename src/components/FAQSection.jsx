import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState(null);
  const faqs = [
    {
      q: "How does Purity Capital investment work?",
      a: "You invest your crypto assets into flexible or fixed plans. Your assets are securely held and start earning daily returns, which you can track in the app.",
    },
    {
      q: "Is my crypto safe on Purity Capital?",
      a: "Yes, we use industry-leading security protocols and store assets in secure, insured wallets. Your funds are protected at all times.",
    },
    {
      q: "Can I withdraw my savings at any time?",
      a: "You can withdraw from flexible plans at any time. Fixed plans have a lock-in period, after which you can withdraw your funds and earned interest.",
    },
    {
      q: "What do I need to get a crypto loan?",
      a: "You need to deposit supported crypto as collateral. Once approved, you can instantly borrow against your assets with low interest rates.",
    },
    {
      q: "How long before my investment starts earning ROI?",
      a: "Your investment starts earning ROI immediately after deposit confirmation. You can track your earnings in real time in the app.",
    },
  ];

  return (
    <motion.section
      className="bg-[#F6F6F6] py-16 mt-20 px-8 md:px-0 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Icon and Heading */}
        <motion.div
          className="flex flex-col items-start text-left gap-4"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}faq_icon.png`}
            alt="FAQ Icon"
            className="w-32 h-32 md:w-40 md:h-40 mb-2"
          />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Got Questions? We’ve
            <br />
            Got Answers.
          </h3>
        </motion.div>
        {/* Right - FAQ List */}
        <motion.div
          className="space-y-6"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-gray-900 font-medium text-base md:text-sm">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h8M12 8v8"
                  />
                </svg>
              </button>
              <motion.div
                id={`faq-answer-${i}`}
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pt-3 text-gray-700 text-sm md:text-base">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
