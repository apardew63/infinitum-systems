"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import circleIcon from "../../public/circle.svg";
import { ThreeDMarquee } from "./ui/3d-marquee";
import kaiserImg from "../../public/kaiser-img.png";
import HBOimg from "../../public/hbo-img.png";
import zenSilkImg from "../../public/silk-zen-img.png";

const AmazingSection = () => {
  const cardRefs = useRef([]);
  const arrowRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    cards.forEach((card, i) => {
      const arrow = arrowRefs.current[i];
      const enter = () => {
        gsap.killTweensOf(arrow);
        gsap.to(arrow, { opacity: 1, scale: 1.1, duration: 0.4, ease: "back.out(1.7)" });
      };
      const leave = () => {
        gsap.killTweensOf(arrow);
        gsap.to(arrow, { opacity: 1, scale: 1, duration: 0.3, ease: "power1.out" });
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  const images = [
    kaiserImg.src, { type: "video", src: "/atelier-video.mp4" },
    zenSilkImg.src, { type: "video", src: "/kaiser-video.mp4" },
    HBOimg.src, { type: "video", src: "/plinth-video.mp4" },
    kaiserImg.src, { type: "video", src: "/the-palm-video.mp4" },
    kaiserImg.src, { type: "video", src: "/atelier-video.mp4" },
    zenSilkImg.src, { type: "video", src: "/kaiser-video.mp4" },
    HBOimg.src, { type: "video", src: "/plinth-video.mp4" },
    kaiserImg.src, { type: "video", src: "/atelier-video.mp4" },
    kaiserImg.src, { type: "video", src: "/kaiser-video.mp4" },
    HBOimg.src, { type: "video", src: "/the-palm-video.mp4" },
    zenSilkImg.src, { type: "video", src: "/plinth-video.mp4" },
    kaiserImg.src, { type: "video", src: "/atelier-video.mp4" },
    HBOimg.src, { type: "video", src: "/kaiser-video.mp4" },
    zenSilkImg.src, { type: "video", src: "/the-palm-video.mp4" },
    kaiserImg.src, { type: "video", src: "/plinth-video.mp4" },
    kaiserImg.src, { type: "video", src: "/the-palm-video.mp4" },
    HBOimg.src, { type: "video", src: "/atelier-video.mp4" },
    zenSilkImg.src, { type: "video", src: "/kaiser-video.mp4" },
  ];

  return (
    <div className="relative px-4 sm:px-6 md:px-8">
      {/* Title & Description */}
      <div className="flex flex-col min-[1080px]:flex-row justify-between min-[1280px]:gap-[120px] 3xl:gap-[160px]">
        <div className="text-[32px] sm:text-[38px] leading-tight min-[1080px]:text-[44px] min-[1080px]:w-[520px] min-[1280px]:text-[50px] 2xl:text-[68px] 3xl:text-[88px] font-extrabold">
          Explore Our <span className="!text-[#46F0FF]"><br className="hidden min-[1280px]:block 2xl:hidden" /> Amazing</span> Works
        </div>
        <div className="mt-4 sm:mt-6 min-[1080px]:mt-0">
          <div className="text-[14px] sm:text-[16px] font-semibold min-[1080px]:text-[16px] 2xl:text-[20px] 3xl:text-[24px]">
            <span className="text-[#FFF]">Our</span>
            <span className="text-[#46F0FF]"> Work</span>
          </div>
          <div className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] min-[1080px]:w-[440px] 2xl:w-[525px] 3xl:text-[18px] 3xl:w-[640px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </div>
        </div>
      </div>

      {/* Circle Icon */}
      <div className="hidden min-[1080px]:block absolute min-[1080px]:top-[-40px] min-[1080px]:left-[360px] min-[1280px]:left-[400px] 2xl:top-[-50px] left-[450px] 2xl:left-[450px] 3xl:left-[540px]">
        <Image src={circleIcon} alt="About Us" width={157} height={157} />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mt-6 sm:gap-4 min-[1080px]:gap-[24px] 2xl:gap-[31px]">
        <div className="px-4 py-2 text-sm sm:text-base rounded-full bg-[#01B2C1] text-white">Branding</div>
        <div className="px-4 py-2 text-sm sm:text-base rounded-full border border-[#01B2C1] hover:bg-[#01B2C1] hover:text-white transition duration-300 cursor-pointer">UI/UX Design</div>
        <div className="px-4 py-2 text-sm sm:text-base rounded-full border border-[#01B2C1] hover:bg-[#01B2C1] hover:text-white transition duration-300 cursor-pointer">Development</div>
      </div>

      {/* Marquee */}
      <div className="py-12 sm:py-16 md:py-20 cursor-pointer">
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
};

export default AmazingSection;
