"use client";
import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}) => {
  const mouseX = React.useRef(0);
  const mouseY = React.useRef(0);

  React.useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative h-full w-full",
        containerClassName
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.1), transparent 40%)",
        }}
        animate={
          animate
            ? {
                "--mouse-x": mouseX.current,
                "--mouse-y": mouseY.current,
              }
            : {}
        }
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
      <div className={cn("relative h-full w-full", className)}>
        {children}
      </div>
    </div>
  );
}; 