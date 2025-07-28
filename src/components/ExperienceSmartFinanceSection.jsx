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

export default function ExperienceSmartFinanceSection() {
  return (
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
            style={{
              backgroundImage: `url('${
                import.meta.env.BASE_URL
              }background_image.png')`,
            }}
          >
            {/* Left Content */}
            <div className="text-white w-full md:w-1/2 text-center md:text-left z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Experience smart finance <br className="hidden sm:block" /> with
                Purity Capital
              </h2>
              <p className="mb-6 text-base sm:text-lg">
                Securely grow, save, and invest your digital assets on{" "}
                <br className="hidden sm:block" />a trusted platform designed
                for everyday users.
              </p>

              <div className="flex flex-wrap sm:flex-row items-center justify-center md:justify-start gap-4 mb-4">
                <a
                  href="#"
                  className="text-white px-6 py-3 rounded-xl flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-sm transition hover:bg-white/20"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}apple_logo.png`}
                    alt="Apple"
                    className="w-5"
                  />
                  Get on iPhone
                </a>
                <a
                  href="#"
                  className="text-white px-6 py-3 rounded-xl flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-sm transition hover:bg-white/20"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}android_logo.png`}
                    alt="Android"
                    className="w-5"
                  />
                  Get on Android
                </a>
              </div>

              <div className="text-sm my-6 sm:my-8 flex justify-center md:justify-start items-center gap-2">
                <span>🌟 4.8 app performance rating</span>
              </div>

              {/* Mobile Phone Image fixed at bottom */}
              <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <img
                  src={`${import.meta.env.BASE_URL}phone.png`}
                  alt="Phone Mockup"
                  className="w-[260px] sm:w-[280px] object-contain"
                />
              </div>
            </div>

            {/* Desktop Phone Image */}
            <img
              src={`${import.meta.env.BASE_URL}phone.png`}
              alt="Phone Mockup"
              className="hidden md:block absolute bottom-0 right-6 lg:right-12 w-[280px] lg:w-[300px] object-contain z-0"
            />
          </div>
        </section>
      </div>
    </motion.section>
  );
}
