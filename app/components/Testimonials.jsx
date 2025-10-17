"use client";

import { useState } from "react";

const testimonials = [
  {
    text: `"Lorem ipsum dolor sit amet..."`,
    name: "Jessica Anna",
    title: "Product Manager at BrightApp",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  },
  {
    text: `"Excellent service and fantastic UI."`,
    name: "Liam Gray",
    title: "CTO at TechCore",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    text: `"Professional and consistent support."`,
    name: "Sophia Turner",
    title: "CEO at Creatix",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
  },
  {
    text: `"Amazing experience from start to finish."`,
    name: "Ethan Smith",
    title: "Founder at InnovateX",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = () => setCurrent((current + 1) % total);
  const prev = () => setCurrent((current - 1 + total) % total);

  return (
    <div
      className="bg-[#00051C] w-full text-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 md:py-20 lg:py-24"
      style={{
        backgroundImage: `url('/gradient.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        backgroundSize: "contain",
      }}
    >
      <section className="flex flex-col items-center text-center">
        <h3 className="text-sm text-gray-400 md:text-base lg:text-lg">
          Testimonials
        </h3>
        <h2 className="text-2xl font-bold mt-2 md:text-4xl lg:text-5xl">
          What <span className="!text-cyan-400">Our Client</span> Says
        </h2>

        <div className="relative bg-[#032d3e] w-full max-w-lg md:max-w-2xl lg:max-w-3xl rounded-xl px-6 py-10 mt-8 md:py-14 md:px-10 lg:py-16 lg:px-12">
          <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 border-4 border-cyan-400 rounded-full overflow-hidden bg-gray-200">
            <img
              src={testimonials[current].img}
              alt={testimonials[current].name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-6 md:text-base lg:text-lg">
            {testimonials[current].text}
          </p>
          <h4 className="text-cyan-400 font-bold text-base md:text-lg lg:text-xl">
            {testimonials[current].name}
          </h4>
          <p className="text-xs text-gray-400 md:text-sm lg:text-base">
            {testimonials[current].title}
          </p>
        </div>

        <div className="mt-16 flex items-center justify-center gap-3 flex-wrap md:mt-20 lg:gap-6">
          <button
            onClick={prev}
            className="w-9 h-9 text-lg border-2 border-cyan-400 text-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-black transition md:w-10 md:h-10 md:text-xl lg:w-12 lg:h-12 lg:text-2xl"
          >
            ←
          </button>

          {testimonials.map((t, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-8 h-8 rounded-full overflow-hidden border transition-transform duration-300 cursor-pointer md:w-10 md:h-10 lg:w-12 lg:h-12 ${
                i === current
                  ? "border-cyan-400 border-2 scale-110"
                  : "border-gray-400 opacity-50"
              }`}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

          <button
            onClick={next}
            className="w-9 h-9 text-lg border-2 border-cyan-400 text-cyan-400 rounded-full flex items-center justify-center hover:bg-cyan-400 hover:text-black transition md:w-10 md:h-10 md:text-xl lg:w-12 lg:h-12 lg:text-2xl"
          >
            →
          </button>
        </div>
      </section>
<div className="mt-8 sm:mt-12 md:mt-16 flex justify-center px-4">
  <hr className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] border-t-2 border-[#01B2C1]" />
</div>

    </div>
  );
}
