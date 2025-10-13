'use client';
import React from 'react';

const logos = [
  '/3m.svg',
  '/barstool-store.svg',
  '/budweiser.svg',
  '/buzzfeed.svg',
  '/forbes.svg',
  '/macys.svg',
  '/menshealth.svg',
  '/mrbeast.svg',
  
];

const LogoCarousel = () => {
  return (
    <section className="logo-slider overflow-hidden bg-white py-8">
      <div className="relative w-full whitespace-nowrap">
        <div className="inline-flex animate-marquee">
          {[...logos, ...logos].map((src, index) => (
            <div key={index} className="mx-8 inline-flex items-center">
              <img
                src={src}
                alt="logo"
                className="h-12 w-auto object-contain opacity-50 hover:opacity-100 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
