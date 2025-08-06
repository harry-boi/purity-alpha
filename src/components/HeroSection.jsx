import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import illustration1 from "/src/assets/illustration1.png";
// Animation variants (copied from App.jsx)
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

export default function HeroSection() {
  return (
    <motion.div
      className="relative overflow-hidden w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeIn}
    >
      {/* Feature Cards */}
      <motion.div
        className="container w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 w-full px-4 sm:px-6 md:px-10 py-6 h-full md:grid-cols-3 gap-6 max-w-4xl lg:max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            className="flex items-start space-x-3"
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="w-8 h-8 rounded flex items-center justify-center">
              {/* Lock Icon */}
              <img src={`${import.meta.env.BASE_URL}securedimage.png`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Modern & Secured
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Your funds are secured with bank level security and modern
                encryption
              </p>
            </div>
          </motion.div>
          {/* Card 2 */}
          <motion.div
            className="flex items-start space-x-3"
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="w-8 h-8 rounded flex items-center justify-center">
              {/* ROI Icon */}
              <img src={`${import.meta.env.BASE_URL}roi_image.png`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Transparent ROI System
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Track your earnings in real time with our transparent system
              </p>
            </div>
          </motion.div>
          {/* Card 3 */}
          <motion.div
            className="flex items-start space-x-3"
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="w-8 h-8 rounded flex items-center justify-center">
              {/* Fee Icon */}
              <img src={`${import.meta.env.BASE_URL}nohidden_charges.png`} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Pay no Hidden Fees
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                No hidden charges, what you see is what you get
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Hero Section */}
      <motion.div
        className="mx-auto px-4 sm:px-6 text-center md:text-start md:px-10 pb-16 bg-[#F9FFEA] w-full overflow-x-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="grid grid-cols-1 md:px-16 lg:grid-cols-2 gap-4 md:gap-12 items-center w-full py-10 md:py-20">
          {/* Left */}
          <motion.div
            className="space-y-6 bg-blue sm:px-2 lg:px-16 md:px-0"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <TypeAnimation
              sequence={[
                "Save, Invest and Earn",
                1200,
                "Save, Invest and Earn\nInterest in Crypto",
                2000,
                "",
                500,
                <h1 className="text-2xl lg:text-5xl font-bold text-[#123017] leading-tight text-center lg:text-left">
                  Save, Invest and Earn
                  <br />
                  Interest in Crypto
                </h1>,
              ]}
              wrapper="h1"
              className="text-4xl lg:text-5xl font-bold text-[#123017] leading-tight whitespace-pre-line"
              speed={40}
              repeat={Infinity}
            />
            <p className="text-xl text-gray-600 leading-relaxed">
              Earn daily interest with flexible or locked USDT savings and
              investment plans.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="mt-10 text-lg text-[#123017] font-medium py-3 rounded-full flex items-center">
                <span className="mr-3">Get Started Today</span>
                <img
                  src={`${import.meta.env.BASE_URL}nextarrowicon.png`}
                  className="w-4 h-4 align-baseline"
                />
              </button>
            </div>
          </motion.div>
          {/* Right - Illustration */}
          <motion.div
            className="relative min-h-[400px] flex items-center justify-center"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Placeholder for person */}
            <div className="w-[550px] h-[400px] md:w-[600px] md:h-[500px] rounded-lg overflow-hidden relative z-20 flex items-center justify-center">
              <img
                src={illustration1}
                alt="Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
