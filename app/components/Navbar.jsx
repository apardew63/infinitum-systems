// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { Button } from "./ui/moving-border";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const [isDesktop, setIsDesktop] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setMounted(true);
//     const handleResize = () => setIsDesktop(window.innerWidth >= 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const handleItemClick = () => setIsMenuOpen(false);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isActive = (path) => mounted && pathname === path;

//   return (
//     <nav
//       className={`py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-[108px] fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
//         scrolled ? "bg-[#00051C]/60 backdrop-blur-xl shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-screen-xl 3xl:max-w-[1600px] flex flex-wrap items-center justify-between">
//         <div className="flex items-center">
//           <Link href="/">
//             <Image
//               src="/logo.svg"
//               className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto ml-1"
//               alt="Logo"
//               width={180}
//               height={16}
//             />
//           </Link>
//         </div>

//         <div className="flex md:order-2">
//           {mounted && isDesktop && (
//             <Button
//               className="font-semibold text-base sm:text-lg cursor-pointer"
//               containerClassName="inline-block"
//               borderRadius="9999px"
//               duration={3000}
//             >
//               Get started
//             </Button>
//           )}
//           <button
//             onClick={toggleMenu}
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none"
//             aria-label="Toggle menu"
//             aria-expanded={isMenuOpen}
//           >
//             {isMenuOpen ? (
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             ) : (
//               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             )}
//           </button>
//         </div>

//         <div className="hidden cursor-pointer md:flex justify-center gap-6 lg:gap-[64px] 3xl:gap-[96px] text-sm sm:text-base lg:text-lg font-light group">
//           <Link href="/" className={`transition-colors duration-300 ${isActive("/") ? "text-[#46F0FF]" : "text-white hover:!text-[#46F0FF]"}`} onClick={handleItemClick}>Home</Link>
//           <Link href="/about" className={`transition-colors duration-300 ${isActive("/about") ? "text-[#46F0FF]" : "text-white hover:!text-[#46F0FF]"}`} onClick={handleItemClick}>About Us</Link>
//           <Link href="/#what-we-do" className={`transition-colors duration-300 ${isActive("/#what-we-do") ? "text-[#46F0FF]" : "text-white hover:!text-[#46F0FF]"}`} onClick={handleItemClick}>What We do</Link>
//           <Link href="/testimonial" className={`transition-colors duration-300 ${isActive("/testimonial") ? "text-[#46F0FF]" : "text-white hover:!text-[#46F0FF]"}`} onClick={handleItemClick}>Testimonial</Link>
//         </div>
//       </div>

//       <div className={`fixed inset-0 z-60 bg-black bg-opacity-90 transition-all duration-300 transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden overflow-y-auto`}>
//         <div className="flex flex-col items-center justify-center h-full pt-16 pb-24 px-6">
//           <div className="absolute top-6 right-6">
//             <button onClick={toggleMenu} className="text-white p-2 rounded-full hover:bg-white hover:text-[#01B2C1] transition duration-300" aria-label="Close menu">
//               <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>

//           <ul className="flex flex-col items-center space-y-6 w-full max-w-xs">
//             <li><Link href="/" onClick={handleItemClick} className={`block py-3 text-center text-lg sm:text-xl font-extralight transition-all duration-300 ${isActive("/") ? "text-[#01B2C1]" : "text-white hover:text-[#01B2C1]"}`}>Home</Link></li>
//             <li><Link href="/about" onClick={handleItemClick} className={`block py-3 text-center text-lg sm:text-xl font-extralight transition-all duration-300 ${isActive("/about") ? "text-[#01B2C1]" : "text-white hover:text-[#01B2C1]"}`}>About Us</Link></li>
//             <li><Link href="/#what-we-do" onClick={handleItemClick} className={`block py-3 text-center text-lg sm:text-xl font-extralight transition-all duration-300 ${isActive("/#what-we-do") ? "text-[#01B2C1]" : "text-white hover:text-[#01B2C1]"}`}>What We do</Link></li>
//             <li><Link href="/testimonial" onClick={handleItemClick} className={`block py-3 text-center text-lg sm:text-xl font-extralight transition-all duration-300 ${isActive("/testimonial") ? "text-[#01B2C1]" : "text-white hover:text-[#01B2C1]"}`}>Testimonial</Link></li>
//           </ul>

//           <div className="mt-10">
//             <button type="button" className="bg-[#01B2C1] text-white px-6 py-3 sm:px-8 sm:py-4 sm:text-lg rounded-full font-semibold hover:bg-white hover:text-[#01B2C1] transition duration-300">Get started</button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleItemClick = () => setIsMenuOpen(false);

  const isActive = (path) => mounted && pathname === path;

  return (
    <nav
      className={`py-6 sm:py-8 lg:py-10 px-4 lg:pr-0 pr-6 sm:px-8 lg:px-[108px] fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
        scrolled
          ? "bg-[#00051C]/60 backdrop-blur-xl shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl 3xl:max-w-[1600px] flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              className="h-10 sm:h-12 md:h-16 lg:h-20 w-auto ml-1"
              alt="Logo"
              width={180}
              height={16}
            />
          </Link>
        </div>

        <div className="flex md:order-2">
          {mounted && isDesktop && (
            <Button
              className="font-semibold text-base sm:text-lg cursor-pointer"
              containerClassName="inline-block"
              borderRadius="9999px"
              duration={3000}
            >
              Get started
            </Button>
          )}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden cursor-pointer md:flex justify-center gap-6 lg:gap-[64px] 3xl:gap-[96px] text-sm sm:text-base lg:text-lg font-light group">
          <Link
            href="/"
            className={`transition-colors duration-300 ${
              isActive("/")
                ? "text-[#46F0FF]"
                : "text-white hover:!text-[#46F0FF]"
            }`}
            onClick={handleItemClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors duration-300 ${
              isActive("/about")
                ? "text-[#46F0FF]"
                : "text-white hover:!text-[#46F0FF]"
            }`}
            onClick={handleItemClick}
          >
            About Us
          </Link>
          <Link
            href="/#what-we-do"
            className={`transition-colors duration-300 ${
              isActive("/#what-we-do")
                ? "text-[#46F0FF]"
                : "text-white hover:!text-[#46F0FF]"
            }`}
            onClick={handleItemClick}
          >
            What We do
          </Link>
          <Link
            href="/testimonial"
            className={`transition-colors duration-300 ${
              isActive("/testimonial")
                ? "text-[#46F0FF]"
                : "text-white hover:!text-[#46F0FF]"
            }`}
            onClick={handleItemClick}
          >
            Testimonial
          </Link>
        </div>
      </div>

      {/* Mobile Drawer using Portal */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] bg-black bg-opacity-90 transform transition-transform duration-500 ease-in-out md:hidden overflow-y-auto ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full pt-16 pb-24 px-6">
              <div className="absolute top-6 right-6">
                <button
                  onClick={toggleMenu}
                  className="text-white p-2 rounded-full hover:bg-white hover:text-[#01B2C1] transition duration-300"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* MENU LINKS */}
              <ul className="flex flex-col items-center space-y-6 w-full max-w-xs">
                <li>
                  <Link
                    href="/"
                    onClick={handleItemClick}
                    className={`block py-3 text-center text-lg sm:text-xl font-extralight transition-all duration-300 ${
                      isActive("/")
                        ? "text-[#01B2C1]"
                        : "text-white hover:text-[#01B2C1]"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={handleItemClick}
                    className={`block py-3 text-center text-lg sm:text-xl font-extralight transition-all duration-300 ${
                      isActive("/about")
                        ? "text-[#01B2C1]"
                        : "text-white hover:text-[#01B2C1]"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#what-we-do"
                    onClick={handleItemClick}
                    className={`block py-3 text-center text-lg sm:text-xl font-extralight transition-all duration-300 ${
                      isActive("/#what-we-do")
                        ? "text-[#01B2C1]"
                        : "text-white hover:text-[#01B2C1]"
                    }`}
                  >
                    What We do
                  </Link>
                </li>
                <li>
                  <Link
                    href="/testimonial"
                    onClick={handleItemClick}
                    className={`block py-3 text-center text-lg sm:text-xl font-extralight transition-all duration-300 ${
                      isActive("/testimonial")
                        ? "text-[#01B2C1]"
                        : "text-white hover:text-[#01B2C1]"
                    }`}
                  >
                    Testimonial
                  </Link>
                </li>
              </ul>

              <div className="mt-10">
                <button
                  type="button"
                  className="bg-[#01B2C1] text-white px-6 py-3 sm:px-8 sm:py-4 sm:text-lg rounded-full font-semibold hover:bg-white hover:text-[#01B2C1] transition duration-300"
                >
                  Get started
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </nav>
  );
};

export default Navbar;
