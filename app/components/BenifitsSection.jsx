import Image from "next/image";
import React from "react";
import benifitsImg from "../../public/benifits-img.png";

const BenifitsSection = () => {
  return (
    <div className="w-full">
      <div
        className="
          flex flex-col xl:flex-row gap-[28px] 
          xl:justify-between 3xl:justify-around 
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
          <div className="absolute w-[128px] lg:text-left text-center lg:w-full bottom-[266px] left-[178px] lg:bottom-4 lg:left-4 bg-[#01B2C1] text-white px-3 py-1 rounded-full text-xs shadow-md">
            Innovative Thinking
          </div>
        </div>

        {/* Left Text Content */}
        <div className="text-center xl:text-left">
          <div className="text-sm sm:text-base xl:text-[16px] 2xl:text-[20px] font-semibold">
            <span className="text-[#FFF]">Our</span>
            <span className="!text-[#46F0FF]"> Benifits</span>
          </div>

          <div
            className="
              text-2xl sm:text-3xl md:text-4xl 
              xl:text-[42px] xl:font-extrabold 
              xl:w-[520px] 2xl:text-[68px] 
              3xl:w-[800px] mt-2 xl:mt-[15px]
            "
          >
            Smart benefits for your digital growth
          </div>

          <hr
            className="
              w-20 sm:w-[200px] md:w-[300px] mx-auto xl:mx-0
              xl:w-[450px] 2xl:w-[550px] 
              !text-[#454545] 
              mt-4 xl:mt-[24px] 2xl:mt-[34px]
            "
          />

          {/* Mobile Cards for Benefits */}
          <div className="mt-6 space-y-4 xl:mt-[36px] xl:space-y-0 xl:flex gap-[30px]">
            <div className="bg-[#0A0F2C] rounded-lg p-4 xl:p-0 xl:bg-transparent">
              <div className="!text-[#42E1F1] text-sm sm:text-base xl:text-[16px] 2xl:text-[20px]">
                Reliable Execution
              </div>
              <div className="text-sm sm:text-base 2xl:text-[18px] mt-2 xl:mt-[10px]">
                Fresh ideas grounded in consistent delivery.
              </div>
            </div>

            <div className="bg-[#0A0F2C] rounded-lg p-4 xl:p-0 xl:bg-transparent">
              <div className="text-sm sm:text-base xl:text-[16px] 2xl:text-[20px]">
                Strategic by Choice
              </div>
              <div className="text-sm sm:text-base 2xl:text-[18px] mt-2 xl:mt-[10px]">
                A team fueled by curiosity and guided by smart decisions.
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <div
            className="
              w-[120px] sm:w-[130px] xl:w-[130px] xl:h-[38px] 
              2xl:w-[149px] 2xl:h-[41px] 
              3xl:w-[180px] 3xl:h-[50px] 
              flex justify-center items-center 
              rounded-full bg-[#01B2C1] text-white 
              hover:bg-white hover:text-[#01B2C1] 
              transition-colors duration-300 
              cursor-pointer mt-6 sm:mt-8 mx-auto xl:mx-0
            "
          >
            <div className="text-xs sm:text-sm 3xl:text-base font-semibold">
              Read More
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
            className="
              bg-[#01B2C1] cursor-pointer 
              text-xs sm:text-sm xl:text-[16px] 2xl:text-xl 
              px-3 sm:px-4 h-8 sm:h-10 
              absolute xl:top-[-515px] xl:left-[330px] 
              2xl:left-[373px] 2xl:top-[-590px] 
              3xl:top-[-600px] 3xl:left-[383px] 
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

export default BenifitsSection;
