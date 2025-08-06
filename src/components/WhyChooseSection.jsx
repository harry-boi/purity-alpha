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
      className="bg-white py-16 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-8xl mx-auto px-5">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center text-[#002A32] mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Why Choose Purity Capital?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-4 w-full mb-16">
          {/* Card 1 */}
          <motion.div
            className="bg-[#f7fce7] rounded-2xl p-8 py-6 text-center flex flex-col items-center"
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-20 h-16 mb-4 flex items-center justify-center bg-[#F7F6DA] rounded-full">
              {/* Shield Icon */}
              <img
                src={`${import.meta.env.BASE_URL}securedimage.png`}
                className="h-10"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mt-5">
              Secure & Encrypted Transactions
            </h3>
            <p className="text-[#1A1A1A] text-sm leading-relaxed mb-12 font-normal">
              Your data and funds are protected with bank-grade encryption and
              advanced security protocols. Every transaction is safe, private,
              and fully traceable.
            </p>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="bg-[#f7f7fd] rounded-2xl p-8 py-6 text-center flex flex-col items-center"
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-20 h-16 mb-4 flex items-center justify-center bg-[#F4F0FF] rounded-full">
              {/* Chart Icon */}
              <img
                src={`${import.meta.env.BASE_URL}roi_image.png`}
                className="h-10"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mt-5">
              Smart, Transparent ROI System
            </h3>
            <p className="text-[#1A1A1A] text-sm leading-relaxed">
              Track your investment performance in real-time. Our system is
              designed to show you exactly how your earnings grow. No fixed
              promises, just real market results.
            </p>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="bg-[#e7faf7] rounded-2xl p-8 pb-10 text-center flex flex-col items-center"
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-20 h-16 mb-4 flex items-center justify-center bg-[#DDF2EB] rounded-full">
              {/* No Fee Icon */}
              <img
                src={`${import.meta.env.BASE_URL}nohidden_charges.png`}
                className="h-10"
              />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mt-5">
              Zero Hidden Charges
            </h3>
            <p className="text-[#1A1A1A] text-sm leading-relaxed">
              What you see is what you get. No surprise fees, no hidden costs —
              just honest crypto savings, loans, and investments.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
