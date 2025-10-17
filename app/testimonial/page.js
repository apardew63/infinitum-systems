"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Button } from "../components/ui/moving-border";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content:
        "Infinitum Systems transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations. The team's expertise in cutting-edge technologies helped us achieve a 300% increase in user engagement.",
      rating: 5,
      project: "E-commerce Platform",
      result: "300% User Engagement Increase",
    },
    {
      name: "Michael Chen",
      position: "Product Manager",
      company: "NextGen Solutions",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content:
        "Working with Infinitum was a game-changer for our startup. They delivered a scalable platform that grows with our business. Their 24/7 support and lightning-fast development cycle kept us ahead of our competition.",
      rating: 5,
      project: "SaaS Platform",
      result: "50% Faster Time-to-Market",
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Digital Dynamics",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      content:
        "The precision and creativity that Infinitum brings to every project is unmatched. They didn't just build our website; they crafted a digital experience that our customers love. ROI increased by 250% within six months.",
      rating: 5,
      project: "Brand Website",
      result: "250% ROI Increase",
    },
    {
      name: "David Thompson",
      position: "CTO",
      company: "InnovateTech",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content:
        "Infinitum Systems didn't just deliver code; they delivered a vision. Their team understood our complex requirements and turned them into elegant solutions. The application performance exceeded all our benchmarks.",
      rating: 5,
      project: "Enterprise Application",
      result: "99.9% Uptime Achieved",
    },
    {
      name: "Lisa Wang",
      position: "Founder",
      company: "HealthTech Pro",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      content:
        "From concept to launch, Infinitum guided us every step of the way. Their expertise in healthcare tech regulations and user experience design helped us create a platform that truly serves our patients.",
      rating: 5,
      project: "Healthcare Platform",
      result: "10,000+ Active Users",
    },
    {
      name: "James Miller",
      position: "Operations Manager",
      company: "LogiFlow Systems",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      content:
        "The logistics dashboard Infinitum built for us revolutionized our operations. Real-time tracking, automated reporting, and intuitive design - everything we needed and more. Our efficiency improved by 40%.",
      rating: 5,
      project: "Operations Dashboard",
      result: "40% Efficiency Boost",
    },
  ];

  const stats = [
    {
      number: "98%",
      label: "Client Satisfaction",
      description: "Happy clients who recommend us",
    },
    {
      number: "150+",
      label: "Projects Delivered",
      description: "Successful launches worldwide",
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance",
    },
    {
      number: "5★",
      label: "Average Rating",
      description: "Consistently top-rated service",
    },
  ];

  const featuredTestimonial = {
    name: "Alex Rivera",
    position: "CEO & Founder",
    company: "FutureTech Innovations",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    content:
      "Infinitum Systems took our ambitious vision and made it a reality. Their team's technical expertise, creative problem-solving, and commitment to excellence is unparalleled. They didn't just build our platform; they built our future. The results speak for themselves - we've seen a 400% growth in our user base and secured Series A funding largely based on the technology foundation they created for us.",
    rating: 5,
    project: "Full-Stack Platform Development",
    result: "400% User Growth & Series A Funding",
  };

  return (
    <>
      <div
        className="bg-[#00051C] min-h-screen pt-6 lg:pt-0"
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

        <section className="py-16 sm:py-32 md:py-48 lg:py-64 px-4 sm:px-8 md:px-16 lg:px-[108px] xl:px-[120px] 2xl:px-[140px] 3xl:px-[160px] relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase">
              Client <span className="!text-[#46F0FF]">Success</span>
              <br />
              Stories <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Real Results, Real Impact
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 max-w-2xl leading-relaxed">
              Discover how we've helped businesses transform their digital
              presence and achieve extraordinary results through innovative
              solutions.
            </p>
            <div className=" my-10 lg:mb-0 lg:mt-6 sm:mt-8">
              <button
                type="button"
                className="inline-block cursor-pointer bg-[#01B2C1] text-white px-6 py-2 mt-4 rounded-full font-bold hover:bg-white hover:text-[#01B2C1] transition duration-300 text-sm sm:text-base lg:text-lg 3xl:px-8 3xl:py-3 3xl:text-lg 3xl:mt-6"
              >
                Start Your Story
              </button>
            </div>
          </div>

          <div className="relative pl-72 w-[223px] z-10 lg:py-0 py-6">
            <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/BuRidrCEDW.png')] bg-cover bg-no-repeat absolute top-0 left-0 z-[13]" />
            <div className="w-[59px] h-[59px] bg-[url('https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-06-04/XPqOcLZgnJ.png')] bg-cover bg-no-repeat absolute top-0 left-[53px] z-[22]" />
            <span className="flex w-[223px] h-[72px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#fff] absolute top-[84px] left-0 text-left overflow-hidden z-[23]">
              We bridge the gap between <br />
              imagination and digital <br />
              reality with passion.
            </span>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-[108px] relative bg-gradient-to-br from-blue-500/5 to-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Featured <span className="text-[#46F0FF]">Success Story</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#46F0FF] to-[#01B2C1] rounded-full mx-auto"></div>
            </div>

            <CardContainer className="inter-var max-w-5xl mx-auto">
              <CardBody className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] border-white/[0.2] w-full h-auto rounded-3xl p-6 sm:p-8 md:p-12 border">
                <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-center">
                  <div className="md:col-span-2">
                    <CardItem
                      translateZ="60"
                      className="flex gap-1 mb-3 md:mb-4"
                    >
                      {[...Array(featuredTestimonial.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-lg md:text-xl"
                        >
                          ⭐
                        </span>
                      ))}
                    </CardItem>

                    <CardItem
                      as="blockquote"
                      translateZ="60"
                      className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6 italic"
                    >
                      "{featuredTestimonial.content}"
                    </CardItem>
                    <CardItem
                      translateZ="50"
                      className="space-y-1 md:space-y-2"
                    >
                      <div className="text-[#46F0FF] font-semibold text-base md:text-lg">
                        {featuredTestimonial.name}
                      </div>
                      <div className="text-gray-400 text-sm md:text-base">
                        {featuredTestimonial.position} at{" "}
                        {featuredTestimonial.company}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-4">
                        <div className="bg-[#46F0FF]/10 px-3 py-1 md:px-4 md:py-2 rounded-full">
                          <span className="text-[#46F0FF] text-xs md:text-sm font-medium">
                            {featuredTestimonial.project}
                          </span>
                        </div>
                        <div className="bg-green-500/10 px-3 py-1 md:px-4 md:py-2 rounded-full">
                          <span className="text-green-400 text-xs md:text-sm font-medium">
                            {featuredTestimonial.result}
                          </span>
                        </div>
                      </div>
                    </CardItem>
                  </div>

                  <div className="text-center mt-4 md:mt-0">
                    <CardItem translateZ="100">
                      <img
                        src={featuredTestimonial.image}
                        alt={featuredTestimonial.name}
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-[#46F0FF]/30 shadow-xl"
                      />
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </section>
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-[108px] relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                What Our <span className="text-[#46F0FF]">Clients Say</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#46F0FF] to-[#01B2C1] rounded-full mx-auto"></div>
              <p className="text-base sm:text-lg text-gray-300 mt-4 md:mt-6 max-w-2xl mx-auto">
                Real feedback from real clients who trusted us with their
                digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <BackgroundGradient
                  key={index}
                  className="rounded-[22px] p-6 sm:p-8 bg-white dark:bg-zinc-900 group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="space-y-3 md:space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-base md:text-lg"
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <p className="text-black leading-relaxed text-sm sm:text-base">
                      "{testimonial.content}"
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-[#46F0FF]/10 px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                        <span className="text-[#46F0FF] text-xs font-medium">
                          {testimonial.project}
                        </span>
                      </div>
                      <div className="bg-green-500/10 px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                        <span className="text-green-400 text-xs font-medium">
                          {testimonial.result}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-4 border-t border-white/10">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#46F0FF]/20"
                      />
                      <div>
                        <h4 className="text-white font-semibold text-sm sm:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-500 text-xs sm:text-sm font-bold">
                          {testimonial.position} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </BackgroundGradient>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-[108px] bg-white/5 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our <span className="text-[#46F0FF]">Track Record</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#46F0FF]/30 transition-all duration-300 group"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#46F0FF] to-[#01B2C1] bg-clip-text text-transparent mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 md:py-20 px-4 sm:px-6 md:px-8 lg:px-[108px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#46F0FF] to-[#01B2C1] bg-clip-text text-transparent">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and transform your
              digital presence today.
            </p>
            <div className="flex lg:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                className="font-semibold text-base sm:text-lg cursor-pointer"
                containerClassName="inline-block"
                borderRadius="9999px"
                duration={3000}
              >
                Start Your Project
              </Button>
              <Button
                className="font-semibold text-base sm:text-lg cursor-pointer bg-transparent border border-[#46F0FF] text-[#46F0FF] hover:bg-[#46F0FF] hover:text-black"
                containerClassName="inline-block"
                borderRadius="9999px"
                duration={3000}
              >
                View Our Work
              </Button>
            </div>
          </div>
        </section>

        <div className="px-4 sm:px-6 md:px-8 lg:px-[84px] py-12 md:py-20 lg:py-44">
          <Footer />
        </div>
      </div>
    </>
  );
}
