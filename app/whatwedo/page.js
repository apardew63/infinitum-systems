"use client";
import React from "react";
import AnimatedText from "../components/ui/animated-text";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";

export default function AboutPage() {

  return (
    <>
      <div
        className="bg-[#00051C] min-h-screen pt-16 lg:pt-0"
        style={{
          backgroundColor: "rgb(0, 5, 28)",
          backgroundImage: `
          radial-gradient(circle at 50% -35%, rgb(1, 178, 193) 0px, transparent 30%)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navbar />

        <section className="py-16 sm:py-32 md:py-48 lg:py-64 px-4 sm:px-8 md:px-16 lg:px-[108px] xl:px-[120px] 2xl:px-[140px] 3xl:px-[160px] relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <div className="relative z-10 w-full md:w-auto">
            {/* <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase">
              About <span className="!text-[#46F0FF]">Infinitum</span>
              <br />
              Systems <br />
              <span className="text-2xl sm:text-3xl md:text-5xl">
                Crafting Digital Experiences That Inspire
              </span>
            </h1> */}

            {/* Animated Text */}
            <h1 className="text-[28px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white uppercase leading-tight mt-10">
              About{" "}
              <AnimatedText
                words={["Crafting", "Digital"]}
                textClassName="!text-[#46F0FF]"
              /> <br />
              <span className="text-2xl sm:text-3xl md:text-5xl">
                Crafting Digital Experiences That Inspire
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 md:mt-6 max-w-2xl leading-relaxed">
              We’re a creative digital agency specializing in web design,
              development, and branding. Our mission is to empower businesses
              with bold ideas, smart technology, and stunning design that drive
              results in a digital-first world.
            </p>

            <div className="mt-6 md:mt-8">
              <button
                type="button"
                className="inline-block cursor-pointer bg-[#01B2C1] text-white px-6 py-2 mt-4 rounded-full font-bold hover:bg-white hover:text-[#01B2C1] transition duration-300 text-sm sm:text-base lg:text-lg 3xl:px-8 3xl:py-3 3xl:text-lg 3xl:mt-6"
              >
                Let’s Talk
              </button>
            </div>
          </div>
        </section>

        <div className="mt-[60px] lg:mt-[100px] lg:px-[108px] xl:px-[120px] 2xl:px-[140px] 3xl:px-[160px] 1280:px-[40px]">
          <ServicesSection />
        </div>

        <div className="px-4 sm:px-6 lg:px-8 xl:px-[84px] py-12 md:py-44">
          <Footer />
        </div>
      </div>
    </>
  );
}
