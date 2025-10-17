"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import circleIcon from "../../public/circle.svg";
import explore1 from "../../public/1.png";
import explore2 from "../../public/2.png";

const AmazingSection = () => {
  const cardRefs = useRef([]);
  const arrowRefs = useRef([]);

  // Individual magnifier state for each card
  const [lensState, setLensState] = useState(
    Array(3).fill({
      visible: false,
      left: 0,
      top: 0,
      bgPosX: 0,
      bgPosY: 0,
      bgSizeX: 0,
      bgSizeY: 0,
    })
  );

  useEffect(() => {
    const cards = cardRefs.current;
    cards.forEach((card, i) => {
      const arrow = arrowRefs.current[i];
      const enter = () => {
        gsap.killTweensOf(arrow);
        gsap.to(arrow, {
          opacity: 1,
          scale: 1.1,
          duration: 0.4,
          ease: "back.out(1.7)",
        });
      };
      const leave = () => {
        gsap.killTweensOf(arrow);
        gsap.to(arrow, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power1.out",
        });
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  const handleMouseMove = (e, index, image) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const lensSize = 140;
    const zoom = 2;

    const bgSizeX = Math.round(rect.width * zoom);
    const bgSizeY = Math.round(rect.height * zoom);
    const bgPosX = Math.round(x * zoom - lensSize / 2);
    const bgPosY = Math.round(y * zoom - lensSize / 2);

    setLensState((prev) =>
      prev.map((lens, i) =>
        i === index
          ? {
              visible: true,
              left: x - lensSize / 2,
              top: y - lensSize / 2,
              bgPosX,
              bgPosY,
              bgSizeX,
              bgSizeY,
              src: image.src,
            }
          : lens
      )
    );
  };

  const handleMouseLeave = (index) => {
    setLensState((prev) =>
      prev.map((lens, i) => (i === index ? { ...lens, visible: false } : lens))
    );
  };

  return (
    <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      {/* Title & Description */}
      <div className="flex flex-col min-[1080px]:flex-row justify-between min-[1280px]:gap-[120px] 3xl:gap-[160px]">
        <div className="text-[32px] sm:text-[38px] leading-tight min-[1080px]:text-[44px] min-[1080px]:w-[520px] min-[1280px]:text-[50px] 2xl:text-[68px] 3xl:text-[88px] font-extrabold">
          Explore Our{" "}
          <span className="!text-[#46F0FF]">
            <br className="hidden min-[1280px]:block 2xl:hidden" /> Amazing
          </span>{" "}
          Works
        </div>
        <div className="mt-4 sm:mt-6 min-[1080px]:mt-0">
          <div className="text-[14px] sm:text-[16px] font-semibold min-[1080px]:text-[16px] 2xl:text-[20px] 3xl:text-[24px]">
            <span className="text-[#FFF]">Our</span>
            <span className="text-[#46F0FF]"> Work</span>
          </div>
          <div className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] min-[1080px]:w-[440px] 2xl:w-[525px] 3xl:text-[18px] 3xl:w-[640px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </div>
        </div>
      </div>

      {/* Circle Icon */}
      <div className="hidden min-[1080px]:block absolute min-[1080px]:top-[-40px] min-[1080px]:left-[360px] min-[1280px]:left-[400px] 2xl:top-[-50px] left-[450px] 2xl:left-[450px] 3xl:left-[540px]">
        <Image src={circleIcon} alt="About Us" width={157} height={157} />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mt-6 sm:gap-4 min-[1080px]:gap-[24px] 2xl:gap-[31px]">
        <div className="px-4 py-2 text-sm sm:text-base rounded-full bg-[#01B2C1] text-white">
          Branding
        </div>
        <div className="px-4 py-2 text-sm sm:text-base rounded-full border border-[#01B2C1] hover:bg-[#01B2C1] hover:text-white transition duration-300 cursor-pointer">
          UI/UX Design
        </div>
        <div className="px-4 py-2 text-sm sm:text-base rounded-full border border-[#01B2C1] hover:bg-[#01B2C1] hover:text-white transition duration-300 cursor-pointer">
          Development
        </div>
      </div>

      <div className="py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 xl:gap-10 relative">
        {[explore1, explore2, explore1].map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg cursor-crosshair"
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index, image)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Image
              src={image}
              alt={`Explore ${index + 1}`}
              className="w-full h-auto object-cover select-none pointer-events-none"
              height={312}
              width={415}
            />

            <div
              ref={(el) => (arrowRefs.current[index] = el)}
              className="absolute bottom-4 right-4 bg-[#01B2C1] text-white group-hover:bg-white group-hover:text-[#01B2C1] rounded-full p-3 sm:p-4 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center transition-all duration-300 ease-in-out opacity-90"
            >
              <ArrowUpRight size={24} />
            </div>

            {lensState[index].visible && (
              <div
                className="pointer-events-none rounded-full border-2 border-[#46F0FF] shadow-[0_0_18px_rgba(70,240,255,0.28)] transition-opacity duration-150"
                style={{
                  position: "absolute",
                  width: `140px`,
                  height: `140px`,
                  left: `${lensState[index].left}px`,
                  top: `${lensState[index].top}px`,
                  backgroundImage: `url(${lensState[index].src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${lensState[index].bgSizeX}px ${lensState[index].bgSizeY}px`,
                  backgroundPosition: `-${lensState[index].bgPosX}px -${lensState[index].bgPosY}px`,
                  zIndex: 30,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazingSection;
