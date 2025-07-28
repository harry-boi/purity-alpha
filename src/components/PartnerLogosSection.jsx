import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const autoplayRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 30,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 40,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 50,
        },
      },
    },
    created() {
      startAutoplay();
    },
  });

  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000); // Increased interval for slower animation
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const partners = [
    {
      name: "Google Partner",
      image: `${import.meta.env.BASE_URL}google_partner.png`,
      alt: "Google Partner",
    },
    {
      name: "Shopify Partner",
      image: `${import.meta.env.BASE_URL}shopify_partner.png`,
      alt: "Shopify Partner",
    },
    {
      name: "Amazon Advertising",
      image: `${import.meta.env.BASE_URL}amazon_partner.png`,
      alt: "Amazon Advertising",
    },
    {
      name: "Meta Partner",
      image: `${import.meta.env.BASE_URL}meta_partner.png`,
      alt: "Meta Partner",
    },
    // Duplicate for seamless looping
    {
      name: "Google Partner",
      image: `${import.meta.env.BASE_URL}google_partner.png`,
      alt: "Google Partner",
    },
    {
      name: "Shopify Partner",
      image: `${import.meta.env.BASE_URL}shopify_partner.png`,
      alt: "Shopify Partner",
    },
  ];

  return (
    <motion.section
      className="bg-white py-12 px-4 md:px-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeInUp}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-2xl font-bold text-center text-gray-900 mb-12"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          We have partnered with the best in the market
        </motion.h2>

        <div className="relative">
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="keen-slider"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
          >
            {partners.map((partner, i) => (
              <motion.div
                key={`${partner.name}-${i}`}
                className="keen-slider__slide"
                custom={i + 1}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="flex justify-center items-center h-24 px-4">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "200px",
                      maxHeight: "80px",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Single Next Arrow Control */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => instanceRef.current?.next()}
              onMouseEnter={stopAutoplay}
              onMouseLeave={startAutoplay}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center"
              aria-label="Next partner"
            >
              <img
                src={`${import.meta.env.BASE_URL}nextarrowicon.png`}
                alt="Next"
                className="w-6 h-6"
                style={{ display: "block" }}
              />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
