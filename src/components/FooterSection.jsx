import React from "react";
import { motion } from "framer-motion";

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

export default function FooterSection() {
  return (
    <motion.footer
      className="bg-[#101515] text-white px-4 md:px-16 pt-14 pb-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn}
    >
      <footer className="text-white">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-20 mb-8">
              {/* Left Column - Logo & Contact */}
              <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
                <div className="flex items-center gap-2 mb-4">
                  <img src="/purity_capital_logo.png" />
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>Purity Community Estate, Plot 223/842 Lekki,</p>
                  <p>Lagos State, Nigeria</p>
                  <div className="flex items-center gap-2 mt-3">
                    <span className="text-gray-400">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 6.67773L9.41302 10.5947C11.9616 12.0387 13.0384 12.0387 15.587 10.5947L22.5 6.67773"
                          stroke="#F9FAFB"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.51577 14.1534C2.58114 17.2189 2.61383 18.7517 3.74496 19.8871C4.87608 21.0225 6.45033 21.0621 9.59883 21.1412C11.5393 21.1899 13.4607 21.1899 15.4012 21.1412C18.5497 21.0621 20.1239 21.0225 21.2551 19.8871C22.3862 18.7517 22.4189 17.2189 22.4842 14.1534C22.5053 13.1677 22.5053 12.1878 22.4842 11.2021C22.4189 8.1366 22.3862 6.60383 21.2551 5.4684C20.1239 4.33297 18.5497 4.29341 15.4012 4.2143C13.4607 4.16555 11.5393 4.16554 9.59882 4.2143C6.45033 4.2934 4.87608 4.33295 3.74495 5.46838C2.61382 6.60381 2.58114 8.13658 2.51576 11.2021C2.49474 12.1878 2.49475 13.1677 2.51577 14.1534Z"
                          stroke="#F9FAFB"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>info@puritycapital.app</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 7.17773C16.4377 5.46526 16.2251 4.42782 15.4988 3.70286C14.4718 2.67773 12.8188 2.67773 9.51289 2.67773C6.20698 2.67773 4.55403 2.67773 3.52701 3.70286C2.5 4.72799 2.5 6.3779 2.5 9.67773V15.6777C2.5 18.9776 2.5 20.6275 3.52701 21.6526C4.55403 22.6777 6.20698 22.6777 9.51289 22.6777C12.8188 22.6777 14.4718 22.6777 15.4988 21.6526C16.2251 20.9276 16.4377 19.8902 16.5 18.1777"
                          stroke="#F9FAFB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8.5 19.6777H10.5"
                          stroke="#F9FAFB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M16.5 12.6686L16.5 12.6775M20.5483 17.1689C21.7541 16.0173 22.5 14.4263 22.5 12.6689C22.5 10.9116 21.7541 9.3206 20.5483 8.16895M18.5 10.4189C19.1029 10.9948 19.4759 11.7903 19.4759 12.6689C19.4759 13.5476 19.1029 14.3431 18.5 14.9189"
                          stroke="#F9FAFB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M6.5 2.67773L6.589 3.21175C6.78188 4.36903 6.87832 4.94767 7.27519 5.29978C7.68918 5.66708 8.27614 5.67773 9.5 5.67773C10.7239 5.67773 11.3108 5.66708 11.7248 5.29978C12.1217 4.94767 12.2181 4.36902 12.411 3.21175L12.5 2.67773"
                          stroke="#F9FAFB"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>+234(0)8160000000</span>
                  </div>
                  <p className="mt-3">Add License Details below</p>
                </div>
              </div>
              {/* Right Column - Links & Newsletter */}
              <div className="w-full lg:w-2/3 flex flex-col">
                <div className="w-full flex md:justify-end">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 w-full md:w-[80%] lg:w-[75%]">
                    {/* Quick Links */}
                    <div>
                      <h3 className="text-white font-semibold mb-4">
                        Quick Links
                      </h3>
                      <div className="space-y-3">
                        <a
                          href="/"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          Home
                        </a>
                        <a
                          href="/faqs"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          FAQs
                        </a>
                        <a
                          href="/contact"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          Contact us
                        </a>
                      </div>
                    </div>
                    {/* Policy */}
                    <div>
                      <h3 className="text-white font-semibold mb-4">Policy</h3>
                      <div className="space-y-3">
                        <a
                          href="/privacy"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          Privacy Policy
                        </a>
                        <a
                          href="/terms"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          Terms of Use
                        </a>
                        <a
                          href="/aml"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          AML Policy
                        </a>
                      </div>
                    </div>
                    {/* Socials */}
                    <div>
                      <h3 className="text-white font-semibold mb-4">Socials</h3>
                      <div className="space-y-3">
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          Instagram
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          X (Twitter)
                        </a>
                        <a
                          href="#"
                          className="block text-gray-300 hover:text-white text-sm transition-colors"
                        >
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* close grid links wrapper */}
                {/* Newsletter Under Links, left-aligned under Quick Links */}
                <div className="w-full md:w-[80%] lg:w-[75%] mt-2 md:ml-auto">
                  <div className="text-sm text-gray-300 mb-4 text-left">
                    <p>
                      Sign up now to follow investment tips & exclusive deals
                      offers and updates from us
                    </p>
                  </div>
                  <h3 className="text-white font-semibold mb-4 text-left">
                    SUBSCRIBE TO NEWSLETTER
                  </h3>
                  <div className="space-y-3 flex flex-col md:flex-row md:items-center md:space-y-0 md:space-x-3">
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="w-full md:w-auto flex-1 px-3 py-2 bg-[#F6F6F61F] border border-gray-600 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-200 focus:ring-1 focus:ring-gray-500 text-sm"
                    />
                    <button className="w-full md:w-auto px-8 py-2 text-gray-800 bg-gray-100 hover:bg-gray-100 font-medium rounded-md transition-colors text-sm">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Copyright */}
          <div className="border-t border-gray-600 w-full pt-6 text-center">
            <p className="text-gray-400 text-sm">
              PurityCapital© 2025 - All Right Reserved
            </p>
          </div>
        </div>
      </footer>
    </motion.footer>
  );
}
