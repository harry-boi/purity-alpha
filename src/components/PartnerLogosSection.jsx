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

export default function PartnerLogosSection() {
  return (
    <motion.section
      className="bg-white py-12 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
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
              <img
                src="/google_partner.png"
                alt="Google Partner"
                className="mr-1 w-38"
              />
            </div>
          </div>
          {/* Shopify Partner */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-1">
              <img
                src="/shopify_partner.png"
                alt="Shopify Partner"
                className="w-38"
              />
            </div>
          </div>
          {/* Amazon Advertising */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-1">
              <img
                src="/amazon_partner.png"
                alt="Amazon Advertising"
                className="w-38"
              />
            </div>
          </div>
          {/* Meta Partner */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-1">
              <img
                src="/meta_partner.png"
                alt="Meta Partner"
                className="w-38"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
