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

export default function TestimonialsSection() {
  return (
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
              Purity Capital made it so easy to save in crypto. I started with a
              flexible plan, and watching my USDT grow daily has been a game
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
              interface and rapid gains in my crypto portfolio have exceeded my
              expectations.
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
              I appreciate how Purity Capital offers tailored investment plans.
              My crypto savings have seen incredible growth, making me more
              confident in my financial future!
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
  );
}
