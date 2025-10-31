import Image from "next/image";
import React from "react";
import benifitsImg from "../../public/images/benifits-img.png";
import icons from "../../public/images/icons.png";
import { ArrowBigLeft, ArrowRight, CircleFadingArrowUp } from "lucide-react";

const AboutBenefit = () => {
  return (
    <div className="w-full">
      <div
        className="
          flex flex-col xl:flex-row gap-[28px] 
          xl:justify-between 3xl:justify-around 
          justify-center items-center
          px-4 sm:px-6 2xl:px-0
        "
      >
        {/* Mobile Image First */}
        <div className="xl:hidden w-full relative">
          <Image
            src={benifitsImg}
            width={707}
            height={609}
            alt="image"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute w-[128px] lg:text-left text-center lg:w-full bottom-[266px] max-sm:bottom-[280px] max-sm:left-[187px] left-[1708px] lg:bottom-4 lg:left-4 bg-[#01B2C1] text-white px-3 py-1 rounded-full text-xs shadow-md">
            Innovative Thinking
          </div>
        </div>

        {/* Left Text Content */}
        <div className="text-center xl:text-left justify-center item-center">

          <div
            className="font-abhaya
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              xl:text-[42px] xl:font-extrabold
              xl:w-[520px] 2xl:text-[68px]
              3xl:w-[800px] mt-2 xl:mt-[15px]
            "
          >
            Our <span className="!text-[#46F0FF]">Mission</span>
          </div>

          <p
            className="
            text-sm sm:text-base leading-relaxed mt-6 font-normal font-['Poppins'] 
            w-full sm:w-[90%] lg:w-[584px]
          "
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <p
            className="
            text-sm sm:text-base leading-relaxed mt-6 font-normal font-['Poppins'] 
            w-full sm:w-[90%] lg:w-[584px]
          "
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </p>
          <div className="flex flex-wrap gap-4 mt-4 3xl:mt-6">
            {/* Primary Button */}
            <div className="inline-flex items-center justify-center cursor-pointer bg-[#01B2C1] text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-[#01B2C1] transition duration-300 text-sm sm:text-base lg:text-lg 3xl:px-8 3xl:py-3 3xl:text-lg">
              <span className="flex items-center gap-2 text-xs sm:text-sm 3xl:text-base font-semibold font-['Poppins']">
                Read More
                <ArrowRight />
              </span>
            </div>

            {/* Outline Button */}
            <div className="inline-flex items-center justify-center cursor-pointer border-2 border-[#01B2C1] text-white px-6 py-2 rounded-full font-bold bg-transparent hover:bg-white hover:text-[#01B2C1] transition duration-300 text-sm sm:text-base lg:text-lg 3xl:px-8 3xl:py-3 3xl:text-lg">
              <span className="flex items-center gap-2 text-xs sm:text-sm 3xl:text-base font-semibold font-['Poppins']">
                Read More
                <ArrowRight />
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden xl:block relative mt-8 sm:mt-12 xl:mt-0 w-full sm:w-[500px] md:w-[600px] xl:w-[600px] 2xl:w-[707px] 2xl:h-[609px] mx-auto">
          <Image
            src={benifitsImg}
            width={707}
            height={609}
            alt="image"
            className="w-full h-auto"
          />
          <button
            className="font-['Poppins']
              bg-[#01B2C1] cursor-pointer 
              text-xs sm:text-sm xl:text-[16px] 2xl:text-xl 
              px-3 sm:px-4 h-8 sm:h-10 
              absolute top-[10px] left-[380px]
              rounded-3xl font-medium whitespace-nowrap 
              shadow-md hover:bg-white hover:!text-[#01B2C1] 
              transition duration-300
            "
          >
            Innovative Thinking
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBenefit;
