"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BenifitsSection from "../components/BenifitsSection";
import AnimatedAboutUsSection from "../components/AboutUs";

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

        {/* Hero Section */}
        <section className="py-16 sm:py-32 md:py-48 lg:py-64 px-4 sm:px-8 md:px-16 lg:px-[108px] xl:px-[120px] 2xl:px-[140px] 3xl:px-[160px] relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <div className="relative z-10 w-full md:w-auto">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase">
              About <span className="!text-[#46F0FF]">Infinitum</span>
              <br />
              Systems <br />
              <span className="text-2xl sm:text-3xl md:text-5xl">
                Pioneering Digital Innovation
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 md:mt-6 max-w-2xl leading-relaxed">
              We craft bold ideas and smart designs that thrive in a
              digital-first world, combining cutting-edge technology with
              creative excellence.
            </p>
            <div className="mt-6 md:mt-8">
              <button
                type="button"
                className="inline-block cursor-pointer bg-[#01B2C1] text-white px-6 py-2 mt-4 rounded-full font-bold hover:bg-white hover:text-[#01B2C1] transition duration-300 text-sm sm:text-base lg:text-lg 3xl:px-8 3xl:py-3 3xl:text-lg 3xl:mt-6"
              >
                Lets Talk
              </button>
            </div>
          </div>

          {/* <div className="relative md:pl-20 lg:pl-72 w-full md:w-[223px] z-10 mt-8 md:mt-0">
              <div className="flex gap-4">
                <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/BuRidrCEDW.png')] bg-cover bg-no-repeat z-[13]" />
                <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/XPqOcLZgnJ.png')] bg-cover bg-no-repeat z-[22]" />
              </div>
              <span className="block w-full md:w-[223px] mt-4 md:mt-0 font-['Poppins'] text-base md:text-[16px] font-normal leading-[24px] text-[#fff] text-left overflow-hidden z-[23]">
                We bridge the gap between <br />
                imagination and digital <br />
                reality with passion.
              </span>
            </div> */}

          <div className="relative pl-72 w-[223px] z-10">
            <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/BuRidrCEDW.png')] bg-cover bg-no-repeat absolute top-0 left-0 z-[13]" />
            <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/XPqOcLZgnJ.png')] bg-cover bg-no-repeat absolute top-0 left-[53px] z-[22]" />
            <span className="flex w-[223px] h-[72px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] absolute top-[84px] left-0 text-left overflow-hidden z-[23]">
              We bridge the gap between <br />
              imagination and digital <br />
              reality with passion.
            </span>
          </div>
        </section>

        {/* Our Story Section */}
        {/* <section className="py-12 md:py-20 relative bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <TypewriterEffect
                words={storyWords}
                className="text-3xl md:text-4xl font-semibold"
              />
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-300 leading-relaxed">
                <TextGenerateEffect
                  words="Founded with a vision to bridge the gap between imagination and digital reality, Infinitum Systems emerged from a passion for creating transformative digital experiences. We began as a small team of innovators who believed that technology should not just function—it should inspire."
                  className="text-gray-300 leading-relaxed"
                />
              </div>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-900/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-6xl font-bold text-neutral-600 dark:text-white text-center"
                  >
                    ⚡
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-center"
                  >
                    Innovation at the speed of light
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <div className="h-32 w-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg"></div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </section> */}

        {/* Our Mission Section */}
        {/* <section className="py-12 md:py-20 bg-white/5 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-8 md:mb-16">
              <TypewriterEffect
                words={missionWords}
                className="text-3xl md:text-4xl font-semibold"
              />
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
            </div>
            <HoverEffect items={missionCards} />
          </div>
        </section> */}

        <div className="mt-[90px] lg:mt-[141px]">
          <AnimatedAboutUsSection />
        </div>

        <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] 1280:px-[40px] lg:mt-[350px] mt-[200px]">
          <BenifitsSection />
        </div>
        {/* Our Team Section */}
        {/* <section className="py-12 md:py-20 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-16">
              <TypewriterEffect
                words={teamWords}
                className="text-3xl md:text-4xl font-semibold"
              />
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
            </div>
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
              <TextGenerateEffect
                words="Behind every great project is a team of passionate professionals. Our diverse group of developers, designers, and strategists brings together years of experience, creative vision, and technical expertise to turn your ideas into digital reality."
                className="text-base md:text-lg text-gray-300 leading-relaxed"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {teamStats.map((stat, index) => (
                <BackgroundGradient
                  key={index}
                  className="rounded-[22px] max-w-sm p-4 sm:p-6 md:p-10 bg-white dark:bg-zinc-900 group"
                >
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-semibold mb-2">
                      {stat.label}
                    </div>
                    <div className="text-gray-400 text-xs md:text-sm">
                      {stat.description}
                    </div>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section> */}

        {/* Call to Action Section */}
        {/* <section className="py-12 md:py-20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ready to Start Your Project?
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with cutting-edge
              technology and creative excellence.
            </p>
            <div className="flex lg:flex-row gap-3 md:gap-4 justify-center">
              <Button
                className="font-semibold text-base md:text-lg cursor-pointer"
                containerClassName="inline-block"
                borderRadius="9999px"
                duration={3000}
              >
                Get Started
              </Button>
              <Button
                className="font-semibold text-base md:text-lg cursor-pointer bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                containerClassName="inline-block"
                borderRadius="9999px"
                duration={3000}
              >
                Learn More
              </Button>
            </div>
          </div>
        </section> */}

        <div className="px-4 sm:px-6 lg:px-8 xl:px-[84px] py-12 md:py-44">
          <Footer />
        </div>
      </div>
    </>
  );
}
