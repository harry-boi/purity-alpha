import React from "react";

export default function Header() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        minHeight: "100dvh",
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }background_image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#166534",
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-4 md:px-6 lg:px-8 md:py-6 relative z-10">
        <div className="flex items-center space-x-2">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}purity_capital_logo.png`}
              alt="Purity Capital Logo"
              className="w-28 md:w-32 h-auto"
            />
          </div>
        </div>
        <button className="bg-gray-50 text-gray-800 px-3 py-2 md:px-4 lg:px-6 md:py-3 rounded-xl font-medium hover:bg-lime-300 transition-colors text-sm md:text-base whitespace-nowrap">
          Download App
        </button>
      </header>

      {/* Hero Content */}
      <div
        className="flex flex-col lg:flex-row items-stretch justify-between px-4 md:px-6 lg:px-24 gap-6 lg:gap-8 pb-0 lg:pb-0"
        style={{
          minHeight: "calc(100vh - 80px)",
          minHeight: "calc(100dvh - 80px)",
        }}
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left pt-4 md:pt-8 lg:pt-0 max-w-2xl lg:max-w-none flex flex-col justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6">
            Your digital <br /> money works <br /> smarter
          </h1>
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
            <p className="text-white text-base md:text-lg lg:text-xl font-light">
              Secure Your Financial Future with Crypto
            </p>
            <p className="text-white text-base md:text-lg lg:text-xl font-light">
              Save, Invest, and Borrow — All in One Trusted App
            </p>
          </div>
          <p className="text-white text-sm md:text-base lg:text-lg font-light opacity-90 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Experience crypto-powered financial growth, simplified for everyone.
          </p>
        </div>

        {/* Right Content - Phone Image */}
        <div className="flex-1 relative mt-4 lg:mt-0">
          <div className="absolute bottom-0 right-0 lg:right-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src={`${import.meta.env.BASE_URL}phone.png`}
              alt="Mobile app interface showing user dashboard"
              className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
