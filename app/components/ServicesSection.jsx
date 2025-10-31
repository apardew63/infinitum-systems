"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { SparklesCore } from "./ui/sparkles";
import image from "../../public/images/image2.png";
import image2 from "../../public/images/image3.png";
import image3 from "../../public/images/image4.png";

const services = [
  {
    title: "UI/UX",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    img: image,
  },
  {
    title: "Web Dev",
    desc: "We build blazing-fast websites with clean code and scalable architecture.",
    img: image2,
  },
  {
    title: "Branding",
    desc: "Crafting memorable brand experiences through visual identity and storytelling.",
    img: image3,
  },
];

const ServiceCards = () => {
  const cardRefs = useRef([]);
  const imageContainerRefs = useRef([]);
  const buttonRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    const enters = [];
    const leaves = [];

    cards.forEach((card, i) => {
      const button = buttonRefs.current[i];
      const imageContainer = imageContainerRefs.current[i];

      const enter = () => {
        // Shrink image container height
        imageContainer.style.height = "350px";

        // Show "Explore More" button
        if (button) {
          button.style.display = "flex";
          button.style.opacity = "1";
          button.style.transform = "translateY(-2px)";
        }
      };

      const leave = () => {
        // Reset image height
        imageContainer.style.height = "440px";

        // Hide button
        if (button) {
          button.style.opacity = "0";
          button.style.transform = "translateY(0)";
          setTimeout(() => {
            button.style.display = "none";
          }, 400);
        }
      };

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);

      enters.push(() => card.removeEventListener("mouseenter", enter));
      leaves.push(() => card.removeEventListener("mouseleave", leave));
    });

    return () => {
      enters.forEach((off) => off());
      leaves.forEach((off) => off());
    };
  }, []);

  return (
    <div className="bg-[#00051C] w-full m-0 p-0">
      <div className="w-full px-4 pt-0">
        <p className="text-white font-bold text-center text-lg sm:text-xl lg:text-2xl mt-0 font-['Poppins']">
          What we <span className="!text-sky-300"> do </span>
        </p>
        <p className="text-white font-extrabold text-center font-abhaya text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[48px] py-6 leading-snug sm:leading-tight">
          Transforming ideas <br className="hidden sm:block" /> into visually
          stunning realities
        </p>
      </div>

      <div className="flex justify-center w-full mt-6 sm:mt-[38px]">
        <div className="flex flex-col sm:flex-row max-w-[1600px] w-full gap-y-36 sm:gap-y-20 gap-x-0 sm:gap-x-10 px-4 items-center sm:items-start lg:px-8 xl:px-12 2xl:px-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative w-full sm:w-[480px] cursor-pointer"
            >
              <div className="bg-[#0A0F2C] rounded-2xl overflow-hidden shadow-xl relative z-10">
                <div
                  ref={(el) => (imageContainerRefs.current[index] = el)}
                  className="relative overflow-hidden h-[440px] max-sm:h-[300px] transition-height duration-300 ease-in-out"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={480}
                    height={440}
                    className="object-cover w-full h-full"
                  />

                  <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={60}
                    className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none"
                    particleColor="#00FFFF"
                  />

                  {/* Explore More button for all cards */}
                  <div
                    ref={(el) => (buttonRefs.current[index] = el)}
                    className="absolute bottom-[-20px] max-sm:bottom-[-10px] right-[-2px] opacity-0 z-30 bg-[#00051C] w-28 sm:w-36 h-20 max-sm:h-15 sm:h-20 rounded-tl-4xl flex items-center justify-center"
                    style={{ display: "none" }}
                  >
                    <button className="bg-cyan-400 text-white px-4 py-2 rounded-full hover:bg-cyan-500 transition max-sm:px-1 max-sm:p-1">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 w-full mt-10 sm:mt-[30px] max-sm:mt-[20px] text-center sm:text-left">
                <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2 font-['Poppins']">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-lg leading-relaxed w-full sm:w-[370px] mx-auto sm:mx-0 font-['Poppins'] font-normal">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
