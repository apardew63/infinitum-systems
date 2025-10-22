import React from "react";

const NewsLetterSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-10 md:py-14 lg:py-16 font-['Poppins']">
      <div className="bg-[#000726] border-[#01B2C1] border-3 flex flex-col items-center gap-6 rounded-[10px] px-4 py-8 md:flex-row md:justify-between md:px-8 lg:px-12 lg:py-12">
        {/* Title */}
        <div className="text-lg text-white font-semibold md:text-xl lg:text-2xl xl:text-3xl font-['Poppins']">
          Subscribe Newsletters
        </div>

        {/* Input + Button */}
        <div className="flex w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-[#00395DB2] rounded-[4px] overflow-hidden p-2">
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
