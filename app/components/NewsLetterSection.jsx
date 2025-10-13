import React from "react";

const NewsLetterSection = () => {
  return (
    <div className="px-4 py-10 md:py-14 lg:py-16">
      <div className="bg-[#000726] flex flex-col items-center gap-6 rounded-md px-4 py-8 md:flex-row md:justify-between md:px-8 lg:px-12 lg:py-12">
        {/* Title */}
        <div className="text-lg text-white font-semibold md:text-xl lg:text-2xl xl:text-3xl">
          Subscribe Newsletters
        </div>

        {/* Input + Button */}
        <div className="flex w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-[#00395DB2] rounded-md overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent text-sm md:text-base lg:text-lg text-white px-4 py-3 placeholder-white/60 outline-none"
          />
          <button
            type="button"
            className="bg-[#01B2C1] text-white text-sm md:text-base font-semibold px-4 py-3 md:px-6 md:py-3 hover:bg-white hover:text-[#01B2C1] transition duration-300"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
