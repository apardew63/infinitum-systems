"use client";

import { useRef, useEffect } from "react";

function BackgroundBeams() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const beams = new Array(40).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: (Math.random() - 0.5) * 1.5,
      dy: (Math.random() - 0.5) * 1.5,
      length: 100 + Math.random() * 100,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(255,255,255,0.07)";

      for (let beam of beams) {
        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(beam.x + beam.length, beam.y + beam.length);
        ctx.stroke();

        beam.x += beam.dx;
        beam.y += beam.dy;

        if (beam.x < 0 || beam.x > width) beam.dx *= -1;
        if (beam.y < 0 || beam.y > height) beam.dy *= -1;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full bg-black"
    />
  );
}

export default BackgroundBeams;
