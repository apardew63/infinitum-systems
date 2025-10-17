"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SparklesCore } from "./ui/sparkles";
import image from "../../public/image2.png";
import image2 from "../../public/image3.png";
import image3 from "../../public/image4.png";

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
  const imageContainerRefs = useRef([]); // wrap image to animate height
  const arrowRefs = useRef([]);
  const buttonRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    const enters = [];
    const leaves = [];

    cards.forEach((card, i) => {
      const arrow = arrowRefs.current[i];
      const button = buttonRefs.current[i];
      const text = textRefs.current[i];
      const imageContainer = imageContainerRefs.current[i];

      const enter = () => {
        gsap.killTweensOf([arrow, button, text, imageContainer]);

        // Animate image container height to 380px on hover
        gsap.to(imageContainer, {
          height: 350,
          duration: 0.4,
          ease: "power2.in",
        });

        if (i === 1) {
          if (button) {
            button.style.display = "flex";
            gsap.to(button, {
              opacity: 1,
              y: -2,
              duration: 0.5,
              ease: "power3.out",
            });
          }
          gsap.to(text, {
            opacity: 1,
            y: -10,
            x: 10,
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          if (arrow) {
            gsap.to(arrow, {
              opacity: 1,
              rotate: -15,
              duration: 0.4,
              ease: "back.out(1.7)",
            });
          }
          gsap.to(text, {
            opacity: 1,
            y: -10,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      };

      const leave = () => {
        gsap.killTweensOf([arrow, button, text, imageContainer]);

        gsap.to(imageContainer, {
          height: 440,
          duration: 0.4,
          ease: "power2.inOut",
        });

        if (i === 1) {
          if (button) {
            gsap.to(button, {
              opacity: 0,
              y: 0,
              duration: 0.4,
              ease: "power1.in",
              onComplete: () => {
                if (button) button.style.display = "none";
              },
            });
          }
          gsap.to(text, {
            opacity: 0,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power1.inOut",
          });
        } else {
          if (arrow) {
            gsap.to(arrow, {
              opacity: 0,
              rotate: 0,
              x: 0,
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power1.out",
            });
          }
          gsap.to(text, {
            opacity: 0,
            y: 0,
            duration: 0.4,
            ease: "power1.inOut",
          });
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
        <p className="text-white font-bold text-center text-lg sm:text-xl lg:text-2xl mt-0">
          What we <span className="!text-sky-300"> do </span>
        </p>
        <p className="text-white font-extrabold text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[48px] py-6 leading-snug sm:leading-tight">
          Transforming ideas <br className="hidden sm:block" /> into visually
          stunning realities
        </p>
      </div>

      <div className="flex justify-center w-full mt-6 sm:mt-[38px]">
        <div className="flex flex-col sm:flex-row sm:flex-row max-w-[1600px] w-full gap-y-36 sm:gap-y-20 gap-x-0 sm:gap-x-10 px-4 items-center sm:items-start lg:px-8 xl:px-12 2xl:px-16">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative w-full sm:w-[480px] cursor-pointer"
            >
              <div className="bg-[#0A0F2C] rounded-2xl overflow-hidden shadow-xl relative z-10">
                <div
                  ref={(el) => (imageContainerRefs.current[index] = el)}
                  className="relative overflow-hidden h-[440px] transition-height duration-300 ease-in-out"
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

                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-30"></div>

                  {index === 1 ? (
                    <div
                      ref={(el) => (buttonRefs.current[index] = el)}
                      className="absolute bottom-[-20px] right-[-2px] opacity-0 z-30 bg-[#00051C] w-28 sm:w-36 h-20 sm:h-20 rounded-md flex items-center justify-center"
                      style={{ display: "none" }}
                    >
                      <button className="bg-cyan-400 text-white px-4 py-2 rounded-full hover:bg-cyan-500 transition">
                        Explore More
                      </button>
                    </div>
                  ) : (
                    <div
                      ref={(el) => (arrowRefs.current[index] = el)}
                      className={`absolute ${
                        index === 1 ? "bottom-0 right-1" : "top-0 right-3"
                      } opacity-0`}
                    >
                      <div className="relative">
                        <div
                          className={`absolute ${
                            index === 1 ? "-bottom-4" : "-top-5"
                          } -right-15 bg-[#00051C] w-28 sm:w-36 h-20 sm:h-24 rounded-full`}
                        />
                        <div className="bg-cyan-400 rounded-full p-3 sm:p-4 w-14 sm:w-16 h-14 sm:h-16 flex items-center justify-center shadow-md rotate-[-15deg]">
                          <ArrowUpRight className="text-white" size={24} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div
                ref={(el) => (textRefs.current[index] = el)}
                className="absolute left-0 w-full opacity-0 mt-10 sm:mt-[30px] text-center sm:text-left"
              >
                <h3 className="text-white text-lg sm:text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-lg leading-relaxed w-full sm:w-[370px] mx-auto sm:mx-0">
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
