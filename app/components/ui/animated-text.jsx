"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const AnimatedText = ({
  words = ["Solution", "Innovation", "Strategy", "Technology"],
  className = "",
  textClassName = "",
  repeatDelay = 0.5,
  typingDuration = 1,
  pauseDuration = 1,
  eraseDuration = 0.5,
  ...props
}) => {
  const wordRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay });

    // Force initial clear to avoid render delay
    gsap.set(wordRef.current, { text: "" });

    words.forEach((word) => {
      tl.to(wordRef.current, {
        duration: typingDuration,
        text: word,
        ease: "none",
      })
        .to({}, { duration: pauseDuration }) // pause after typing
        .to(wordRef.current, {
          duration: eraseDuration,
          text: "",
          ease: "power2.in",
        });
    });
  }, [words, repeatDelay, typingDuration, pauseDuration, eraseDuration]);

  return (
    <span
      ref={wordRef}
      className={textClassName}
      {...props}
    />
  );
};

export default AnimatedText;