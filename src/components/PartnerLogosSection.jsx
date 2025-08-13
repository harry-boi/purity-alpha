import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function PartnerLogosSection() {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

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

  // Duplicate the list to create a smooth infinite scroll
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="bg-white py-12 px-4 md:px-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-2xl font-bold text-center text-gray-900 mb-12">
          We have partnered with the best in the market
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            ref={marqueeRef}
            className="flex gap-8 md:gap-12"
            style={{
              width: "max-content",
            }}
            animate={{
              x: isPaused ? undefined : [0, -100 * (partners.length / 3) + "%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedPartners.map((partner, i) => (
              <div key={`${partner.name}-${i}`} className="flex-shrink-0">
                <div className="flex justify-center items-center h-20 px-4">
                  <img
                    src={partner.image}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain transition-all duration-300 grayscale hover:grayscale-0"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "160px",
                      maxHeight: "64px",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}
