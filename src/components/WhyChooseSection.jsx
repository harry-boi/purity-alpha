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
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseSection() {
  return (
    <motion.section
      className="bg-white py-16 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Why Choose Purity Capital?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <motion.div
            className="bg-[#f7fce7] rounded-2xl p-8 text-center flex flex-col items-center shadow-sm"
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full shadow">
              {/* Shield Icon */}
              <img src="/securedimage.png" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Secure & Encrypted Transactions
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Your data and funds are protected with bank-grade encryption and
              advanced security protocols. Every transaction is safe, private,
              and fully traceable.
            </p>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="bg-[#f7f7fd] rounded-2xl p-8 text-center flex flex-col items-center shadow-sm"
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full shadow">
              {/* Chart Icon */}
              <img src="/roi_image.png" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Smart, Transparent ROI System
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Track your investment performance in real-time. Our system is
              designed to show you exactly how your earnings grow. No fixed
              promises, just real market results.
            </p>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="bg-[#e7faf7] rounded-2xl p-8 text-center flex flex-col items-center shadow-sm"
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full shadow">
              {/* No Fee Icon */}
              <img src="nohidden_charges.png" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Zero Hidden Charges
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              What you see is what you get. No surprise fees, no hidden costs —
              just honest crypto savings, loans, and investments.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
