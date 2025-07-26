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
  return (
    <motion.section
      className="bg-[#F6F6F6] py-16 mt-20 px-4 md:px-0 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Icon and Heading */}
        <motion.div
          className="flex flex-col items-start text-left gap-4"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="faq_icon.png"
            alt="FAQ Icon"
            className="w-16 h-16 md:w-20 md:h-20 mb-2"
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
          {[
            "How does Purity Capital investment work?",
            "Is my crypto safe on Purity Capital?",
            "Can I withdraw my savings at any time?",
            "What do I need to get a crypto loan?",
            "How long before my investment starts earning ROI?",
          ].map((q, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-gray-200 pb-4"
            >
              <span className="text-gray-900 font-medium text-base md:text-sm">
                {q}
              </span>
              <svg
                className="w-5 h-5 text-gray-500"
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
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
