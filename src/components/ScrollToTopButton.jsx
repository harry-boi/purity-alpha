import React from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll to top"
      className={`fixed z-50 bottom-6 right-6 bg-[#C0FF31] text-[#123017] shadow-lg rounded-full w-14 h-14 flex items-center justify-center transition-opacity duration-300 hover:bg-[#b0e82a] focus:outline-none focus:ring-2 focus:ring-[#123017] ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center">
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>
        <span className="text-[10px] font-semibold leading-none mt-0.5">
          Top
        </span>
      </div>
    </button>
  );
}
