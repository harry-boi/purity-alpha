import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
  const [slidesToShow, setSlidesToShow] = useState(1);
  const autoplayRef = useRef(null);

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

  // Handle responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoplayPaused) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const maxSlide = testimonials.length - slidesToShow;
          return prev >= maxSlide ? 0 : prev + 1;
        });
      }, 6000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [isAutoplayPaused, slidesToShow, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = testimonials.length - slidesToShow;
      return prev >= maxSlide ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = testimonials.length - slidesToShow;
      return prev <= 0 ? maxSlide : prev - 1;
    });
  };

  const getSlideWidth = () => `${100 / slidesToShow}%`;
  const getTransform = () =>
    `translateX(-${currentSlide * (100 / slidesToShow)}%)`;

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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl">
            See what our clients say about their experience with Purity Capital.
          </p>
        </motion.div>

        {/* Slider Container */}
        <div className="relative">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoplayPaused(true)}
            onMouseLeave={() => setIsAutoplayPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: getTransform() }}
            >
              {testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0"
                  style={{ width: getSlideWidth() }}
                  custom={i + 1}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="bg-white mx-4 rounded-4xl p-6 border border-gray-100 h-full duration-300">
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
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-3 md:-left-8 -translate-y-1/2 z-20 p-2 rounded-full bg-[#C0FF31] shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 z-20 p-2 rounded-full bg-[#C0FF31] shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
