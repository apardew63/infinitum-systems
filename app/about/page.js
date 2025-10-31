"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BenifitsSection from "../components/BenifitsSection";
import AnimatedAboutUsSection from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import LogoSlider from "../components/LogoSlider";
import PricingSection from "../components/PricingSection";
import NewsLetterSection from "../components/NewsLetterSection";
import AboutBenefit from "../components/AboutBenefit";

export default function AboutPage() {
  const storyWords = [
    {
      text: "Our",
    },
    {
      text: "Story",
    },
    {
      text: ".",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const missionWords = [
    {
      text: "Our",
    },
    {
      text: "Mission",
    },
    {
      text: ".",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const teamWords = [
    {
      text: "Our",
    },
    {
      text: "Team",
    },
    {
      text: ".",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const missionCards = [
    {
      title: "Innovation First",
      description:
        "We embrace cutting-edge technologies and methodologies to deliver solutions that are ahead of their time, ensuring our clients stay competitive in an ever-evolving digital landscape.",
      icon: "🚀",
      link: "#",
    },
    {
      title: "Quality Excellence",
      description:
        "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail, ensuring flawless execution and exceptional performance.",
      icon: "💎",
      link: "#",
    },
    {
      title: "Client Success",
      description:
        "Your success is our success. We partner with our clients to understand their unique challenges and deliver customized solutions that drive real business results.",
      icon: "🌟",
      link: "#",
    },
  ];

  const teamStats = [
    {
      number: "50+",
      label: "Projects Completed",
      description: "Successfully delivered projects across various industries",
    },
    {
      number: "5+",
      label: "Years Experience",
      description: "Deep expertise in modern web technologies",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Consistently exceeding client expectations",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock technical support and maintenance",
    },
  ];

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

        <div className="mt-[90px] lg:mt-[141px]">
          <AnimatedAboutUsSection />
        </div>

        <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] 1280:px-[40px] mb-[90px] lg:mb-[141px] lg:mt-[150px] mt-[200px]">
          <AboutBenefit />
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
