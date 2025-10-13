"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Counter = ({ target, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(target * progress);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    updateCounter();
  }, [target]);

  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-sm sm:text-base font-normal text-white mt-1">
        {label}
      </div>
    </div>
  );
};

const HeroSection = () => {
  const wordRef = useRef(null); // ✅ Define ref here

  useEffect(() => {
    const words = ["Solution", "Innovation", "Strategy", "Technology"];
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Force initial clear to avoid render delay
    gsap.set(wordRef.current, { text: "" });

    words.forEach((word) => {
      tl.to(wordRef.current, {
        duration: 1,
        text: word,
        ease: "none",
      })
        .to({}, { duration: 1 }) // pause after typing
        .to(wordRef.current, {
          duration: 0.5,
          text: "",
          ease: "power2.in",
        });
    });
  }, []);

  return (
    <>
      <div className="py-16 sm:py-32 md:py-48 lg:py-64 px-4 sm:px-8 md:px-16 lg:px-[108px] relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
        <div className="w-full lg:w-auto">
          <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white uppercase leading-tight">
            Creative{" "}
            <span className="!text-[#46F0FF]" ref={wordRef}>
              Solution
            </span>
            <br />
            For a Digital <br /> World
          </h1>
          <button
            type="button"
            className="inline-block cursor-pointer bg-[#01B2C1] text-white px-6 py-2 mt-4 rounded-full font-bold hover:bg-white hover:text-[#01B2C1] transition duration-300 text-sm sm:text-base lg:text-lg 3xl:px-8 3xl:py-3 3xl:text-lg 3xl:mt-6"
          >
            Let's Talk
          </button>
        </div>

        <div className="lg:hidden relative w-full lg:w-[223px] lg:pl-72 flex flex-col sm:flex-row lg:flex-col items-start gap-4 lg:gap-0">
          <div className="flex gap-2 lg:gap-0 lg:block relative">
            <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/BuRidrCEDW.png')] bg-cover bg-no-repeat lg:absolute lg:top-0 lg:left-0 z-[13]" />
            <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/XPqOcLZgnJ.png')] bg-cover bg-no-repeat lg:absolute lg:top-0 lg:left-[53px] z-[22]" />
          </div>
          <span className="flex justify-start items-start font-['Poppins'] text-[14px] sm:text-[16px] font-normal leading-[20px] sm:leading-[24px] text-[#fff] lg:absolute lg:top-[84px] lg:left-0 text-left overflow-hidden z-[23] lg:w-[223px] lg:h-[72px]">
            We craft bold ideas and <br />
            smart designs that thrive in <br />a digital-firwwst world.
          </span>
        </div>

        <div className="relative pl-72 w-[223px] hidden lg:block">
          <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/BuRidrCEDW.png')] bg-cover bg-no-repeat absolute top-0 left-0 z-[13]" />
          <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/XPqOcLZgnJ.png')] bg-cover bg-no-repeat absolute top-0 left-[53px] z-[22]" />
          <span className="flex w-[223px] h-[72px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] absolute top-[84px] left-0 text-left overflow-hidden z-[23]">
            We craft bold ideas and <br />
            smart designs that thrive in <br />a digital-firwwst world.
          </span>
        </div>
      </div>

      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <video
          className="w-full h-full object-cover absolute -top-[30px] sm:-top-[45px] lg:-top-[60px] left-0 z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-[60px] sm:bottom-[120px] md:bottom-[160px] lg:bottom-[200px] xl:bottom-[220px] 2xl:bottom-60 3xl:bottom-[260px] left-1/2 transform -translate-x-1/2 translate-y-1/4 z-20">
          <Image
            src="/hero-lady.png"
            alt="Hero Lady"
            width={802}
            height={802}
            className="hidden lg:block object-contain w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[700px] xl:h-[700px] 2xl:w-[802px] 2xl:h-[802px]"
          />

        <div className="w-[300px] lg:hidden absolute top-[-272px] right-[-150px]">

          <img src="/hero-lady.png" className="w-full" />
        </div>

          <div className="absolute left-full top-[60px] sm:top-[100px] md:top-[140px] lg:top-[200px] flex flex-col gap-4 lg:gap-6 text-start hidden sm:flex">
            <div className="bg-[#00051C]/10 backdrop-blur-md rounded-2xl px-4 py-3 lg:px-6 lg:py-4 border border-white/10 shadow-lg translate-y-1 -ml-4 w-[160px] sm:w-[180px] lg:w-[200px]">
              <Counter target={200} label="PARTNERS" suffix="+" />
            </div>

            <div className="mt-2 lg:mt-6 text-start bg-[#00051C]/10 backdrop-blur-md rounded-2xl px-4 py-3 lg:px-6 lg:py-4 border border-white/10 shadow-lg -translate-y-1 w-[200px] sm:w-[220px] lg:w-[260px] text-white">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                90%
              </div>
              <div className="text-sm sm:text-base font-normal mt-1">
                FASTER TECHNOLOGY
              </div>
            </div>
          </div>

          {/* Mobile version of counters */}
          {/* <div className="absolute -bottom-[100px] left-1/2 transform -translate-x-1/2 flex flex-row gap-4 text-center sm:hidden w-full justify-center">
            <div className="bg-[#00051C]/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 shadow-lg w-[140px]">
              <Counter target={200} label="PARTNERS" suffix="+" />
            </div>

            <div className="bg-[#00051C]/10 backdrop-blur-md rounded-2xl px-4 py-3 border border-white/10 shadow-lg w-[180px] text-white">
              <div className="text-3xl font-bold">90%</div>
              <div className="text-sm font-normal mt-1">FASTER TECHNOLOGY</div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
