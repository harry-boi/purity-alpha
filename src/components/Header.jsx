import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div
      className="relative overflow-hidden flex flex-col justify-between"
      style={{
        minHeight: "80vh",
        minHeight: "80dvh",
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }background_image.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundColor: "#166534",
      }}
    >
      {/* Hero Content */}
      <div
        className="flex flex-col lg:flex-row items-stretch justify-between px-4 md:px-6 lg:px-24 lg:gap-8 pb-0 lg:pb-0"
        style={{
          minHeight: "calc(100vh - 80px)",
          minHeight: "calc(100dvh - 80px)",
        }}
      >
        {/* Left Content */}
        <motion.div
          className="flex-[2] lg:min-w-[600px] min-w-0 lg:pr-10 flex flex-col justify-start md:justify-center px-6 md:px-10 text-center md:text-left mb-24 md:mb-0 pt-8 md:pt-0"
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <h1 className="text-white text-center md:text-left text-4xl md:text-5xl md:text-[77px] lg:text-6xl xl:text-7xl font-bold leading-none mb-4 md:mb-6">
            Your digital <br /> money works <br /> smarter
          </h1>
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 font-normal text-2xl">
            <p className="text-white text-base md:text-2xl lg:text-2xl text-center md:text-left">
              Secure Your Financial Future with Crypto <br /> Save, Invest and
              Borrow - All in One Trusted App
            </p>
          </div>
          <p className="text-white text-base md:text-2xl max-w-lg font-normal text-center md:text-left">
            Experience crypto-powered financial growth, simplified for everyone.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex-[2] flex md:items-end md:justify-start min-w-[320px] md:min-w-[400px] lg:min-w-[630px] relative"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
        >
          <img
            src={`${import.meta.env.BASE_URL}phone.webp`}
            alt="Mobile app interface"
            className="w-[320px] md:w-[900px] lg:w-[900px] xl:w-[900px] h-auto object-contain absolute left-1/2 -translate-x-1/2 bottom-0 md:static md:left-auto md:translate-x-0 md:bottom-auto"
            style={{ marginBottom: 0 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
