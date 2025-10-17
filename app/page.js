// pages/index.js
import Image from "next/image";
import { Poppins, Abhaya_Libre } from "next/font/google";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AnimatedAboutUsSection from "./components/AboutUs";
import ServicesSection from "./components/ServicesSection";
import BenifitsSection from "./components/BenifitsSection";
import AmazingSection from "./components/AmazingSection";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import NewsLetterSection from "./components/NewsLetterSection";
import Footer from "./components/Footer";
import kaiserImg from "../public/kaiser-img.png";
import HBOimg from "../public/hbo-img.png";
import zenSilkImg from "../public/silk-zen-img.png";
import LogoSlider from "./components/LogoSlider";

export default function Home() {
  const images = [
    kaiserImg.src,
    { type: "video", src: "/atelier-video.mp4" },
    zenSilkImg.src,
    { type: "video", src: "/kaiser-video.mp4" },
    HBOimg.src,
    { type: "video", src: "/plinth-video.mp4" },
    kaiserImg.src,
    { type: "video", src: "/the-palm-video.mp4" },
    kaiserImg.src,
    { type: "video", src: "/atelier-video.mp4" },
    zenSilkImg.src,
    { type: "video", src: "/kaiser-video.mp4" },
    HBOimg.src,
    { type: "video", src: "/plinth-video.mp4" },
    kaiserImg.src,
    { type: "video", src: "/atelier-video.mp4" },
    kaiserImg.src,
    { type: "video", src: "/kaiser-video.mp4" },
    HBOimg.src,
    { type: "video", src: "/the-palm-video.mp4" },
    zenSilkImg.src,
    { type: "video", src: "/plinth-video.mp4" },
    kaiserImg.src,
    { type: "video", src: "/atelier-video.mp4" },
    HBOimg.src,
    { type: "video", src: "/kaiser-video.mp4" },
    zenSilkImg.src,
    { type: "video", src: "/the-palm-video.mp4" },
    kaiserImg.src,
    { type: "video", src: "/plinth-video.mp4" },
    kaiserImg.src,
    { type: "video", src: "/the-palm-video.mp4" },
    HBOimg.src,
    { type: "video", src: "/atelier-video.mp4" },
    zenSilkImg.src,
    { type: "video", src: "/kaiser-video.mp4" },
  ];

  return (
    <>
      <div
        className="bg-[#00051C] min-h-screen"
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

          <div className="mt-[60px] lg:mt-[100px] lg:px-[108px] xl:px-[120px] 2xl:px-[140px] 3xl:px-[160px] 1280:px-[40px]">
            <ServicesSection />
          </div>

          <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] 1280:px-[40px] lg:mt-[350px] mt-[200px]">
            <BenifitsSection />
          </div>

          <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] lg:py-44 py-28 1280:px-[40px]">
            <AmazingSection />
          </div>

          <div className="">
            <PricingSection />
          </div>

          <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] py-10">
            <Testimonials />
          </div>

          <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] py-10">
            <NewsLetterSection />
          </div>

          <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] lg:py-44  1280:px-[40px]">
            <Footer />
          </div>
        </div>
    </>
  );
}
