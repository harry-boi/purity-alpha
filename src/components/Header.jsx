import React from "react";

export default function Header() {
  return (
    <div
      className="relative overflow-hidden flex flex-col justify-between"
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
      <header className="flex justify-between items-center max-w-full md:py-1 relative z-10 px-4 md:px-8 lg:px-16">
        <div className="flex space-x-2 py-4 md:py-10 md:px-0 md:pl-18">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}purity_capital_logo.png`}
              alt="Purity Capital Logo"
              className="w-28 md:w-32 h-auto"
            />
          </div>
        </div>
        <div className="md:pr-18">
          <button className="bg-gray-50 text-gray-800 px-3 py-2 md:px-4 lg:px-6 md:py-3 rounded-xl font-medium hover:bg-lime-300 transition-colors text-sm md:text-base whitespace-nowrap">
            Download App
          </button>
        </div>
      </header>

      {/* Hero Content */}
      <div
        className="flex flex-col lg:flex-row items-stretch justify-between px-4 md:px-6 lg:px-24 lg:gap-8 pb-0 lg:pb-0"
        style={{
          minHeight: "calc(100vh - 80px)",
          minHeight: "calc(100dvh - 80px)",
        }}
      >
        {/* Left Content */}
        <div className="flex-[2] lg:min-w-[600px] min-w-0 lg:pr-10 flex flex-col justify-start md:justify-center px-6 md:px-10 text-center md:text-left mb-24 md:mb-0 pt-8 md:pt-0">
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
        </div>

        {/* Right Content */}
        <div className="flex-[2] flex md:items-end md:justify-start min-w-[320px] md:min-w-[400px] lg:min-w-[630px] relative">
          <img
            src={`${import.meta.env.BASE_URL}phone.png`}
            alt="Mobile app interface"
            className="w-[320px] md:w-[900px] lg:w-[900px] xl:w-[900px] h-auto object-contain absolute left-1/2 -translate-x-1/2 bottom-0 md:static md:left-auto md:translate-x-0 md:bottom-auto"
            style={{ marginBottom: 0 }}
          />
        </div>
      </div>
    </div>
  );
}
