import React from "react";
import ExperienceSmartFinanceSection from "../components/ExperienceSmartFinanceSection";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section with background image */}
      <div
        className="relative bg-cover pt-20 md:pt-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${
            import.meta.env.BASE_URL
          }background_image.webp')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center top",
        }}
      >
        {/* Illustration at bottom of header */}
        <img
          src={`${import.meta.env.BASE_URL}contact_illustration.webp`}
          alt="Contact Illustration"
          className="mx-auto max-w-3xl w-full h-auto max-h-80 mt-[-10px] relative z-0 object-contain"
        />
      </div>

      {/* Contact Form overlapping */}
      <div className="-mt-6 relative z-10 px-2 sm:px-4 md:px-8 mb-20">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-12">
          <h2 className="text-lg font-semibold mb-1">
            We’d love to hear from you. Get in touch
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            A member of the team will reach out to you as soon as possible.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter first and last name"
                className="w-full border border-[#F2F2F7] bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-[#F2F2F7] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border border-[#F2F2F7] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full border border-[#F2F2F7] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                How Do we help?
              </label>
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full border border-[#F2F2F7] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300"
              ></textarea>
            </div>
            <div className="pt-8 md:pt-20 flex justify-center md:justify-start col-span-1 md:col-span-2">
              <button className="w-full md:w-auto px-8 bg-[#1A4420] rounded-2xl py-3 text-sm text-white font-normal hover:bg-[#1A4420]/90 transition-colors ">
                Submit Details
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full bg-white py-20">
        <ExperienceSmartFinanceSection />
      </div>
    </div>
  );
}
