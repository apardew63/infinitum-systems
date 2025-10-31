"use client";
import React from "react";
import AnimatedText from "../components/ui/animated-text";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";
import LogoSlider from "../components/LogoSlider";
import AnimatedAboutUsSection from "../components/AboutUs";
import BenifitsSection from "../components/BenifitsSection";
import PricingSection from "../components/PricingSection";
import NewsLetterSection from "../components/NewsLetterSection";

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
        <div>
          <Navbar />
        </div>
        <div className="lg:pt-0 pt-10">
          <HeroSection />
        </div>
        <div className="lg:pt-0 pt-10">
          <LogoSlider />
        </div>

        <div className="mt-[60px] lg:mt-[100px] lg:px-[108px] xl:px-[120px] 2xl:px-[140px] 3xl:px-[160px mb-[300px] 1280:px-[40px]">
          <ServicesSection />
        </div>
        <div className="bg-[url('/images/planBg.png')] bg-cover bg-center bg-no-repeat w-full h-auto">
          <PricingSection />
        </div>
        <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] py-10">
          <NewsLetterSection />
        </div>
        <div className="px-4 sm:px-6 lg:px-8 xl:px-[84px] py-12 md:py-44">
          <Footer />
        </div>
      </div>
    </>
  );
}
