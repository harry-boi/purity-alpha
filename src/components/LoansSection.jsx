import { motion } from "framer-motion";
import illustration2 from "/src/assets/illustration2.png";

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

export default function LoansSection() {
  return (
    <motion.div
      className="bg-white py-16 overflow-x-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <div className="container text-center md:text-start mx-auto px-4 grid lg:grid-cols-2 gap-4 items-center">
        {/* Left - Woman Illustration */}
        <motion.div
          className="flex justify-center relative"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={illustration2}
              className="w-full max-w-[420px] md:max-w-[520px] lg:max-w-[600px]"
            />
          </div>
        </motion.div>
        {/* Right - Text */}
        <motion.div
          className="lg:pl-12"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-[#1A4420] mb-4">
            Get instant low
            <br />
            interest Crypto Loans
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Access instant loans secured by your BTC, with flexible or fixed
            repayment options.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="py-3 text-lg font-medium rounded-full text-[#1A4420] flex items-center">
              <span>Get Started Today</span>
              <img
                src={`${import.meta.env.BASE_URL}nextarrowicon.png`}
                className="w-4 h-4 ml-2"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
