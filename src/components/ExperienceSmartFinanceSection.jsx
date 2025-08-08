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
      className="py-10 md:px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="w-full md:max-w-6xl mx-auto">
        <section
          className="w-full bg-[#003300] text-white overflow-hidden md:rounded-4xl"
          style={{
            backgroundImage: `url('${
              import.meta.env.BASE_URL
            }background_image.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="max-w-7xl items-end mx-auto flex flex-col lg:flex-row justify-between px-6 md:px-10 lg:px-20 md:gap-12 gap-4 pt-20">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left md:pb-16">
              <h2 className="text-3xl lg:text-4xl font-semibold leading-none mb-6">
                Experience smart finance <br className="hidden md:block" />
                with Purity Capital
              </h2>

              <p className="text-xl md:text-lg text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
                Securely grow, save, and invest your digital assets on a trusted
                platform designed for everyday users.
              </p>

              {/* Download Buttons */}
              <div className="flex sm:flex-row sm:justify-center lg:justify-start gap-4 mb-6">
                <button className="group bg-white/10 text-white hover:text-gray-900 px-5 py-3 rounded-xl flex items-center justify-center transition hover:bg-[#C0FF31]">
                  <img
                    src={`${import.meta.env.BASE_URL}apple_logo.png`}
                    alt="Apple"
                    className="w-5 h-5 mr-2 group-hover:hidden"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}apple_logo_dark.png`}
                    alt="Apple Dark"
                    className="w-7 h-7 mr-2 hidden group-hover:block"
                  />
                  <span className="whitespace-nowrap">Get on iPhone</span>
                </button>

                <button className="group bg-white/10 text-white hover:text-gray-900 px-5 py-3 rounded-xl flex items-center justify-center transition hover:bg-[#C0FF31]">
                  <img
                    src={`${import.meta.env.BASE_URL}android_logo.png`}
                    alt="Android"
                    className="w-7 h-7 mr-2 group-hover:hidden"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}android_logo_dark.png`}
                    alt="Android Dark"
                    className="w-7 h-7 mr-2 hidden group-hover:block"
                  />
                  <span className="whitespace-nowrap">Get on Android</span>
                </button>
              </div>

              {/* Rating */}
              <div className="text-white/80 text-sm flex items-center justify-center lg:justify-start">
                <span className="mr-2 text-xl">
                  <img
                    src={`${import.meta.env.BASE_URL}rating_illustration.png`}
                  />
                </span>{" "}
                4.8 app performance rating
              </div>
            </div>

            {/* Right Content - Phone Image */}
            <div className="flex-[2] md:flex-1 flex justify-center">
              <img
                src={`${import.meta.env.BASE_URL}phone.webp`}
                alt="Mobile app preview"
                className="w-[600px] md:w-[300px] lg:w-[400px] xl:w-[500px] h-auto object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </motion.section>
  );
}
