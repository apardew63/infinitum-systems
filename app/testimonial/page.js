"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Button } from "../components/ui/moving-border";
import HeroSection from "../components/HeroSection";
import LogoSlider from "../components/LogoSlider";
import PricingSection from "../components/PricingSection";
import ServicesSection from "../components/ServicesSection";
import NewsLetterSection from "../components/NewsLetterSection";
import Testimonials from "../components/Testimonials";

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
        <div className="2xl:px-[84px] xl:px-[100px] 2xl:px-[120px] 3xl:px-[140px] py-10">
          <Testimonials />
        </div>

        <div className="px-4 sm:px-6 lg:px-8 xl:px-[84px] py-12 md:py-44">
          <Footer />
        </div>
      </div>
    </>
  );
}
