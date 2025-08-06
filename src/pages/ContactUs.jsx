import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section with background image */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${
            import.meta.env.BASE_URL
          }background_image.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-14 relative z-10">
          <div className="flex justify-between items-center">
            <img
              src={`${import.meta.env.BASE_URL}purity_capital_logo.png`}
              alt="Purity Capital Logo"
              className="w-28 md:w-32 h-auto"
            />
          </div>
        </div>

        {/* Illustration at bottom of header */}
        <img
          src={`${import.meta.env.BASE_URL}contact_illustration.png`}
          alt="Contact Illustration"
          className="mx-auto max-w-3xl w-full h-auto max-h-80 mt-[-60px] relative z-0 object-contain"
        />
      </div>

      {/* Contact Form overlapping */}
      <div className="-mt-14 relative z-10 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-lg font-semibold mb-1">
            We’d love to hear from you. Get in touch
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            A member of the team will reach out to you as soon as possible.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter first and last name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
