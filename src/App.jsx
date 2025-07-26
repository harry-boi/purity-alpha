import React from "react";
import { motion } from "framer-motion";
import illustration2 from "/src/assets/illustration2.png";
import illustration1 from "/src/assets/illustration1.png";

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

export default function App() {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="min-h-screen font-sans w-full">
      {/* Top Section */}
      <motion.div
        className="relative overflow-hidden w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        {/* Feature Cards */}
        <motion.div
          className="container w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 w-full md:pl-30 pl-10 py-6 h-full md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <motion.div
              className="flex items-start space-x-3"
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-8 h-8 rounded flex items-center justify-center">
                {/* Lock Icon */}
                <img src="/securedimage.png" />
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
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-8 h-8 rounded flex items-center justify-center">
                {/* ROI Icon */}
                <img src="/roi_image.png" />
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
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-8 h-8 rounded flex items-center justify-center">
                {/* Fee Icon */}
                <img src="/nohidden_charges.png" />
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
          className="mx-auto px-6 pb-16 bg-[#F9FFEA] w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full px-20 py-20">
            {/* Left */}
            <motion.div
              className="space-y-6"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-[#123017] leading-tight">
                Save, Invest and Earn
                <br />
                Interest in Crypto
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Earn daily interest with flexible or locked USDT savings and
                investment plans.
              </p>
              <button className="hover:bg-gray-800 mt-10 text-[#123017] font-medium py-3 rounded-full flex items-center">
                <span className="mr-3">Get Started Today</span>
                <img src="nextarrowicon.png" className="w-4 h-4 align-baseline"/>
              </button>
            </motion.div>
            {/* Right - Illustration */}
            <motion.div
              className="relative min-h-[350px] flex items-center justify-center"
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Placeholder for person */}
              <div className="w-96 h-80 rounded-lg overflow-hidden relative z-20 flex items-center justify-center">
                <img src={illustration1} alt="Illustration" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-12 -left-4 z-30 bg-[#004E9C] text-white p-3 rounded-lg shadow-lg w-52">
                <h3 className="font-semibold text-sm">Lagos Big Boys/Girls</h3>
                <p className="text-xl font-bold">$5,000</p>
                <div className="flex items-center space-x-3 text-xs mt-1">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>365 Days</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <span>15% p.a</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-16 right-2 z-30 bg-[#FFF9DC] text-gray-900 p-3 rounded-lg shadow-lg w-48">
                <h3 className="font-semibold text-sm">Ileya Reloaded</h3>
                <p className="text-xl font-bold">$250</p>
                <div className="flex items-center space-x-3 text-xs mt-1">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>30 Days</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    <span>12% p.a</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      {/* Second Section - Loans */}
      <motion.div
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-1 items-center">
          {/* Left - Woman Illustration */}
          <motion.div
            className="flex justify-center relative"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative rounded-lg flex items-center justify-center overflow-hidden">
              <img src={illustration2} className="w-2/3" />
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
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Get instant low
              <br />
              interest Crypto Loans
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Access instant loans secured by your BTC, with flexible or fixed
              repayment options.
            </p>
            <button className="py-3 font-medium rounded-full text-[#1A4420] flex items-center">
              <span>Get Started Today</span>
              <img src="/nextarrowicon.png" className="w-4 h-4 ml-2" />
            </button>
          </motion.div>
        </div>
      </motion.div>
      {/* Why Choose Purity Capital Section */}
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
                What you see is what you get. No surprise fees, no hidden costs
                — just honest crypto savings, loans, and investments.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Testimonials Section */}
      <motion.section
        className="bg-white pb-20 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center text-green-900 mb-2 mt-2"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Testimonials
          </motion.h2>
          <motion.p
            className="text-center text-gray-700 mb-10"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            See what users are saying about their PurityCapital App experience.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {/* Testimonial 1 */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex flex-col"
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-700 font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 leading-tight">
                    John Doe
                  </h4>
                  <p className="text-gray-500 text-xs">@johndoes</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                Purity Capital made it so easy to save in crypto. I started with
                a flexible plan, and watching my USDT grow daily has been a game
                changer!
              </p>
            </motion.div>
            {/* Testimonial 2 */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex flex-col"
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-700 font-bold">J</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 leading-tight">
                    Jane Smith
                  </h4>
                  <p className="text-gray-500 text-xs">@janesmith</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                Investing with Purity Capital was a breeze! The user-friendly
                interface and rapid gains in my crypto portfolio have exceeded
                my expectations.
              </p>
            </motion.div>
            {/* Testimonial 3 */}
            <motion.div
              className="bg-white rounded-2xl p-6 shadow border border-gray-100 flex flex-col"
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                  <span className="text-gray-700 font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 leading-tight">
                    Michael Tan
                  </h4>
                  <p className="text-gray-500 text-xs">@michaeltan</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-1">
                I appreciate how Purity Capital offers tailored investment
                plans. My crypto savings have seen incredible growth, making me
                more confident in my financial future!
              </p>
            </motion.div>
          </div>
          {/* Centered Arrow Button below testimonials */}
          <div className="flex justify-center mt-8">
            <button className="w-10 h-10 bg-lime-300 rounded-full flex items-center justify-center shadow-md hover:bg-lime-400 transition-colors">
              <svg
                className="w-5 h-5 text-green-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.section>
      {/* Partner Logos Section */}
      <motion.section
        className="bg-white py-12 px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl md:text-2xl font-bold text-center text-gray-900 mb-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            We have partnered with the best in the market
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Google Partner */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <img src="/google_partner.png" alt="Google Partner" className="mr-1 w-38" />
              </div>
            </div>
            {/* Shopify Partner */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <img src="/shopify_partner.png" alt="Shopify Partner" className="w-38" />
              </div>
            </div>
            {/* Amazon Advertising */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <img src="/amazon_partner.png" alt="Amazon Advertising" className="w-38" />
              </div>
            </div>
            {/* Meta Partner */}
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-1">
                <img src="/meta_partner.png" alt="Meta Partner" className="w-38" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      {/* Experience Smart Finance Section */}
      <motion.section
  className="py-10 px-4 md:px-0"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={fadeInUp}
>
  <div className="max-w-6xl mx-auto">
    <section className="bg-[#003300] rounded-xl overflow-hidden">
      <div
        className="relative w-full h-full px-6 pt-12 min-h-[650px] md:min-h-0 md:pb-32 md:px-16 md:pt-24 bg-no-repeat bg-cover bg-center rounded-[20px] flex flex-col md:flex-row items-center md:items-start justify-between"
        style={{ backgroundImage: "url('/background_image.png')" }}
      >
        {/* Left Content */}
        <div className="text-white w-full md:w-1/2 text-center md:text-left z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Experience smart finance <br className="hidden sm:block" /> with Purity Capital
          </h2>
          <p className="mb-6 text-base sm:text-lg">
            Securely grow, save, and invest your digital assets on <br className="hidden sm:block" />
            a trusted platform designed for everyday users.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-4">
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <img src="/apple_logo.png" alt="Apple" className="w-5" />
              Get on iPhone
            </a>
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2"
            >
              <img src="/android_logo.png" alt="Android" className="w-5" />
              Get on Android
            </a>
          </div>

          <div className="text-sm my-6 sm:my-8 flex justify-center md:justify-start items-center gap-2">
            <span>🌟 4.8 app performance rating</span>
          </div>

          {/* Mobile Phone Image fixed at bottom */}
          <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img
              src="/phone.png"
              alt="Phone Mockup"
              className="w-[260px] sm:w-[280px] object-contain"
            />
          </div>

        </div>

        {/* Desktop Phone Image */}
        <img
          src="/phone.png"
          alt="Phone Mockup"
          className="hidden md:block absolute bottom-0 right-6 lg:right-12 w-[280px] lg:w-[300px] object-contain z-0"
        />
      </div>
    </section>
  </div>
</motion.section>



      {/* FAQ Section */}
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
              src="/faq_icon.png"
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
                <span className="text-gray-900 font-medium text-base md:text-sm">{q}</span>
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
      {/* Footer Section */}
      <motion.footer
        className="bg-[#101515] text-white px-4 md:px-16 pt-14 pb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <footer className="text-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-20 mb-8">
              {/* Left Column - Logo & Contact */}
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/purity_capital_logo.png" />
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>Purity Community Estate, Plot 223/842 Lekki,</p>
                  <p>Lagos State, Nigeria</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-gray-400"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 6.67773L9.41302 10.5947C11.9616 12.0387 13.0384 12.0387 15.587 10.5947L22.5 6.67773" stroke="#F9FAFB" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M2.51577 14.1534C2.58114 17.2189 2.61383 18.7517 3.74496 19.8871C4.87608 21.0225 6.45033 21.0621 9.59883 21.1412C11.5393 21.1899 13.4607 21.1899 15.4012 21.1412C18.5497 21.0621 20.1239 21.0225 21.2551 19.8871C22.3862 18.7517 22.4189 17.2189 22.4842 14.1534C22.5053 13.1677 22.5053 12.1878 22.4842 11.2021C22.4189 8.1366 22.3862 6.60383 21.2551 5.4684C20.1239 4.33297 18.5497 4.29341 15.4012 4.2143C13.4607 4.16555 11.5393 4.16554 9.59882 4.2143C6.45033 4.2934 4.87608 4.33295 3.74495 5.46838C2.61382 6.60381 2.58114 8.13658 2.51576 11.2021C2.49474 12.1878 2.49475 13.1677 2.51577 14.1534Z" stroke="#F9FAFB" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
</span>
                    <span>info@puritycapital.app</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 7.17773C16.4377 5.46526 16.2251 4.42782 15.4988 3.70286C14.4718 2.67773 12.8188 2.67773 9.51289 2.67773C6.20698 2.67773 4.55403 2.67773 3.52701 3.70286C2.5 4.72799 2.5 6.3779 2.5 9.67773V15.6777C2.5 18.9776 2.5 20.6275 3.52701 21.6526C4.55403 22.6777 6.20698 22.6777 9.51289 22.6777C12.8188 22.6777 14.4718 22.6777 15.4988 21.6526C16.2251 20.9276 16.4377 19.8902 16.5 18.1777" stroke="#F9FAFB" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8.5 19.6777H10.5" stroke="#F9FAFB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 12.6686L16.5 12.6775M20.5483 17.1689C21.7541 16.0173 22.5 14.4263 22.5 12.6689C22.5 10.9116 21.7541 9.3206 20.5483 8.16895M18.5 10.4189C19.1029 10.9948 19.4759 11.7903 19.4759 12.6689C19.4759 13.5476 19.1029 14.3431 18.5 14.9189" stroke="#F9FAFB" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6.5 2.67773L6.589 3.21175C6.78188 4.36903 6.87832 4.94767 7.27519 5.29978C7.68918 5.66708 8.27614 5.67773 9.5 5.67773C10.7239 5.67773 11.3108 5.66708 11.7248 5.29978C12.1217 4.94767 12.2181 4.36902 12.411 3.21175L12.5 2.67773" stroke="#F9FAFB" stroke-width="1.5" stroke-linejoin="round"/>
</svg>
</span>
                    <span>+234(0)8160000000</span>
                  </div>
                  <p className="mt-3">Add License Details below</p>
                </div>
              </div>
              {/* Right Column - Links & Newsletter */}
              <div className="w-full lg:w-2/3 flex flex-col">
                <div className="w-full flex md:justify-end">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full md:w-[80%] lg:w-[75%]">
                  {/* Quick Links */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Quick Links</h3>
                    <div className="space-y-3">
                      <a href="/" className="block text-gray-300 hover:text-white text-sm transition-colors">Home</a>
                      <a href="/faqs" className="block text-gray-300 hover:text-white text-sm transition-colors">FAQs</a>
                      <a href="/contact" className="block text-gray-300 hover:text-white text-sm transition-colors">Contact us</a>
                    </div>
                  </div>
                  {/* Policy */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Policy</h3>
                    <div className="space-y-3">
                      <a href="/privacy" className="block text-gray-300 hover:text-white text-sm transition-colors">Privacy Policy</a>
                      <a href="/terms" className="block text-gray-300 hover:text-white text-sm transition-colors">Terms of Use</a>
                      <a href="/aml" className="block text-gray-300 hover:text-white text-sm transition-colors">AML Policy</a>
                    </div>
                  </div>
                  {/* Socials */}
                  <div>
                    <h3 className="text-white font-semibold mb-4">Socials</h3>
                    <div className="space-y-3">
                      <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">Instagram</a>
                      <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">X (Twitter)</a>
                      <a href="#" className="block text-gray-300 hover:text-white text-sm transition-colors">Facebook</a>
                    </div>
                  </div>
                </div>
                </div> {/* close grid links wrapper */}
                {/* Newsletter Under Links, left-aligned under Quick Links */}
                <div className="w-full md:w-[80%] lg:w-[75%] mt-2">
                  <div className="text-sm text-gray-300 mb-4 text-left">
                    <p>Sign up now to follow investment tips & exclusive deals offers and updates from us</p>
                  </div>
                  <h3 className="text-white font-semibold mb-4 text-left">SUBSCRIBE TO NEWSLETTER</h3>
                  <div className="space-y-3 flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-3">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full md:w-auto flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm"
                    />
                    <button className="w-full md:w-auto px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md transition-colors text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Copyright */}
            <div className="border-t border-gray-600 pt-6 text-center">
              <p className="text-gray-400 text-sm">PurityCapital© 2025 - All Right Reserved</p>
            </div>
          </div>
        </footer>
      </motion.footer>
    </div>
  );
}
