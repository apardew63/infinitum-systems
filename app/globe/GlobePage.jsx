"use client";

import globeData from "../../data/globe.json";
const { World } = require("../components/ui/globe");

const globeConfig = {
  pointSize: 1.6,
  atmosphereColor: "#ffffff",
  showAtmosphere: true,
  atmosphereAltitude: 0.08,
  polygonColor: "rgba(255,255,255,0.06)",
  globeColor: "#130d25",
  emissive: "#32035e",
  emissiveIntensity: 0.15,
  shininess: 0.9,
  arcTime: 2000,
  arcLength: 0.6,
  rings: 1,
  maxRings: 3,
  ambientLight: "#ffffff",
  directionalLeftLight: "#ffffff",
  directionalTopLight: "#ffffff",
  pointLight: "#ffffff",
};

export default function GlobePage() {
  return (
    <div className="h-screen w-screen bg-black overflow-hidden">
      <World data={globeData} globeConfig={globeConfig} />
    </div>
  );
}
