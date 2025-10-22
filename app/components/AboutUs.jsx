"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import about from "../../public/images/about.png";

const AnimatedAboutUsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
      <motion.div
        
        className="
          relative w-full lg:w-1/2 flex justify-center items-center 
          group overflow-hidden rounded-2xl mb-10 lg:mb-0
          p-[20px]
        "
      >
        <Image
          src={about}
          alt="Infinitum Systems"
          width={580}
          height={570}
          className="
            relative z-10 object-contain w-[100%] sm:w-[5%] md:w-[5%] lg:w-[85%]
            
            
          "
        />
      </motion.div>

      {/* Floating Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="
          absolute right-6 sm:right-10 lg:right-[100px] top-6 lg:top-0 
          hidden sm:block
        "
      >
        <Image
          src="/images/circle.svg"
          alt="About Us"
          width={120}
          height={120}
          className="transition-all duration-300 hover:brightness-125"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="
          w-full lg:w-1/2 text-white 
          text-center lg:text-left 
          flex flex-col items-center lg:items-start
        "
      >
        <h3 className="text-xl sm:text-2xl">
          <span className="font-semibold font-['Poppins']">About </span>
          <span className="!text-[#01B2C1] font-semibold font-['Poppins']">Us</span>
        </h3>

        <h2
          className="
            text-2xl sm:text-3xl lg:text-5xl font-semibold 
            leading-snug lg:leading-tight mt-4 font-abhaya
            w-full sm:w-[90%] lg:w-[661px]
          "
        >
          We craft <span className="!text-[#01B2C1]">bold ideas</span> and smart
          designs that thrive in a digital-first world.
        </h2>

        <p
          className="
            text-sm sm:text-base leading-relaxed mt-6 font-normal font-['Poppins'] 
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
      </motion.div>
    </div>
  );
};

export default AnimatedAboutUsSection;
