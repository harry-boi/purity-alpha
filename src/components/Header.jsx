import React from "react";

export default function Header() {
  return (
    <div
      className="min-h-screen bg-green-800 relative overflow-hidden"
      style={{
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }background_image.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 md:px-8 md:py-6">
        <div className="flex items-center space-x-2">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}purity_capital_logo.png`}
              className="w-32"
            />
          </div>
        </div>

        <button className="bg-gray-50 text-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-xl font-medium hover:bg-lime-300 transition-colors text-sm md:text-base">
          Download App
        </button>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-24 gap-8 lg:gap-0 min-h-[700px] md:h-screen">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left pt-14 md:pt-0">
          <h1 className="text-white text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold pt-18 lg:pt-4 leading-tight mb-6">
            Your digital <br /> money works <br /> smarter
          </h1>

          <div className="space-y-3 mb-6">
            <p className="text-white text-lg font-thin sm:text-xl">
              Secure Your Financial Future with Crypto
            </p>
            <p className="text-white text-lg font-thin sm:text-xl">
              Save, Invest, and Borrow — All in One Trusted App
            </p>
          </div>

          <p className="text-white text-base font-thin sm:text-lg opacity-90 leading-relaxed">
            Experience crypto-powered financial growth, <br /> simplified for
            everyone.
          </p>
        </div>

        {/* Right Content - Phone Image */}
        <div className="flex-1 flex flex-col justify-center items-center lg:justify-end h-full pt-8 md:pt-0">
          <img
            src={`${import.meta.env.BASE_URL}phone.png`}
            alt="Mobile app interface showing user dashboard"
            className="sm:w-72 md:w-96 lg:w-96 xl:w-[450px] max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
