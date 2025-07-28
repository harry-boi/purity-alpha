import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

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

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const autoplayRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      startAutoplay();
    },
  });

  const startAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    if (!isAutoplayPaused) {
      autoplayRef.current = setInterval(() => {
        if (instanceRef.current) {
          instanceRef.current.next();
        }
      }, 6000);
    }
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const toggleAutoplay = () => {
    setIsAutoplayPaused(!isAutoplayPaused);
  };

  useEffect(() => {
    if (isAutoplayPaused) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
    return () => stopAutoplay();
  }, [isAutoplayPaused]);

  const testimonials = [
    {
      name: "John Doe",
      username: "johndoes",
      initial: "J",
      text: "Purity Capital made it so easy to save in crypto. I started with a flexible plan, and watching my USDT grow daily has been a game changer!",
    },
    {
      name: "Jane Smith",
      username: "janesmith",
      initial: "J",
      text: "Investing with Purity Capital was a breeze! The user-friendly interface and rapid gains in my crypto portfolio have exceeded my expectations.",
    },
    {
      name: "Michael Tan",
      username: "michaeltan",
      initial: "M",
      text: "I appreciate how Purity Capital offers tailored investment plans. My crypto savings have seen incredible growth, making me more confident in my financial future!",
    },
    {
      name: "Sarah Wilson",
      username: "sarahwilson",
      initial: "S",
      text: "The transparency and security at Purity Capital gave me peace of mind. My crypto investments are performing better than I ever imagined!",
    },
    {
      name: "David Chen",
      username: "davidchen",
      initial: "D",
      text: "From beginner to confident investor, Purity Capital's platform made my crypto journey seamless. The returns speak for themselves!",
    },
  ];

  return (
    <div className="relative overflow-hidden py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied investors who trust Purity Capital with
            their crypto investments
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="keen-slider"
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                className="keen-slider__slide"
                custom={i + 1}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.initial}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 leading-tight">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        @{testimonial.username}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Star Rating */}
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    currentSlide === idx
                      ? "bg-[#003300]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => instanceRef.current?.next()}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
