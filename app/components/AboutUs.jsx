"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import about from "../../public/about.png";

const AnimatedAboutUsSection = () => {
  const { ref } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="
        flex flex-col lg:flex-row items-center justify-center 
        bg-[#00051C] relative overflow-hidden
        py-10 sm:py-14 lg:py-20 
        px-4 sm:px-8 md:px-12 lg:px-[100px] xl:px-[120px] 2xl:px-[140px]
      "
    >
      {/* Image Section */}
      <div
        className="
    relative w-full lg:w-1/2 flex justify-center items-center 
    group overflow-hidden rounded-2xl mb-10 lg:mb-0
  "
      >
        <div
          className="
      absolute inset-0 bg-gradient-to-tr from-[#27C840]/10 to-transparent
      opacity-0 group-hover:opacity-100 transition-opacity duration-500
    "
        ></div>

        <Image
          src={about}
          alt="Infinitum Systems"
          width={580}
          height={570}
          className="
      relative z-10 object-contain w-[80%] sm:w-[75%] md:w-[65%] lg:w-auto
      transition-transform duration-700 ease-out
      group-hover:scale-110 group-hover:rotate-2
    "
        />
      </div>

      {/* Floating Circle */}
      <div
        className="
          absolute right-6 sm:right-10 lg:right-[100px] top-6 lg:top-0 
          hidden sm:block
        "
      >
        <Image
          src="/circle.svg"
          alt="About Us"
          width={120}
          height={120}
          className="transition-all duration-300 hover:brightness-125"
        />
      </div>

      {/* Text Section */}
      <div
        className="
          w-full lg:w-1/2 text-white 
          text-center lg:text-left 
          flex flex-col items-center lg:items-start
        "
      >
        <h3 className="text-xl sm:text-2xl">
          <span className="font-semibold">About </span>
          <span className="!text-[#01B2C1] font-semibold">Us</span>
        </h3>

        <h2
          className="
            text-2xl sm:text-3xl lg:text-5xl font-semibold 
            leading-snug lg:leading-tight mt-4 font-['Poppins'] 
            w-full sm:w-[90%] lg:w-[661px]
          "
        >
          We craft <span className="!text-[#01B2C1]">bold ideas</span> and smart
          designs that thrive in a digital-first world.
        </h2>

        <p
          className="
            text-sm sm:text-base leading-relaxed mt-6 font-semibold 
            w-full sm:w-[90%] lg:w-[584px]
          "
        >
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>

        <button
          type="button"
          className="inline-block cursor-pointer bg-[#01B2C1] text-white px-6 py-2 mt-4 rounded-full font-bold hover:bg-white hover:text-[#01B2C1] transition duration-300 text-sm sm:text-base lg:text-lg 3xl:px-8 3xl:py-3 3xl:text-lg 3xl:mt-6"
        >
          Explore
        </button>
      </div>
    </div>
  );
};

export default AnimatedAboutUsSection;
