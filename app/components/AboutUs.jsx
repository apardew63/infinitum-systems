"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { GlareCard } from "./ui/glare-card";
import logo from "../../public/logo.svg";

const AnimatedAboutUsSection = () => {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="
        flex flex-col lg:flex-row items-center lg:gap-10 
        w-full px-6 lg:px-16 py-20 
        bg-[#00051C] relative overflow-hidden
      "
    >
      {/* Logo */}
      <div className="relative w-full flex justify-center items-center">
        <GlareCard className="flex flex-col items-center justify-center">
          <Image src={logo} alt="Infinitum Systems" width={200} height={200} />
        </GlareCard>
      </div>

      {/* Circle graphic */}
      <div className="absolute right-[100px] top-0 hidden sm:block">
        <Image src="/circle.svg" alt="About Us" width={157} height={157} />
      </div>

      {/* Text content */}
      <div
        className="
          mt-10 lg:mt-0 
          w-full lg:w-8/12 text-white
          text-center lg:text-left
        "
      >
        <h3 className="text-xl sm:text-2xl">
          <span className="font-semibold">About </span>
          <span className="!text-[#01B2C1] font-semibold">Us</span>
        </h3>
        <h2
          className="
            text-2xl sm:text-3xl lg:text-5xl font-semibold 
            leading-snug lg:leading-tight mt-4 font-['poppins'] 
            w-full lg:w-[661px] mx-auto lg:mx-0
          "
        >
          We craft <span className="!text-[#01B2C1]">bold ideas</span> and smart
          designs that thrive in a digital-first world.
        </h2>
        <p
          className="
            text-sm sm:text-base leading-relaxed mt-6 font-semibold 
            w-full lg:w-[584px] mx-auto lg:mx-0
          "
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <button
          className="
            mt-8 bg-[#01b2c1] text-white 
            hover:bg-white hover:!text-[#01b2c1] cursor-pointer 
            px-6 py-3 rounded-full font-semibold 
            transition duration-300 w-full sm:w-[121px]
          "
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default AnimatedAboutUsSection;
