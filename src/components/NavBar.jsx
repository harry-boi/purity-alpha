export default function NavBar() {
  return (
    <header
      style={{
        backgroundImage: `url('${
          import.meta.env.BASE_URL
        }background_image.webp')`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#166534",
      }}
      className="flex justify-between items-center max-w-full md:py-1 relative z-10 px-4 md:px-8 lg:px-16"
    >
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
  );
}
