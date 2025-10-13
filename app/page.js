// pages/index.js
import Image from "next/image";
import { Poppins, Abhaya_Libre } from "next/font/google";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import LogoCarousel from "./components/LogoCarousel";
import AnimatedAboutUsSection from "./components/AboutUs";
import ServicesSection from "./components/ServicesSection";
import BenifitsSection from "./components/BenifitsSection";
import AmazingSection from "./components/AmazingSection";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import NewsLetterSection from "./components/NewsLetterSection";
import Footer from "./components/Footer";
import GlowingCard from "./components/Dummy";
import { ThreeDMarquee } from "./components/ui/3d-marquee";
import bImg from "../public/benifits-img.png";
import SmoothScrollProvider from "./smooth-scroll-provider";
import { BuildWebsitesSection } from "./components/BuildWebsitesSection";
// import palmVideo from "../public/the-palm-video.mp4";
import kaiserImg from "../public/kaiser-img.png";
import HBOimg from "../public/hbo-img.png";
import zenSilkImg from "../public/silk-zen-img.png";
import { UltimateDevelopmentSection } from "./components/UltimateDevelopmentSection";
import { DD } from "./components/DD";

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
      <SmoothScrollProvider>
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

          <div className="py-20">
            <BuildWebsitesSection />
          </div>

          <div className="">
            <UltimateDevelopmentSection />
          </div>

          <div className="mt-[90px] lg:mt-[141px]">
            <AnimatedAboutUsSection />
          </div>

          <div className="mt-[60px] lg:mt-[100px] lg:px-[108px] 1280:px-[40px]">
            <ServicesSection />
          </div>

          <div className="2xl:px-[84px] 1280:px-[40px] lg:mt-[350px] mt-[200px]">
            <BenifitsSection />
          </div>

          <div className="2xl:px-[84px] lg:py-44 py-28 1280:px-[40px]">
            <AmazingSection />
          </div>

          <div className="">
            <PricingSection />
          </div>

          <div className="2xl:px-[84px] py-10">
            <Testimonials />
          </div>

          <div className="2xl:px-[84px] py-10">
            <NewsLetterSection />
          </div>

          <div className="2xl:px-[84px] lg:py-44  1280:px-[40px]">
            <Footer />
          </div> 
        </div>
      </SmoothScrollProvider>
    </>
  );
}
